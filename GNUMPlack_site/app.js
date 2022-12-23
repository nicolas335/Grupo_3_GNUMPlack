require('dotenv').config()

const express = require ('express');
const app = express();
const path = require("path");
const port = 3001;
const methodOverride = require('method-override')
const swal = require('sweetalert');



const session = require('express-session');
const cookieParser = require('cookie-parser');

//Implementamos locals dentro de nuestra aplicacion//
const userLogin = require('./middlewares/userLoginCheck')
const dbConnectionTest = require('./utils/dbConnectionTest')

/* Requiriendo rutas */
let indexRouter = require('./routes/index');
let adminRouter = require('./routes/admin');
let cartRouter = require('./routes/cart')
let userRouter = require('./routes/user');
let productRouter = require('./routes/product')

/* Configurando view engine */
app.set('views', path.resolve(__dirname,'views'));
app.set("view engine", "ejs");

/* Metodos PUT y DELETE */
app.use(methodOverride('_method'));

// Login e inicio de sesion //
app.use(session({
    secret: "GNUM.Plack"
}))

app.use(userLogin)

/* Middlewares (para poder usar json mas adelante)*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); /* estes xd */
app.use(express.static(path.join(__dirname,"public")));

app.use(cookieParser());
dbConnectionTest()


/* Habilitando put y delete */
app.use(methodOverride('_method'));


/* Rutas */
app.use("/", indexRouter);
app.use("/user",userRouter);
app.use("/product",productRouter);
app.use("/cart", cartRouter);
app.use("/about", indexRouter)
app.use('/admin', adminRouter);



 app.listen(port, ()=> console.log(`Server rise in http://localhost:${port}`)) /* ctrol+click */ 