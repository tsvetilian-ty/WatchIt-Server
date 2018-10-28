### WatchIT server side application is resposible to send play data to a mobile device (filtering, auth)

Working Demo URL: https://watchit-eu.herokuapp.com/

[Windows Client](https://github.com/tsvetilian-ty/WatchIt-Desktop-Client) | [Android Client](https://github.com/tsvetilian-ty/WatchIt-Android-Client)

## Contents

- [Usage](#usage)
- [Endpoints](#endpoints)
- [License](LICENSE.md)

## Usage

WatchIT server uses Firebase Cloud Messaging so it requires [firebase.json](https://github.com/tsvetilian-ty/WatchIt-Server/blob/master/server.js#L6) in the root of the project.
You can generate the file from: Your Firebase Project > Project Settings > Service accounts

Install dependencies:

```console
$ npm install
```

Run the app:

```console
$ npm start
```

## Endpoints

All routes with access restriction require bearer token as authorization header:

```
  Authorization: Bearer [token]
```

* [Server root](docs/root.md) : `GET /`
* [Login](docs/auth/login.md) : `POST /api/v1/users/login`
* [Sign Up](docs/auth/signup.md) : `POST /api/v1/users/signup`
* [All devices](docs/devices/all.md) : `GET /api/v1/devices`
* [Add device](docs/devices/add_device.md) : `POST /api/v1/devices`
* [Get a device](docs/devices/get_device.md) : `GET /api/v1/devices/:deviceId`
* [Update FCM token](docs/devices/patch_device.md) : `PATCH /api/v1/devices/:deviceId`
* [Stream media](docs/stream.md) : `POST /api/v1/play`
