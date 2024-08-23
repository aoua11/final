const exprees = require('express');
const orderscontroller = require('../controllers/orders.controller');
const errorhandler = require('../middlewears/errorHandller.middlewear');
const authmiddlewear = require('../middlewears/auth.middlewear');
const objectid = require('../middlewears/objectid.middlewear');
const multer = require('multer');
const upload = multer({ dest: "public/uploads/" });

const router = exprees.Router();


router.get("/orders", errorhandler(orderscontroller.index));
router.post("/orders", upload.single('image'), errorhandler(orderscontroller.store));
router.get("/orders/:id", authmiddlewear, objectid, errorhandler(orderscontroller.show));
router.put("/orders/:id", authmiddlewear, objectid, upload.single('image'), errorhandler(orderscontroller.update));
router.delete("/orders/:id", authmiddlewear, objectid, errorhandler(orderscontroller.delete));


module.exports = router;






