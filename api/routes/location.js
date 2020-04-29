const express = require('express')
const router = express.Router()

const locationController = require('../controllers/locationController');

router.post('/addlocation', locationController.addLocation);
router.post('/getuserlocations', locationController.getUserlocations);
router.get('/getlocations', locationController.getAllLocations);

module.exports = router