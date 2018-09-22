'strict';

const express = require('express');
const connectDB = require('./db-connection');
const studentModel = require('./student');
// Constants
 const PORT = 8080;
 const HOST = '0.0.0.0';

 // App
 const app = express();
 app.use(express.static('./files'));
 app.listen(PORT, HOST);
 console.log(`Running on http://${HOST}:${PORT}`);
 connectDB();

app.get('/', (req, res) => {
  res.send('Hello world\n');
});
app.get('/students',async (req,res)=>{
  const studentList = await studentModel.getStudents();
  res.send(studentList);
});

