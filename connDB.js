//require('dotenv').config() / not needed in this module
const mongoose = require('mongoose')

const connectDB = async ()=>{

    try {
        await mongoose.connect( process.env.DB_URL )
        
    } catch (err) {
        
        console.log( err )
    }
   
}

module.exports = connectDB