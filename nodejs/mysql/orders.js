var express = require("express");
var connection = require("./connection");
var bodyParser = require("body-parser");
var app = express(); // Move this line to the top
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // Move this line after initializing app
const ROUTE = "/orders";
let createNewOrder = function(request,response) {
    let {userid,billdate,fullname,address1,address2,mobile,city,pincode,paymentmode,remarks} = request.query;
    
}

let fetchOrderDetail = function (request, response) {

}

let updateOrder = function (request, response) {

}
app.post(ROUTE, (request, response) => createNewOrder(request, response));
app.get(ROUTE, (request, response) => fetchOrderDetail(request, response));
app.put(ROUTE, (request, response) => updateOrder(request, response));
app.listen(5000, function () {
    console.log("ready to accept requests");
});
