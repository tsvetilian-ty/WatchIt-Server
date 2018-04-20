exports.verify = (req, res, next) => {
  const userName = req.body.user_name;
  const userEmail = req.body.email;
  const userPassword = req.body.password;

  const dataToValidate = [userName, userEmail, userPassword];

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
