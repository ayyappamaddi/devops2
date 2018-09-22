const mongoose = require('mongoose');
const studentSchema = { name: String }
var studentModel = mongoose.model('student', new mongoose.Schema(studentSchema));
async function getStudents(){
    try{
        await studentModel.collection.insertMany([{name:'NodeJS'}]);   
        const students = await studentModel.find({});
        console.log('------------------->',students);
        return students;
    }catch(e){
        console.log('Excption occured in getStudents',e);
    }
}

module.exports = {
    getStudents
}