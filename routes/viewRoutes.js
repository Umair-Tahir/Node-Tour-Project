const express = require('express');
const viewControlller = require('../controllers/viewController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', authController.isLoggedIn, viewControlller.getOverview);

router.get('/tour/:slug', authController.isLoggedIn, viewControlller.getTour);

router.get('/login', authController.isLoggedIn, viewControlller.getLoginForm);
router.get('/me', authController.protect, viewControlller.getAccount);
router.post(
  '/submit-user-data',
  authController.protect,
  viewControlller.updateUserData
);

module.exports = router;
