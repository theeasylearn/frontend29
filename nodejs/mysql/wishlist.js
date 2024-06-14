var express = require("express");
var connection = require("./connection");
var bodyParser = require("body-parser");
var app = express(); // Move this line to the top
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // Move this line after initializing app
const ROUTE = "/wishlist";
let addtoWishList = function (request, response) {
    let { userid, productid } = request.query;
    if (userid === undefined || productid === undefined) {
        response.json({ 'error': 'error occured' });
    }
    else {
        let sql = `select id from wishlist where usersid=? and productid=?`;
        let data = [userid, productid];
        connection.con.query(sql, data, function (error, result) {
            if (error != null) {
                response.json([{ 'error': 'error occured' }]);
            }
            else {
                if (result.length == 0) {
                    sql = 'insert into wishlist (usersid,productid) values (?,?)';
                    data = [userid, productid];
                    connection.con.query(sql, data, function (error, result) {
                        if (error != null)
                            response.json([{ 'error': 'error occured' }]);
                        else {
                            response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'wishlist updated' },]);
                        }
                    });
                }
                else {
                    response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'wishlist updated' },]);
                }
            }
        })
    }
};

let fetchProductFromWishList = function (request, response) {
    let userid = request.query.userid;
    if (userid === undefined)
        response.json([{ 'error': 'input is missing' }]);
    else {
        let sql = "select productid,title,price,photo from wishlist w,product p where usersid=? and productid=p.id order by w.id desc";
        connection.con.query(sql, [userid], function (error, result) {
            if (error != null)
                response.json({ 'error': 'error occured' });
            else {
                result.unshift({ 'total': result.length });
                result.unshift({ 'error': 'no' });
                response.json(result);
            }
        })
    }
};

let deleteFromWishList = function (request, response) {
    let wishlistid = request.query.wishlistid;
    if (wishlistid === undefined)
        response.json({ 'error': 'input is missing' })
    else {
        let sql = `delete from wishlist where id=?`;
        connection.con.query(sql, [wishlistid], function (error, result) {
            if (error != null)
                response.json({ 'error': 'error occured' });
            else {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'product removed' },]);
            }
        });
    }

};

let movetoCart = function (request, response) {
    let { wishlistid, userid, productid } = request.query;
    if (wishlistid === undefined || userid === undefined || productid === undefined)
        response.json([{ 'error': 'input is missing' }]);
    else {
        let sql = `delete from wishlist where id=?`;
        connection.con.query(sql, [wishlistid], function (error, result) {
            if (error != null)
                response.json({ 'error': 'error occured' });
            else {
                sql = `INSERT INTO cart (productid, usersid) SELECT ?, ?
                    WHERE NOT EXISTS (SELECT 1 FROM cart WHERE productid = ? AND usersid = ?)`;
                let data = [productid, userid, productid, userid];
                connection.con.query(sql, data, function (error, result) {
                    if (error != null)
                        response.json({ 'error': 'error occured' });
                    else {
                        response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'product moved to cart' },]);
                    }
                })
            }
        })
    }
};
app.post(ROUTE, (request, response) => addtoWishList(request, response));
app.get(ROUTE, (request, response) => fetchProductFromWishList(request, response));
app.delete(ROUTE, (request, response) => deleteFromWishList(request, response));
app.put(ROUTE, (request, response) => movetoCart(request, response));
app.listen(5000, function () {
    console.log("ready to accept requests");
});
