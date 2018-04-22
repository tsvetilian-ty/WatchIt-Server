const express = require('express');

const routes = express.Router();

const auth = require('../middlewares/auth-check');

const addDevicePayload = require('../helpers/add-device-payload');

const updateDeviceBroadcast = require('../helpers/update-device-broadcast-payload');

const devicesController = require('../controllers/devices-controller');

routes.get('/', auth.check, devicesController.get_all_devices);

routes.post('/', auth.check, addDevicePayload.verify, devicesController.add_device);

routes.get('/:deviceId', auth.check, devicesController.get_device);

routes.patch('/:deviceId', auth.check, updateDeviceBroadcast.verify, devicesController.update_broadcast);

routes.delete('/:deviceId', auth.check, devicesController.delete_device);

module.exports = routes;
