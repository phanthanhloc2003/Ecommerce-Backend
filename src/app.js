const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const handlebars = require('express-handlebars');
const db = require("./config/db")
const route = require("./routers");
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors')
var cookieParser = require('cookie-parser')

app.use(express.static(path.join(__dirname, 'uploads')));

//
const hbs = handlebars.create({
  extname: '.hbs',

})

app.engine('hbs', hbs.engine); 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser())


//
db.connect()
route(app);

app.use(morgan("combined"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
