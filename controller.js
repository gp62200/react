var fs=require('fs');

exports.getAll=function(req,res){
    var path="./products.json";
    fs.readFile(path,(err,data)=>{
        if(data){
            var products=JSON.parse(data);
            res.send(products);
        }
        else{
            res.send("data not available")
        }
    })
};

exports.getId=function(req,res){
    var productsId=req.params.id;
    var path="./products.json";
    fs.readFile(path,(err,data)=>{
        if(data){
            var products=JSON.parse(data);
            var products=products.find((p=>(p.id==productsId)))
        }
        else{
            res.send("data not avilable")
        }
    })
};
exports.insert=function(req,res){
    fs.readFile(path,(err,data)=>{
        if(data){
            var products=JSON.parse(data);
            var newProduct=JSON.parse(req.body);
            products.push(newProduct);

            fs.writeFile(path,products,(err)=>{
                if(err){
                    res.send("file IO problem")
                }
                else
                res.send("new product insereted into collection")
            })
        }
        else{
            res.send("data not available")
        }
        
    })
};

exports.update=function(req, res){
    res.send("existing product updated");
};

exports.delete=function(req, res){
    res.send("product is removed from list");
};