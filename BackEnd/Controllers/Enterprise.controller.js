const enterPriseCtrl = {};
const enterPrise = require('../models/Empresa.modal');
const User = require("../models/User.modal");
const Block = require('../src/block');
const EmpresaUsuarioModal = require('../models/EmpresaUsuario.modal');
const BlockChainModal = require("../models/Blockchain.modal")
const SHA256 = require("crypto-js/sha256");


enterPriseCtrl.getEnterprises = async (req, res) => {
    let enterPrises = await enterPrise.find();
    res.send(enterPrises)
};

//Obtener un usuario

enterPriseCtrl.getEnterprise = async (req, res) => {
    let id = req.params.id
    let enterPriseOne = await enterPrise.findById(id);
    res.send(enterPriseOne)
};


//Para crear un usuario
enterPriseCtrl.createEnterPrise = async (req, res) => {

    const { name, location } = req.body

    const newEnterprise = new enterPrise({
        name,
        location
   

    })

    const enterPriseOne = await enterPrise.findOne({ name: name })

    if (enterPriseOne) {
        res.json({
            status: 'El nombre de la empresa ya existe'
        })
    } else {
        
        await newEnterprise.save()

        res.json({
            status: 'Empresa creada'
        })

    }

};


enterPriseCtrl.update = async (req, res) => {

    id = req.params.id

    const enterPriseOne = await enterPrise.findById(req.params.id);
    const { name, location } = req.body;

    const nuevoEmpresa = {
        name: name,
        location: location,

    };

    


    await enterPrise.findByIdAndUpdate(id, nuevoEmpresa, { userFindAndModify: false });

    res.json({
        status: 'Usuario actualizado'
    });

};

enterPriseCtrl.addUser = async (req, res) => {

    id_empresa = req.params.id_empresa
    id_usuario = req.params.id_usuario



    const enterPriseOne = await enterPrise.findById(id_empresa);


    const user = await User.findById(id_usuario)

    const block = new Block({ data: user });

    enterPriseOne.users.push(user)

    addBlockFirstBlock(block, id_empresa, id_usuario);

    await enterPriseOne.save()

    



    

    res.json({
        status: 'Usuario añadido'
    });

};

enterPriseCtrl.getUsersByEnterPrise = async(req,res) => {
    
    id_empresa = req.params.id
    empresa = await enterPrise.findById(id_empresa)
    id_usuarios = empresa.users
    let usuarios  = []
    for (var i = 0; i < id_usuarios.length; i++) {
        usuarios[i] = await User.findById(id_usuarios[i]) 
      }

    res.send(usuarios)
}

enterPriseCtrl.getUsersNotInEnterPrise = async(req,res) => {

    let allUsers = await User.find()
    id_empresa = req.params.id
    empresa = await enterPrise.findById(id_empresa)
    id_users = empresa.users
    let usersInEnterprise  = []
    for (var i = 0; i < id_users.length; i++) {
        usersInEnterprise[i] = await User.findById(id_users[i]) 
    }

    c = allUsers.filter( x => !usersInEnterprise.filter( y => y.id === x.id).length);
    res.send(c)


    
}

enterPriseCtrl.putBlockChainInUsers = async(req,res)=>{
    id_empresa = req.params.id_empresa
    id_usuario = req.params.id_usuario

    const user = await User.findById(id_usuario)

    const { tratamiento } = req.body;

    let blockachain = await EmpresaUsuarioModal.find()

    var chain;

    for(var i = 0 ; i < blockachain.length; i++){
        if(blockachain[i].userId.toString() == id_usuario.toString() && blockachain[i].enterpriseId.toString() == id_empresa.toString()){
            chain = blockachain[i]
        }
    }

    

    let longitud = chain.cadena.length;



    const block = new Block({ data: user });

    let idLastBlock = chain.cadena[longitud - 1]
    let lastBlock = await BlockChainModal.findById(idLastBlock.toString())

    const SecondBlockChain = new BlockChainModal({
        hash: block.hash,
        heigh: longitud,
        body: block.body,
        previousHash: lastBlock.hash,
        tratamiento: tratamiento,
        userId: id_usuario,
        enterpriseId: id_empresa

    })
    await SecondBlockChain.save()
    chain.cadena.push(SecondBlockChain)
    await chain.save()

    res.json({
        status:"se guardo haha"
    })



}

