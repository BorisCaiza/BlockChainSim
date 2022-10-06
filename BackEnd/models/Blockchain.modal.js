const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlockChainSchema = new Schema({
    hash: { type: String, require: [true, 'hash'] },
    heigh: { type: String, require: [true, 'heigh'] },
    body: { type: String, require: [true, 'body'] },
    previousHash: { type: String, require: [true, 'hash'] },
    userId: { type: mongoose.Types.ObjectId, required: true, ref: 'User' }


    
}, {
    timestamps: true
});

module.exports = mongoose.model('BlockChain', BlockChainSchema);
