const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router({ mergeParams: true });
const AuthGuardMiddleware = require('./middleware/AuthGuardMiddleware');
const CollectConroller = require('./controllers/CollectController');
const PageViewsController = require('./controllers/PageViewsController');
const UsersRateController = require('./controllers/UsersRateController');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(cors())
router.options('*', cors())

router.post('/collect', CollectConroller.index);

router.get('/page-views', AuthGuardMiddleware, PageViewsController.index);

router.get('/page-views/by-browser', AuthGuardMiddleware, PageViewsController.byBrowser);

router.get('/page-views/by-country', AuthGuardMiddleware, PageViewsController.byCountry);

router.get('/users-rate', AuthGuardMiddleware, UsersRateController.index);

module.exports = router;