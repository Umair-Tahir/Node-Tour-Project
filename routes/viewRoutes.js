const express = require('express');
const viewControlller = require('../controllers/viewController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.isLoggedIn);

router.get('/', viewControlller.getOverview);

router.get('/tour/:slug', viewControlller.getTour);

router.get('/login', viewControlller.getLoginForm);

module.exports = router;
