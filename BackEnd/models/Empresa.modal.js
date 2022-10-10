const mongoose = require('mongoose');
const { Schema } = mongoose;

const enterPriseSchema = new Schema({
    name: { type: String, require: [true, 'Nombre requerido'] },
    location: { type: String, require: [true, 'Ubicación requerida.'] },
    users: [{ type: mongoose.Types.ObjectId , ref: 'User' }],
   
    
    
}, {
    timestamps: true
});


module.exports = mongoose.model('Enterprise', enterPriseSchema);