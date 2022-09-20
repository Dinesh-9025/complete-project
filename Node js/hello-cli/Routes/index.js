const express = require('express');
let router = express.Router();
const service = require('../Services/service');

router.post('/login', service.Login)
router.post('/productpost', service.product)

router.get('/dashboard', service.Dashboard)
router.get('/productsell', service.waitingProduct)
router.get('/feeds', service.feeds)
router.get('/regions', service.regions)
router.get('/GeneralStatus', service.General_Status)
router.get('/countries', service.Countries)
router.get('/recentUsers', service.Recent_Users)
router.get('/recentComments', service.Recent_Comments)
router.get('/about', service.about)
router.get('/views', service.views)

router.get('/userGeneral', service.userGeneral)
router.get('/userimage', service.useradimage)
router.get('/userphones', service.smartPhones)
router.get('/userjeans', service.user_jeans)


module.exports = router;