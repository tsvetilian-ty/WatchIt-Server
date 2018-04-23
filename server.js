const http = require('http');
const logger = require('fancy-log');
const main = require('./src/main');
const admin = require('firebase-admin');

// Require path to your Service Account JSON (Example: require('path_to_file');)
const SERVICE_ACCOUNT = require('./firebase.json');

const GCLOUD_ENV_VAR = process.env.GCLOUD_PROJECT;

if (GCLOUD_ENV_VAR === undefined || GCLOUD_ENV_VAR === '') {
  logger.error('Configure GCLOUD_PROJECT environment variable, it\'s required!');
}

if (SERVICE_ACCOUNT === undefined) {
  logger.error('Configure SERVICE_ACCOUNT, it\'s required!');
}

admin.initializeApp({
  credential: admin.credential.cert(SERVICE_ACCOUNT),
});

const port = process.env.PORT || 3001;

const server = http.createServer(main);

server.listen(port);

logger(`Server is running on port ${port}`);
