const BlockCtrl = {};
const BlockG = require('../models/Blockchain.modal.js');
const User = require('../models/User.modal')


BlockCtrl.getBlockhain = async (req, res) => {
    let colecciones = await BlockG.find();
    res.send(colecciones)
};

BlockCtrl.getBlockhainbyUser = async (req, res) => {

    let id = req.params.id;
    if(id){
        const blockchainUser = await BlockG.find({userId: id})
        res.send(blockchainUser)
       
    }else{
        res.send("No existe el usuario")
    }
   
};




module.exports = BlockCtrl;
