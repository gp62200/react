const express=require("express")
const collection=require("./mongo")
const cors=require("cors")
const server=express()
server.use(express.json());
server.use(express.urlencoded({extended:true}))
server.use(cors())

server.get("/",cors(),(req,res)=>{});
//mmmmmmmmmmmmmm
server.post("/",async(req,res)=>{
        const{email,password}=req.body;
        try{
            const check=await collection.findOne({email:email})
            if(check){
                res.json("exist")
            }
            else{
                res.json("notexist")
            }
        }
        catch(e){
                res.json("notexist")
        }
})

server.post("/signup",async(req,res)=>{
    const{email,password}=req.body;
    const data={
        email:email,
        password:password
    }
    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("exist");
        }
        else{
            res.json("notexist");
            await collection.insertMany([data])
        }
    }
    catch(e){
            res.json("notexist")
    }
})

server.listen(8000,()=>{
    console.log("port connected")
})