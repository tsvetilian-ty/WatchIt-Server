const jwt = require('jsonwebtoken');
const logger = require('fancy-log');
// eslint-disable-next-line consistent-return
exports.check = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      error: {
        message: 'Invalid token!',
      },
    });
  }

  const tokenSpliting = token.split(' ')[1];

  // eslint-disable-next-line consistent-return
  jwt.verify(tokenSpliting, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        error: {
          message: 'Unable to authorize!',
        },
      });
    }
    if (!decoded) {
      return res.status(401).json({
        error: {
          message: 'Invalid token!',
        },
      });
    }
    req.userIdentity = decoded;

    logger(`${decoded.user_name} (${decoded.user_id}) successfully authorized!`);

    next();
  });
};
