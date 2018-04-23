const Device = require('../models/device-model');
const admin = require('firebase-admin');

exports.init = (req, res) => {
  const user = req.userIdentity;
  const playOn = req.body.play_on;

  Device.findOne({ _id: playOn, owner: user.user_id })
    .then((device) => {
      if (!device) {
        return res.status(404).json({
          error: {
            message: 'Invalid Device!',
          },
        });
      }

      const message = {
        android: {
          priority: 'high',
        },
        data: {
          play: req.body.file_name,
          playFrom: req.body.play_from,
          sourceName: req.body.source_name,
          key: req.body.key,
          path: req.body.content_path,
          poster: req.body.poster,
          description: req.body.description,
          time: req.body.time,
          name: req.body.name,
          season: req.body.season,
        },
        token: device.broadcast,
      };

      admin.messaging()
        .send(message)
        .then(() => res.status(200).json({
          message: `Check ${device.name} to play!`,
        }))
        .catch(err => res.status(400).json(err));
    })
    .catch(() => res.status(500).json({
      error: 'Something went wrong!',
    }));
};
