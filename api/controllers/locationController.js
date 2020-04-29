const User  = require('../models/userModel');
const Location = require('../models/locationModel');
// const production = true;
const mongoose = require('mongoose');

// let keys = "";
// if (!production)
//   keys = require('../config/keys');

const mongodb = process.env.MONGO_URL 
// || keys.mongourl;

mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

exports.addLocation = function(req, res) {
  User.find({username: req.body.username}, function (err, user) {
    if (err) {
      throw err;
    }
    else {
      if (user.length > 0) {
        const newLocation = new Location({
          username: req.body.username,
          title: req.body.title,
          description: req.title,
          latitude: req.body.latitude,
          longitude: req.body.longitude
        });
        newLocation.save(function(err) {
          if (err)
            throw err;
          res.json({
            message: "New location created"
          });
        });
      } else {
        res.json({
          message: 'No user found.'
        })
      }
    }
  })
}

exports.getUserlocations = function(req, res) {
  Location.find({username: req.body.username}, function(err, locations) {
    if (err) {
      throw err;
    }
    res.json(locations)
  })
}

exports.getAllLocations = function(req, res) {
  Location.find({}, function(err, locations) {
    if (err) {
      throw err;
    }
    res.json(locations)
  })
}