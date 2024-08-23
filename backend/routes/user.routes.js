const exprees = require('express');
const usercontroller = require('../controllers/user.controller')
const errorhandler = require('../middlewears/errorHandller.middlewear');
const validator = require('../middlewears/validator.middlewear');
const objectid = require('../middlewears/objectid.middlewear');
const uservalidation = require('../validations/user.validation')
const multer = require('multer');
const upload = multer({ dest: "./public/uploads/" });
const authmiddlewear = require('../middlewears/auth.middlewear');

const router = exprees.Router();


router.get("/users", errorhandler(usercontroller.index));
router.post("/users", upload.single('image'), validator(uservalidation.store), errorhandler(usercontroller.store));
router.get("/users/:id", objectid, errorhandler(usercontroller.show));
router.put("/users/:id", authmiddlewear, objectid, upload.single('image'), validator(uservalidation.update), errorhandler(usercontroller.update));
router.delete("/users/:id", authmiddlewear, objectid, errorhandler(usercontroller.delete));


module.exports = router;