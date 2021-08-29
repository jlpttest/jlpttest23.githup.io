const express = require('express');
var router = express.Router();

const controller = require('../controllers/category.controller');

router.get('/jlptn1/:id', controller.n1SearchCategory);
router.get('/jlptn2/:id', controller.n2SearchCategory);
router.get('/jlptn3/:id', controller.n3SearchCategory);
router.get('/jlptn4/:id', controller.n4SearchCategory);
router.get('/jlptn5/:id', controller.n5SearchCategory);
router.get('/jlptn1/:category/test/:testid', controller.n1Test);
router.get('/jlptn2/:category/test/:testid', controller.n2Test);
router.get('/jlptn3/:category/test/:testid', controller.n3Test);
router.get('/jlptn4/:category/test/:testid', controller.n4Test);
router.get('/jlptn5/:category/test/:testid', controller.n5Test);

module.exports = router;