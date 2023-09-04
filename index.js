const express = require('express');
const Student = require('./models/student')
const app = express();
const port = process.env.PORT || 8000;
const userData = require('./router/student')


require('./db/conn');
app.use(express.json());

app.use(userData);

// post request

app.post("/students", async(req, res) => {
 
    try{
         const user = new Student(req.body);
         const newUser = await user.save();
         res.status(201).send(newUser);

         console.log(newUser);
               
         
    }catch (e) {
         res.status(400).send(e);
    }
});

// get request

app.get("/students", async  (req,res) => {
   try{
    const StudentData = await Student.find();
    res.send(StudentData);
   // console.log(StudentData);
   } catch(e){
    res.send(e);
   }
});

// to get data with the single id

app.get("/students/:id", async (req, res) => {
 try{
const _id = req.params.id;
console.log(req.params.id);
const StudentData = await Student.findById(_id);
//res.send(StudentData);

if(!StudentData){
  return res.status(404).send()
}else{
    res.send(StudentData)
}
 }catch(e){
    res.send(e);
 }
})

app.listen(port, (req,res) => {
    console.log(`Server is running in ${port}`)
})

// if we want to get with id




