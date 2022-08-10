const express = require ('express');
const app = express();
const path = require("path");
const port = 3001;
 

/* Requiriendo rutas */
let indexRouter = require('./routes/index');
let adminRouter = require('./routes/admin');
let cartRouter = require('./routes/cart');

/* Configurando view engine */
app.set('views', path.resolve(__dirname,'views'));
app.set("view engine", "ejs");

/* Middlewares (para poder usar json mas adelante)*/
app.use(express.json()); /* estes xd */
app.use(express.static(path.join(__dirname,"public")));


/* Rutas */
app.use("/", indexRouter);
app.use('/admin', adminRouter);
app.use("/cart", cartRouter);
app.use("/about", indexRouter)


 app.listen(port, ()=> console.log(`Server rise in http://localhost:${port}`)) /* ctrol+click */ 
