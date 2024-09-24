exports.middleWare1 = function(req , res , next){
    if(req.body.APIKEY){
        if(req.body.APIKEY == "123" && req.body.name == "Himanshu"){
           if(req.body.secretCode == "123XX"){
            next()
            // res.send("Yes you are valid")
           }else{
            res.send("Invalid Secret CODE BANNED FROM SERVER")
           }
        }else{
            res.send("INVALID API KEY OR USERNAME")
        }
    }else{
        res.send("Pls Provide API KEY")
    }
   
}