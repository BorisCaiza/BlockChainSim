const express = require('express');
const router = express.Router()
const enterPriseCtrl = require ('../Controllers/Enterprise.controller');

router.get('/',  enterPriseCtrl.getEnterprises)
router.get('/obtenerEmpresa/:id',  enterPriseCtrl.getEnterprise)
router.post('/crear',  enterPriseCtrl.createEnterPrise)
router.put('/update/:id', enterPriseCtrl.update);
router.post('/agregarUsuarioEmpresa/:id_empresa/:id_usuario', enterPriseCtrl.addUser);
router.get('/usuariosEmpresa/:id', enterPriseCtrl.getUsersByEnterPrise);
router.get('/usuariosNoEmpresa/:id', enterPriseCtrl.getUsersNotInEnterPrise);
router.post('/agregarModificacion/:id_empresa/:id_usuario', enterPriseCtrl.putBlockChainInUsers);
router.get('/obtenerBlockChain/:id_empresa/:id_usuario', enterPriseCtrl.getBlockChainInUsers);


module.exports = router