enterPriseCtrl.getBlockChainInUsers = async(req,res)=>{
    id_empresa = req.params.id_empresa
    id_usuario = req.params.id_usuario

    let blockachain = await EmpresaUsuarioModal.find()

    var chain;

    for(var i = 0 ; i < blockachain.length; i++){
        if(blockachain[i].userId.toString() == id_usuario.toString() && blockachain[i].enterpriseId.toString() == id_empresa.toString()){
            chain = blockachain[i]
        }
    }

    var id_blockchains = chain.cadena
    var blockchains = []

    for(var i = 0; i < id_blockchains.length; i++){

        blockchains[i] = await BlockChainModal.findById(id_blockchains[i])
    }

    res.send(blockchains)
   

}



addBlockFirstBlock = async (block, id_empresa, id_usuario) => {
   
    let Allblockachain = await EmpresaUsuarioModal.find()

    var blockachain;

    for(var i = 0 ; i < Allblockachain.length; i++){
        if(Allblockachain[i].userId.toString() == id_usuario.toString() && Allblockachain[i].enterpriseId.toString() == id_empresa.toString()){
            blockachain = Allblockachain[i]
        }
    }


    if(blockachain === undefined){

        const userEmpresa = new EmpresaUsuarioModal({
            userId: id_usuario,
            enterpriseId: id_empresa,

        })

        await userEmpresa.save()

        let self = userEmpresa.cadena.length;


        if (self === 0) {
    
            const blockG = new Block({ data: "Genesis Block" });
            blockG.hash = SHA256(JSON.stringify(blockG)).toString(); //creamos el hash
            blockG.height = self;
            
    
            const FirstBlockChain = new BlockChainModal({
                hash: blockG.hash,
                heigh: blockG.height,
                body: blockG.body,
                previousHash: null,
                tratamiento: null,
                userId: id_usuario,
                enterpriseId: id_empresa
                
    
            })
    
            await FirstBlockChain.save()
            userEmpresa.cadena.push(FirstBlockChain)
            await userEmpresa.save()
    
    
    
    
            block.height = 1; //lingitud que tiene al array.
            block.time = new Date().getTime().toString(); // tiempo de creación.
            block.hash = SHA256(JSON.stringify(block)).toString(); //creamos el hash
    
            if (self > 0) { // comprobamos que no sea el  bloque genesis
                block.previousBlockHash = blockG.hash; //comprobamos que esten enlazadps
            }
    
            const SecondBlockChain = new BlockChainModal({
                hash: block.hash,
                heigh: block.height,
                body: block.body,
                previousHash: blockG.hash,
                tratamiento: null,
                userId: id_usuario,
                enterpriseId: id_empresa

    
            })
    
            await SecondBlockChain.save()
    
            userEmpresa.cadena.push(SecondBlockChain)
            await userEmpresa.save()    
        }
    
    }

  

}

addBlock = async()=>{

}

addBlockUpdate = async (block, id) => {

    let user = await User.findById(id)
    let cadena = user.cadena;
    let idLastBlock = cadena[cadena.length - 1]
    let lastBlock = await BlockChainModal.findById(idLastBlock.toString())


    block.height = cadena.length; //lingitud que tiene al array.
    block.time = new Date().getTime().toString(); // tiempo de creación.
    block.hash = SHA256(JSON.stringify(block)).toString(); //creamos el hash


    const blockUpdate = new BlockChainModal({
        hash: block.hash,
        heigh: block.height,
        body: block.body,
        previousHash: lastBlock.hash,
        userId: user._id

    })

    await blockUpdate.save()

    user.cadena.push(blockUpdate)

    await user.save()

}




module.exports = enterPriseCtrl;