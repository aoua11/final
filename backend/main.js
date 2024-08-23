/*-------- packages imports-------*/
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');



/*-------- middlewears-------*/
const error = require('./middlewears/error.middlewear');
const notfound = require("./middlewears/notfound.middlewear");


/*-------- app -------*/
const app = express();
dotenv.config();


/*-------- global middlewears -------*/
app.use(cors());
app.use(express.json());
app.use('/public', express.static('./public'));


/*-------- routers imports -------*/
const productsroutes = require('./routes/products.route');
const userroutes  = require('./routes/user.routes');
const authroutes =require('./routes/auth.routes');
const ordersroutes = require('./routes/orders')


/*-------- use routers  -------*/
app.use(productsroutes);
app.use(userroutes);
app.use(authroutes);
app.use(ordersroutes);

/*-------- error middlewears -------*/
app.use(error);
app.use(notfound);


/*-------- start function -------*/
mongoose.connect(`mongodb://${process.env.DB_URI}/${process.env.DB_NAME}`)
    .then(() => {

        console.log('conected to database')
        app.listen(8000, () => {
            console.log('conected at http://localhost:8000')
        })
    }).catch((err) => {
        console.log(err);
    })