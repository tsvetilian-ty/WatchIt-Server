const API_NAME = process.env.NAME || 'Unnamed Server';

exports.home = (req, res) => res.status(200).json({
  message: `${API_NAME}`,
});
