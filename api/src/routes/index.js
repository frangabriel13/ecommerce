const { Router } = require('express');
const userRoute = require('./userRoute');
const authRoute = require('./authRoute');

const router = Router();

router.use('/', userRoute);
router.use('/', authRoute);


module.exports = router;