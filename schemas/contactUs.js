const contactUs = {
  schema: {
    body: {
      type: "object",
      properties: {
        firstName: { type: "string", minLength: 2, maxLength: 20 },
        lastName: { type: "string", minLength: 2, maxLength: 20 },
        email: { type: "string", minLength: 2, maxLength: 100 },
        message: { type: "string", minLength: 2, maxLength: 2000 },
      },
      required: ["firstName", "lastName", "email", "message"],
    },
  },
};

module.exports = contactUs;
