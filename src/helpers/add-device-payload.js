exports.verify = (req, res, next) => {
  const deviceName = req.body.name;
  const deviceType = req.body.type;
  const deviceBroadcast = req.body.broadcast;

  const dataToValidate = [deviceName, deviceType, deviceBroadcast];

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
