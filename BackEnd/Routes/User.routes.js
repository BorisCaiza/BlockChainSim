const express = require('express');
const router = express.Router()
const userCtrl = require ('../Controllers/User.controllers');


router.get('/',  userCtrl.getUsers)
router.get('/obtenerUsuario/:id',  userCtrl.getUser)
router.post('/crear',  userCtrl.createUser)
router.put('/update/:id', userCtrl.update);

module.exports = router