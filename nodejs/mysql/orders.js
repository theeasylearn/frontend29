var express = require("express");
var connection = require("./connection");
var bodyParser = require("body-parser");
var app = express(); // Move this line to the top
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // Move this line after initializing app
const ROUTE = "/orders";
//userid=2&fullname=ankit&address1=hill_drive&address2=waghawadi&mobile=1234567890&city=bhavnagar&pincode=34001&paymentmode=1&remarks=good
let createNewOrder = function (request, response) {
    let { userid, fullname, address1, address2, mobile, city, pincode, paymentmode, remarks } = request.body;
    // List of required fields
    let requiredFields = { userid, fullname, address1, address2, mobile, city, pincode, paymentmode, remarks };
    let missingInputs = '';
    // Check if any required field is missing or empty
    for (let [key, value] of Object.entries(requiredFields)) {
        console.log(key, value);
        if (value === undefined) {
            missingInputs += key + " ";
        }
    }
    if (missingInputs !== '') {
        response.json([{ 'error': 'following inputs are required <br/>' + missingInputs }]);
    }
    else 
    {
        /*
            1) fetch products that user has added into cart
            2) ensure each product is not out of stock means stock>quantity of order 
            if stock<quantity of order return error
            otherwise 
            calculate bill amount
            4) insert new row into bill table
            get id of the newly inserted row 
            5) use that id to update billid in cart table of those product which is ordered 
            6) also reduce stock of those product order by user by quqntity 

        */
        //  fetch products that user has added into cart
        let sql = `select productid,quantity,stock,title,p.price as price from cart c, product p where usersid=? and billid=0 and p.id=productid`;
        connection.con.query(sql,[userid],function(error,result){
            if(error!=null)
                response.json([{ 'error': 'error occured' }]);
            else 
            {
                if(result.length === 0)
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'cart is empty' }]);
                else 
                {
                    let condition = "(";
                    let cart = []; 
                    for(let index=0;index<result.length;index++)
                    {
                        condition = condition + result[index]['productid'] + ",";
                        cart.push({ 'productid': result[index]['productid'], 'quantity': result[index]['quantity'], 'stock': result[index]['stock'], 'title': result[index]['title'],'price':result[index]['price'] });
                    }    
                    condition = condition.substring(0,condition.length-1) + ")";
                    console.log(condition);
                    console.log(cart);
                    let temp = cart.filter((item) => {
                        if (item.quantity>item.stock)
                            return item;
                    });
                    if(temp.length > 0)    
                        response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'one or more product is out of stock' }]);
                }
            }
        });
    }
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
