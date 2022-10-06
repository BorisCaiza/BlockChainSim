const UserCtrl = {};
const User = require('../models/User.modal');
const Block = require("../src/block");
const BlockChainModal = require("../models/Blockchain.modal");
const SHA256 = require("crypto-js/sha256");

//Obtener usuarios

UserCtrl.getUsers = async (req, res) => {
    let users = await User.find();
    res.send(users)
};

//Obtener un usuario

UserCtrl.getUser = async (req, res) => {
    let id = req.params.id
    let user = await User.findById(id);
    res.send(user)
};


//Para crear un usuario
UserCtrl.createUser = async (req, res) => {

    const { name, email, password } = req.body

    const NewUser = new User({
        name,
        email,
        password,

    })

    const nameUser = await User.findOne({ name: name })

    if (nameUser) {
        res.json({
            status: 'El nombre de usuario ya existe'
        })
    } else {
        const emailUser = await User.findOne({ email: email })
        if (emailUser) {
            res.json({
                status: 'El correo ya existe o inválido'
            })
        }
        else {

            const block1 = new Block({ data: NewUser });
            addBlock(block1, NewUser)

            res.json({
                status: 'Se creo al usuario'
            })


        }
    }

};


UserCtrl.update = async (req, res) => {

    id = req.params.id

    const usuario = await User.findById(req.params.id);
    const { name, email } = req.body;

    const nuevoUsuario = {
        name: name,
        email: email,

    };

    


    await User.findByIdAndUpdate(id, nuevoUsuario, { userFindAndModify: false });

    const user = await User.findById(req.params.id)
    
    const block1 = new Block({ data: user });

    addBlockUpdate(block1, id)
    res.json({
        status: 'Usuario actualizado'
    });

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




module.exports = UserCtrl;
