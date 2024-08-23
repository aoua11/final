const exprees = require('express');
const productscontroller = require('../controllers/products.controller');
const errorhandler = require('../middlewears/errorHandller.middlewear');
const validator = require('../middlewears/validator.middlewear');
const objectid = require('../middlewears/objectid.middlewear');
const productsvalidation = require('../validations/products.validations');
const multer = require('multer');
const upload = multer({ dest: "public/uploads/" });
const authmiddlewear = require('../middlewears/auth.middlewear');

const router = exprees.Router();


router.get("/products", errorhandler(productscontroller.index));
router.post("/products",upload.single('image'), validator(productsvalidation.store), errorhandler(productscontroller.store));
router.get("/products/:id", objectid, errorhandler(productscontroller.show));
router.put("/products/:id", authmiddlewear, objectid, upload.single('image'), validator(productsvalidation.update), errorhandler(productscontroller.update));
router.delete("/products/:id", authmiddlewear, objectid, errorhandler(productscontroller.delete));


module.exports = router;