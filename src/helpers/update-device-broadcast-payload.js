exports.verify = (req, res, next) => {
  const newBroadcastToken = req.body.broadcast;

  const dataToValidate = [newBroadcastToken];

  dataToValidate.forEach((item) => {
    if (item === '' || item === undefined) {
      res.status(400).json({
        error: {
          message: 'Required field is missing or empty!',
        },
      });
    }
  });

  next();
};
