const { Router } = require('express');
const userRoute = require('./userRoute');
const authRoute = require('./authRoute');
const productRoute = require('./productRoute');

const router = Router();

router.use('/', userRoute);
router.use('/', authRoute);
router.use('/', productRoute);


module.exports = router;