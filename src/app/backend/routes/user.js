const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

router.post('/login',(req, res, next) => {
   let userData = req.body;
   User.findOne({ name: userData.name  }, (error, user) => {
       if(error) {
            console.log(error);
       } else {
           if(!user) {
                res.status(401).json({
                    message: "invalid username"
                });
           } else { bcrypt.compare( userData.password, user.password, (err, result) => {
                    if(result == true) {
                        res.status(200).send(user);
                    } else {
                        res.send('invalid password');
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
                    res.status(201).json({
                        message: "user created",
                        result: result
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    });
                });
        });
 });


module.exports = router;