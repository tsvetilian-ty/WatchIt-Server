// eslint-disable-next-line no-unused-vars
exports.notFound = (req, res, next) => res.status(404).json({
  error: {
    message: 'Route Not Found',
  },
});

