var express = require("express");
var connection = require("./connection");
var bodyParser = require("body-parser");
var app = express(); // Move this line to the top
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // Move this line after initializing app
const ROUTE = "/cart";
let addToCart = function (request, response) {
    let { productid, userid } = request.body;
    if (productid === undefined || userid === undefined) {
        response.json({ 'error': 'input is missing' });
    }
    else {
        let sql = `select id from cart where productid=? and usersid=? and billid=0`;
        let data = [productid, userid];
        connection.con.query(sql, data, function (error, result) {
            if (error != null)
                response.json([{ 'error': 'error occured' }]);
            else {
                if (result.length == 0) {
                    sql = `insert into cart (productid,usersid) values (?,?)`;
                }
                else {
                    sql = `update cart set quantity=quantity+1  where productid=? and usersid=? and billid=0`;
                }
                connection.con.query(sql, data, function (error, result) {
                    if (error != null)
                        response.json([{ 'error': 'error occured' }]);
                    else {
                        response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'cart updated' },]);
                    }
                });
            }
        });
    }
}

let deleteFromCart = function (request, response) {
    let cartid = request.body.cartid;
    if (cartid === undefined) 
    {
        response.json({ 'error': 'input is missing' });
    }
    else 
    {
        let sql = `delete from cart where id=?`;
        connection.con.query(sql,[cartid],function(error,result){
            if (error != null)
                response.json([{ 'error': 'error occured' }]);
            else {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'product removed from cart' },]);
            }
        });
    }
}
let fetchProductsFromCart = function (request, response) {
    let userid = request.query;
    if (userid === undefined) {
        response.json({ 'error': 'input is missing' });
    }
    else {
        let sql = `select c.id,title,p.price,photo,quantity from product p, cart c where productid=p.id and c.usersid=?`;
        connection.con.query(sql, [userid], function (error, result) {
            if (error != null)
            {
                response.json([{ 'error': 'error occured' }]);
                console.log(error);
            }
            else {
                response.json(result);
            }
        });
    }
}

app.post(ROUTE, (request, response) => addToCart(request, response));
app.get(ROUTE, (request, response) => fetchProductsFromCart(request, response));
app.delete(ROUTE, (request, response) => deleteFromCart(request, response));
app.listen(5000, function () {
    console.log("ready to accept requests");
});
