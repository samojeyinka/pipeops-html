const express = require('express');
const app = express(); 
const connectDB = require('./db/database'); 
require('dotenv').config();

app.get("/",async(req, res) => {
    res.send("Do your finds!");
});
  
 
const port = 4000;
   

const start = async () => {
    try{ 
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch(error) {
        console.log(error);
    }
}

start()

// app.listen(port, console.log(`server is listening on port ${port}...${process.env.MONGO_URL}`))
