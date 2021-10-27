
module.exports.errorHandler = (err, req, res, _next) => {
  res.status(500).json({ message: "Algo anda mal..."})
};