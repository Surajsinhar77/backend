require('./db/config')
const express = require('express')
const users = require('./db/users');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/reg',async(req, res)=>{
    console.log(req.body);
    const data = new users(req.body);
    const result = await data.save();
    console.log(result);
    res.send(result);
})

app.post('/login', async(req, res)=>{
    let data = await users.find(req.body.name);
    // if(data){
        console.log(data);
        // res.send(data)
    // }
    console.log("User is not Find on database ")
    // res.send(data);
})

app.listen(7000,()=>{
    console.log("The server running on : http://localhost:"+7000);
})