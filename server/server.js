const express = require('express');
const cors = require('cors');
const userModel = require('./models/userModel')

const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(cors(
    {
    origin: ["https://login-mern-fv3e.vercel.app"],
    methods: ["POST","GET"],
    credentials : true
    }
));


mongoose.connect("mongodb+srv://mailmeattanbirali:EoGguGIyIRBiMxGL@cluster0.jymctcs.mongodb.net/test?retryWrites=true&w=majority");

app.post("/login", (req, res) =>{
    const {email, password} = req.body;
    userModel.findOne({email: email})
    .then(users => {
        if(users){
            if(users.password === password){
                res.json("SUCCESS")
            }else {
                res.json("Incorrect Password")
            }
        }else{
            res.json("No record exists")
        }
        
    })
})

app.post("/", (req, res) =>{
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(error => res.json(error))

})


app.listen(8080, ()=>{
    console.log("Server is running at 8080");
})