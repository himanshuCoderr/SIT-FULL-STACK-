const express = require("express")

const app = express()

const homeController = require("./Controllers/homeController.js")
const adminMiddleware = require("./middlewares/Authentication/CheckAdmin.js")
const adminController = require("./Controllers/adminController.js")
// https://www.amazon.in/s?k=mics&crid=2Y50KYIQLCNY7&sprefix=mics%2Caps%2C237&ref=nb_sb_noss_1
app.use(express.json())

app.get("/admin",adminMiddleware.middleWare1 ,adminController.adminController)

app.get("/home/hello/:id",homeController.homeController)


app.listen(4000 , ()=>{
    console.log("Server is runing")
})