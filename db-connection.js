const mongoose = require('mongoose');

function connectDB(){
    try{
        mongoose.connect('mongodb://127.0.0.1:27018/pupilpod');
    }catch(e){
        console.log('not able connect with db..', e);
    }
}

module.exports = connectDB;