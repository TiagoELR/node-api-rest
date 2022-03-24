const errorHandlerMiddleWare = ((error, req, res, next) => {
  res.status(500).send({error: error})
});

module.exports = errorHandlerMiddleWare