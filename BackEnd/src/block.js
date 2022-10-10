const SHA256 = require("crypto-js/sha256");
const hex2ascii = require("hex2ascii");

class Block {

  constructor(data) {
    this.hash = null; //se calcula con todos los datos que tiene el bloque.
    this.height = 0; //bloques dentro de la cadena
    this.body = Buffer.from(JSON.stringify(data).toString("hex")); //datos para encriptarlos lo convertimos en string y en exadecimal
    this.time = 0; //Momento en que se genera este bloque.
    this.previousBlockHash = null; //referencia al bloque anterior.
    this.userId = ""; //
  }
  validate() {
    const self = this; //referencia al bloque

    return new Promise((resolve, reject) => {
      let currentHash = self.hash; //obtenemos el hash

      self.hash = SHA256(JSON.stringify({ ...self, hash: null })).toString(); //creamos un hash con sha256

      if (currentHash !== self.hash) { //comprobamos si el hash es distinto pues es false
        return resolve(false);
      }

      resolve(true);
    });
  }

  getBlockData() {
    const self = this;
    return new Promise((resolve, reject) => {
      let encodedData = self.body; //obtenemos el body codificada
      let decodedData = hex2ascii(encodedData); //decodificamos
      let dataObject = JSON.parse(decodedData); //lo convertimos a json

      if (dataObject === "Genesis Block") { // primer bloque, no tiene has previo
        reject(new Error("This is the Genesis Block"));
      }

      resolve(dataObject);
    });
  }

  toString() { //mostramos la ifnormación del bloque.
    const { hash, height, body, time, previousBlockHash, userId } = this;
    return `Block -
        hash: ${hash}
        height: ${height}
        body: ${body}
        time: ${time}
        previousBlockHash: ${previousBlockHash}
        userId: ${userId} 
        -------------------------------------`;
  }
}

module.exports = Block;