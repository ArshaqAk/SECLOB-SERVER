import mongoose from "mongoose";

setTimeout(()=>{
    const connection_string = process.env.CONNECTION_STRING
    mongoose.connect(connection_string)
    .then(()=>{
        console.log('connection established');
    })
    .catch(err=>console.log(err))
})