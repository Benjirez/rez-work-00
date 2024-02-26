const mongoose = require('mongoose')

const  mongooseConnect = ()=>{

    mongoose.connect( process.env.DB_URL )
    mongoose.connection.on('error', (err)=>{console.log(err)})
    mongoose.connection.once('open', ()=>{console.log('MC on the DB')})
    
    }

/* 
// might need if using AUTH???
const  mongooseConnect = async ()=>{

await mongoose.connect( process.env.DB_URL )
.then(mongoose.connection.on('error', (err)=>{console.log(err)}))
.then(mongoose.connection.once('open', ()=>{console.log('MC on the DB')}))

}
*/

module.exports = mongooseConnect