var express = require("express");
var connection = require("./connection");
var bodyParser = require("body-parser");
var app = express(); // Move this line to the top
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // Move this line after initializing app
const ROUTE = "/product";

let select = function (request, response) {
    let sql = `select * from product where isdeleted=0 order by id desc`;
    let { productid, categoryid } = request.query;
    let data = [];
    if (productid !== undefined) {
        sql = `select * from product where id=?`;
        data = [productid]
    }
    else if (categoryid !== undefined) {
        sql = `select * from product where categoryid=?`;
        data = [categoryid];
    }
    connection.con.query(sql, data, function (error, result) {
        if (error)
            response.json([{ 'error': 'error occured' }]);
        else {
            result.unshift({ 'total': result.length });
            result.unshift({ 'error': 'no' });
            response.json(result);
        }
    });
}

let insert = function (request, response) {
    let { categoryid, title, price, stock, photo, size, weight, detail, islive } = request.body;
    if (categoryid === undefined || title === undefined || price === undefined || stock === undefined || photo === undefined || size === undefined || weight === undefined || detail === undefined || islive === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        let sql = "INSERT INTO product(categoryid, title, price, stock, weight, size, photo, detail, islive) VALUES (?,?,?,?,?,?,?,?,?)";
        let data = [categoryid, title, price, stock, weight, size, photo, detail, islive];
        connection.con.query(sql, data, function (error, result) {
            if (error != null)
                response.json([{ 'error': 'error occured' }]);
            else {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'Product inserted' },]);
            }
        });
    }
}

let update = function (request, response) {
    let { id, categoryid, title, price, stock, photo, size, weight, detail, islive } = request.body;
    if (id === undefined || categoryid === undefined || title === undefined || price === undefined || stock === undefined || photo === undefined || size === undefined || weight === undefined || detail === undefined || islive === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        let sql = "UPDATE product SET categoryid=?,title=?,price=?,stock=?,weight=?,size=?,photo=?,detail=?,islive=? WHERE id=?";
        let data = [categoryid, title, price, stock, weight, size, photo, detail, islive, id];
        connection.con.query(sql, data, function (error, result) {
            if (error != null)
                response.json([{ 'error': 'error occured' }]);
            else {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'Product updated' },]);
            }
        });
    }
}

let deletes = function (request, response) {
    let id = request.body.id;
    if (id === undefined)
        response.json([{ 'error': 'input is missing' }]);
    else {

        let sql = "update product set isdeleted=1 where id=?";
        connection.con.query(sql,[id], function (error, result) {
            if (error != null)
                response.json([{ 'error': 'error occured' }]);
            else {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'Product deleted' },]);
            }
        });
    }
}

//fetch all categories
// http://localhost:5000/product
//to fetch particular product using id
// http://localhost:5000/product?productid=1
//to fetch particular product using categoryid
// http://localhost:5000/product?categoryid=4

app.get(ROUTE, (request, response) => select(request, response));
//to insert new product
app.post(ROUTE, (request, response) => insert(request, response));
//to update existing product
app.put(ROUTE, (request, response) => update(request, response));
//to delete existing product
app.delete(ROUTE, (request, response) => deletes(request, response));


app.listen(5000, function () {
    console.log("ready to accept requests");
});
