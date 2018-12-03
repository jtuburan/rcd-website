const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
var jwt    = require('jsonwebtoken');

router.post('/login',(req, res, next) => {
   let userData = req.body;
   User.findOne({ username: userData.username  }, (error, user) => {
       if(error) {
            console.log(error);
       } else {
           if(!user) {
                res.status(401).json({
                    message: "invalid username"
                });
           } else { bcrypt.compare( userData.password, user.password, (err, result) => {
                    if(result == true) {
                        let payload = { subject: user._id }
                        let token = jwt.sign(payload, 'secret');
                        res.status(201).json({ token });
                    } else {
                        res.send(404).json({ message: 'password invalid' });
                    }
               });
           }   
       }
   });
});

router.post('/register',(req, res, next) => {
    bcrypt.hash(req.body.password,10)
        .then(hash => {
            const user = new User({
                username: req.body.username,
                password: hash
            });
            user.save()
                .then(result => {
                    let payload = { subject: result._id }
                    let token = jwt.sign(payload, 'secret');
                    res.status(201).json({ token });
                })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    });
                });
        });
 });
// middleware to verify the token
 function verifyToken(req, res, next) {
    if(!req.headers.authorization ) {
        return res.status(401).send('unauthorized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if(token === 'null') {
        return res.status(401).send('unauthorized request');
    }
    let payload = jwt.verify(token, 'secret')
    if(!payload) {
        return res.status(401).send('unauthorized request');
    }
    req.userId = payload.subject;
    nect();
 }

 router.get('/postListEvent', verifyToken, (req,res) => {
    let events = [
      {
        "_id": "1",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]
    res.json(events)
  });

  router.get('/postList', (req,res) => {
    let events = [
      {
        "_id": "1",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]
    res.json(events)
  });

module.exports = router;