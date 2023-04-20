const mongoose=require("mongoose")

mongoose.connect(
    "mongodb+srv://ganeshpatil622000:Ganesh2000@cluster0.gk5pkuh.mongodb.net/test?retryWrites=true&w=majority")
    .then(()=>{
        console.log("mongodb connected")
    })
    .catch(()=>{
        console.log("failed to connect")
    })

const newSchema = new mongoose.Schema({
    email :{
        type:String,
        required:true
    },
    password:{
        type :String,
        reauired:true
    },
});
const collection=mongoose.model("collection",newSchema)

module.exports=collection;