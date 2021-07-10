module.exports = function (request) {
  return `<h2>${request.body.firstName} ${
    request.body.lastName
  } has requested a bid!</h2><h3>Email: ${request.body.email}</h3><h3>Phone: ${
    request.body.phone
  }</h3> <h3>Interests:</h3> <ul>${
    request.body.interests.asphaltConcretePaving
      ? "<li>Asphalt Concrete Paving</li>"
      : ""
  }${request.body.interests.grading ? "<li>Grading</li>" : ""}${
    request.body.interests.undergroundUtility
      ? "<li>Underground Utility</li>"
      : ""
  }${
    request.body.interests.commercialAndPublicWorksConstruction
      ? "<li>Commerical and Public Works Construction</li>"
      : ""
  }${
    request.body.interests.residentialConstruction
      ? "<li>Residential Construction</li>"
      : ""
  }${
    request.body.interests.concreteDesignAndRepair
      ? "<li>Concrete Design and Repair</li>"
      : ""
  }</ul> <h3>About the job:</h3><p>${request.body.aboutTheJob}</p>`;
};
