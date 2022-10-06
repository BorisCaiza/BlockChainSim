const express = require('express');
const router = express.Router()
const blockchainCtrl = require ('../Controllers/BlockChain.controller');

router.get('/',  blockchainCtrl.getBlockhain)
router.get('/obtenerUsuario/:id',  blockchainCtrl.getBlockhainbyUser)


module.exports = router