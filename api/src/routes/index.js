const { Router } = require('express');
const userRoute = require('./userRoute');
const authRoute = require('./authRoute');
const productRoute = require('./productRoute');
const categoryRoute = require('./categoryRoute');
const formRoute = require('./formRoute');

const router = Router();

router.use('/', userRoute);
router.use('/', authRoute);
router.use('/', productRoute);
router.use('/', categoryRoute);
router.use('/', formRoute);


module.exports = router;