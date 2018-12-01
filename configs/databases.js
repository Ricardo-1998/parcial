const mongoose = require('mongoose');
const mongoKey = 'mongodb://localhost:27017/parcial';

mongoose.connect(mongoKey,{
    useNewUrlParser:true,
    useCreateIndex:true
}).then(db=>console.log('Connection succes')).then(err=>console.log(err));