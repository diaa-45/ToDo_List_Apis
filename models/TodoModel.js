
const mongoose = require("mongoose");


const ToDo = mongoose.model("ToDo", new mongoose.Schema({
    name: {
        type:"string",
        required: true,
    },
    description:"string",
    status:{
        type:"string",
        enum:["done","in progress","todo"],
        required: true
    }
      
})
);
module.exports=ToDo;