const BlockCtrl = {};
const BlockG = require('../models/Blockchain.modal');
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

BlockCtrl.getBlockhainbyUserInEnterprise = async (req, res) => {

    let id_empresa = req.params.id_empresa;
    let id_usuario = req.params.id_usuario;
    
    
   
};


addBlock = async (block, NewUser) => {

    await NewUser.save()

    let cadena = NewUser.cadena;

    let self = cadena.length;


    if (self === 0) {

        const blockG = new Block({ data: "Genesis Block" });
        blockG.hash = SHA256(JSON.stringify(blockG)).toString(); //creamos el hash
        blockG.height = self;
        blockG.idUser

        const FirstBlockChain = new BlockChainModal({
            hash: blockG.hash,
            heigh: blockG.height,
            body: blockG.body,
            previousHash: null,
            userId: NewUser._id
            

        })

        await FirstBlockChain.save()
        NewUser.cadena.push(FirstBlockChain)
        await NewUser.save()




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
            userId: NewUser._id

        })

        await SecondBlockChain.save()

        NewUser.cadena.push(SecondBlockChain)
        await NewUser.save()







    }


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

module.exports = BlockCtrl;
