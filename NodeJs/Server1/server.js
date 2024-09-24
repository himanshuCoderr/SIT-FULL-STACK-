const http = require("http")

let server = http.createServer((req , res)=>{
    // console.log("Request Rec")
    // console.log(req.method)
    // res.statusCode = 404
    // res.end("Kida Ferrr ?")
    // // res.end("Kida Ferrr ?")
    console.log(req.method)
    if(req.method == "GET"){
        res.end("GET")
    }
    if(req.method == "POST"){
        res.end("POST")
    }
    if(req.method == "PUT"){
        res.end("PUT")
    }
    if(req.method == "DELETE"){
        res.end("DELETE")
    }
    if(req.method == "PATCH"){
        res.end("PATCH")
    }

})

server.listen(8000 , ()=>{
    console.log("Server is runing")
})