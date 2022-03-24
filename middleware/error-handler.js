const { CustomAPIError } = require("../errors/custom-error");
const errorHandlerMiddleWare = (error, req, res, next) => {
  if (error instanceof CustomAPIError) {
    return res.status(error.statusCode).send({ error: error.message });
  }
  res.status(500).send({ error: 'Something went wrong, please try again'});
};

module.exports = errorHandlerMiddleWare;
