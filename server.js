const http = require('http');
const logger = require('fancy-log');
const main = require('./src/main');

const port = process.env.PORT || 3001;

const server = http.createServer(main);

server.listen(port);

logger(`Server is running on port ${port}`);