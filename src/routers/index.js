const user = require("./user")
const home = require("./home");
const product = require("./products");

function route(app){

    app.use("/api/product", product)
    app.use("/api/user" , user)
    app.use("/", home)

}
module.exports = route