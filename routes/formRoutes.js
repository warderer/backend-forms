const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.post('/sendform', (formController.insertFormData));
router.get('/thankyou', (formController.goToThankYou));

module.exports = router;