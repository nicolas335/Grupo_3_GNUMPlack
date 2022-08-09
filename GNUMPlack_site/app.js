const express = require ('express');
const app = express();
const path = require("path");
const port = 3001;

/* Importacion de rutas */
const cartRouter = require("./routes/cart")

/* Templates engine y Archivos estaticos*/
app.set("views",path.resolve(__dirname,"views"))
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")));

/* Rutas */
app.use("/cart", cartRouter)

app.listen(port, ()=> console.log(`Server rise in http://localhost:${port}`)) /* ctrol+click */ 
