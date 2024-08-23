const { Router } = require('express');

const authcontroller = require('../controllers/auth.controller');
const errorhandler = require('../middlewears/errorHandller.middlewear');
const validator = require('../middlewears/validator.middlewear');
const authvalidation = require('../validations/auth.validation');


const router = Router();

router.post('/login' , validator(authvalidation.login) , errorhandler(authcontroller.login));


module.exports = router ; 