const express = require('express');
const router = express.Router();
const { signupServiceProvider, signinServiceProvider, allServiceProviders } = require('../controllers/serviceProviderController');
// const { isAuthenticated, isAdmin } = require('../middleware/auth');


//user routes

// /api/allusers
router.get('/allServiceProviders', allServiceProviders);
// /api/user/id
router.post('/signupServiceProvider', signupServiceProvider);
// /api/user/edit/id
router.post('/signinServiceProvider',signinServiceProvider);




module.exports = router;