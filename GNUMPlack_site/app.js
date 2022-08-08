const express = require ('express');
const app = express();
const path = require("path");
const port = 3001;


app.get("/",(req,res)=>res.sendFile(path.resolve(__dirname,"views","home.html")));
app.get("/aboutUs",(req,res)=>res.sendFile(path.resolve(__dirname,"views","aboutUs.html")));
app.get("/detailOfProduct",(req,res)=>res.sendFile(path.resolve(__dirname,"views","detailOfProduct.html")));
app.get("/login",(req,res)=>res.sendFile(path.resolve(__dirname,"views","login.html")));
app.get("/product",(req,res)=>res.sendFile(path.resolve(__dirname,"views","product.html")));
app.get("/signin",(req,res)=>res.sendFile(path.resolve(__dirname,"views","signin.html")));
app.get("/cart",(req,res)=>res.sendFile(path.resolve(__dirname,"views","cart.html")));

app.use(express.static(path.join(__dirname,"public")));

 app.listen(port, ()=> console.log(`Server rise in http://localhost:${port}`)) /* ctrol+click */ 
