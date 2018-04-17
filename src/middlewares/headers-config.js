// eslint-disable-next-line consistent-return
exports.available = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Origin, Authorization');
  
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PATCH, DELETE');
      return res.status(200).json({});
    }
  
    next();
  };
  