module.exports = function (request) {
  return `<h3>Email: ${request.body.email}</h3><h3>Message: </h3><p>${request.body.message}</p>`;
};
