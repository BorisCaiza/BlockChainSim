/*const Blockchain = require("./src/blockchain");
const Block = require("./src/block");
const BlockChainController  = require("../BlockChain/Controllers/BlockChain.controller")
const BlockChainModal = require("./models/Blockchain.modal")

async function run() {
  const blockchain = await new Blockchain();
  const block1 = new Block({ data: "Block #1" });
  await blockchain.addBlock(block1);
  const block2 = new Block({ data: "Block #2" });
  await blockchain.addBlock(block2);
  const block3 = new Block({ data: "Block #3" });
  await blockchain.addBlock(block3);

  blockchain.print();
}

async function get(){

  const blockchain = await BlockChainController.getBlockChain()



  }

run();
*/

const express = require('express');
const cors = require('cors');
const { mongoose } = require('./conexion')
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE',"PUT");

  next();
});

//Ajustes Configiracion del puerto
//solicitar el puerto disponible
app.set('port', 8000); 
app.use(cors());
app.use(express.json());




//rutas
app.use("/api/user", require('./Routes/User.routes'));
app.use("/api/blockchain", require('./Routes/Blockchain.routes'));
app.use("/api/enterPrise", require('./Routes/Empresa.routes'));

//ruta simple
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to scandere application." });
});


app.listen(app.get('port'), function(){
    console.log("Server is listening on port " + app.get('port'));
});
