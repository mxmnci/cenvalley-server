const fastify = require("fastify")({
  logger: true,
});
const sendMail = require("../utils/sendMail");
const requestABidSchema = require("../schemas/requestABid");
const contactUsSchema = require("../schemas/contactUs");
const generateRequestMessage = require("../utils/generateRequestMessage");
const generateContactMessage = require("../utils/generateContactMessage");

fastify.register(require("fastify-cors"), {
  origin: "*",
  methods: ["GET", "POST"],
});

const HOST = "0.0.0.0";

const PORT = process.env.PORT || 5000;

const contactAddresses = process.env.CONTACT_ADDRESSES.split(",");

fastify.get("/", (req, res) => {
  res.send("The server is functional 🚀");
});

fastify.post("/contact", contactUsSchema, async (request, reply) => {
  reply.header("Access-Control-Allow-Origin", "*");
  reply.header("Access-Control-Allow-Methods", "POST");
  const subject = `Message from ${request.body.firstName} ${request.body.lastName}`;

  const message = generateContactMessage(request);

  try {
    await sendMail(request.body.email, contactAddresses, subject, message);
    reply.send({
      message: "Your message has been sent successfully!",
      success: true,
    });
  } catch (err) {
    console.log(err);
    reply.send({ message: "Something went wrong :(", success: false });
  }
});

fastify.post("/request-a-bid", requestABidSchema, async (request, reply) => {
  reply.header("Access-Control-Allow-Origin", "*");
  reply.header("Access-Control-Allow-Methods", "POST");
  const subject = `New bid request from ${request.body.firstName} ${request.body.lastName}`;

  const message = generateRequestMessage(request);

  try {
    await sendMail(request.body.email, contactAddresses, subject, message);
    reply.send({
      message: "Your bid request has been sent successfully!",
      success: true,
    });
  } catch (err) {
    console.log(err);
    reply.send({ message: "Something went wrong :(", success: false });
  }
});

fastify.listen(PORT, HOST, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
