const requestABid = {
  schema: {
    body: {
      type: "object",
      properties: {
        firstName: { type: "string", minLength: 2, maxLength: 20 },
        lastName: { type: "string", minLength: 2, maxLength: 20 },
        email: { type: "string", minLength: 2, maxLength: 100 },
        phone: { type: "string", minLength: 2, maxLength: 20 },
        interests: {
          type: "object",
          properties: {
            asphaltConcretePaving: { type: "boolean" },
            grading: { type: "boolean" },
            undergroundUtility: { type: "boolean" },
            commercialAndPublicWorksConstruction: { type: "boolean" },
            residentialConstruction: { type: "boolean" },
            concreteDesignAndRepair: { type: "boolean" },
          },
        },
        aboutTheJob: { type: "string", minLength: 2, maxLength: 3000 },
      },
      required: [
        "firstName",
        "lastName",
        "email",
        "phone",
        "company",
        "interests",
        "aboutTheJob",
      ],
    },
  },
};

module.exports = requestABid;
