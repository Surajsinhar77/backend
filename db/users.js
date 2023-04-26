const mongoose = require('mongoose')

const regDataScheme = () =>{
    const regScheme = new mongoose.Schema({
        name: String,
        email:String,
        password:String
    })
    return regScheme;
}


module.exports = mongoose.model('regs', regDataScheme());