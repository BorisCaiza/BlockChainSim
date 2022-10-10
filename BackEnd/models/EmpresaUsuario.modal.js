const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserEnterpriseSchema = new Schema({
    userId: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
    enterpriseId: { type: mongoose.Types.ObjectId, required: true, ref: 'Enterprise' },
    cadena: [{ type: mongoose.Types.ObjectId, required: true, ref: 'BlockChain' }],
    
    
}, {
    timestamps: true
});


module.exports = mongoose.model('UserEnterprise', UserEnterpriseSchema);