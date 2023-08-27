const express = require('express');
const cors = require('cors');
const userModel = require('./models/userModel')

const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(cors(
    {
    origin: ["https://login-mern-fv3e.vercel.app/"],
    methods: ["POST","GET"],
    credentials : true
    }
));

const connect = async() =>{
    try {
        let {connection} = await mongoose.connect("mongodb+srv://tanbir:tanbir123@cluster0.6zrh5sq.mongodb.net/?retryWrites=true&w=majority");
        console.log("connection done..., " , connection.host);

    } catch (error) {
        console.log(error)
    }
}

connect()


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