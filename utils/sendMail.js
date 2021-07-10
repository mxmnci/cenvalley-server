const nodemailer = require("nodemailer");
require("dotenv").config();

const mailer = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD,
  },
});

const sendMail = (from, to, subject, message) => {
  return new Promise((resolve, reject) => {
    mailer.sendMail(
      {
        from,
        to,
        subject,
        html: message || "[No message]",
      },
      function (err, info) {
        if (err) {
          console.log("Email failed to send. Error: " + err);
          reject(false);
        }
        console.log("Email sent successfully!");
        resolve(true);
      }
    );
  });
};

module.exports = sendMail;
