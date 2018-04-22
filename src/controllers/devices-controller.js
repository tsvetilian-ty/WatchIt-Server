const Device = require('../models/device-model');
const mongoose = require('mongoose');

exports.get_all_devices = (req, res) => {
  const user = req.userIdentity;

  Device.find({ owner: user.user_id })
    .then(devices => res.status(200).json(devices))
    .catch(() => res.status(500).json({
      error: {
        message: 'Something went wrong!',
      },
    }));
};

exports.get_device = (req, res) => {
  const deviceIdentity = req.params.deviceId;
  const user = req.userIdentity;

  Device.findOne({ _id: deviceIdentity, owner: user.user_id })
    .then(((device) => {
      if (!device) {
        return res.status(404).json({
          error: {
            message: 'Device Not Found',
          },
        });
      }
      return res.status(200).json({
        id: device.id,
        name: device.name,
        type: device.type,
      });
    }))
    .catch(() => res.status(500).json({
      error: {
        message: 'Something went wrong!',
      },
    }));
};

exports.add_device = (req, res) => {
  const user = req.userIdentity;

  Device.find({ owner: user.user_id })
    .then((devices) => {
      const exist = devices.filter(device => device.name === req.body.name);

      if (exist.length >= 1) {
        return res.status(200).json({
          id: exist[0].id,
          name: exist[0].name,
          type: exist[0].type,
          broadcast: exist[0].broadcast,
        });
      }

      const newDevice = new Device({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        type: req.body.type,
        broadcast: req.body.broadcast,
        owner: user.user_id,
      });

      newDevice.save()
        .then(device => res.status(201).json({
          id: device.id,
          name: device.name,
          type: device.type,
          broadcast: device.broadcast,
        }))
        .catch(() => res.status(500).json({
          error: {
            message: 'Something went wrong!',
          },
        }));
    })
    .catch(() => res.status(500).json({
      error: {
        message: 'Something went wrong!',
      },
    }));
};

exports.update_broadcast = (req, res) => {
  const deviceIdentity = req.params.deviceId;
  const user = req.userIdentity;
  const newBroadcastToken = req.body.broadcast;

  Device.findOneAndUpdate(
    { _id: deviceIdentity, owner: user.user_id },
    { $set: { broadcast: newBroadcastToken } },
    { new: true },
  )
    .then(() => res.status(204).json({})).catch(() => res.status(500).json({
      error: {
        message: 'Something went wrong!',
      },
    }));
};

exports.delete_device = (req, res) => {
  const deviceIdentity = req.params.deviceId;
  const user = req.userIdentity;

  Device.remove({ _id: deviceIdentity, owner: user.user_id })
    .then((device) => {
      if (device.n >= 1) {
        return res.status(200).json({
          message: 'Device successfully removed!',
        });
      }
      return res.status(422).json({
        message: 'Unprocessable Entity',
      });
    })
    .catch(() => res.status(500).json({
      error: {
        message: 'Something went wrong!',
      },
    }));
};
