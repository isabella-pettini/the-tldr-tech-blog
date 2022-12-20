const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-route');
const dashboardRoutes = require('./dashboard-route');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;