const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, require: [true, 'Nombre requerido'] },
    email: { type: String, require: [true, 'Email requerido'] },
    password: { type: String, require: [true, 'Contraseña requerido'] },
    
    
}, {
    timestamps: true
});


module.exports = mongoose.model('User', UserSchema);