const User = require('../models/user-model');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(422).json({
          err: {
            message: 'Authentication failed!',
          },
        });
      }
      bcrypt.compare(req.body.password, user.password)
        .then((equal) => {
          if (!equal) {
            return res.status(422).json({
              err: {
                message: 'Authentication failed!',
              },
            });
          }
          const signedToken = jwt.sign(
            {
              user_id: user.id,
              user_name: user.user_name,
              email: user.email,
            },
            process.env.JWT_SECRET,
          );
          return res.status(200).json({
            username: user.user_name,
            email: user.email,
            token: signedToken,
          });
        }).catch(() => res.status(500).json({
          err: {
            message: 'Something went wrong!',
          },
        }));
    })
    .catch(() => res.status(500).json({
      err: {
        message: 'Something went wrong!',
      },
    }));
};

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email })
    // eslint-disable-next-line consistent-return
    .then((user) => {
      if (user) {
        return res.status(422).json({
          err: {
            message: 'Unprocessable Entity',
          },
        });
      }
      bcrypt.hash(req.body.password, 10)
        .then((hashed) => {
          const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            user_name: req.body.user_name,
            email: req.body.email,
            password: hashed,
          });

          newUser.save()
            .then((result) => {
              const signedToken = jwt.sign(
                {
                  user_id: result.id,
                  user_name: result.user_name,
                  email: result.email,
                },
                process.env.JWT_SECRET,
              );
              return res.status(201).json({
                username: result.user_name,
                email: result.email,
                token: signedToken,
              });
            })
            .catch(() => res.status(500).json({
              err: {
                message: 'Something went wrong!',
              },
            }));
        })
        .catch(() => res.status(500).json({
          err: {
            message: 'Something went wrong!',
          },
        }));
    })
    .catch(() => res.status(500).json({
      err: {
        message: 'Something went wrong!',
      },
    }));
};
