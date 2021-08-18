const router = require('express').Router()
const productCtrl = require('../controllers/productCtrl')
const auth = require('../middlewore/auth')

router.post('/createnewproduct',auth,productCtrl.createNewProduct)

module.exports = router