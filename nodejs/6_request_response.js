var http = require('http');
//create server 
var server = http.createServer(function(request,response){
    var url = request.url;
    console.log(url);
    response.writeHead(200,{'content-type':'text/html'})
    if(url == '/') //home page (root)
    {
        response.write("<html><head></head><body><h1>Home Page</h1></body></html>");
    }
    else if(url == '/gujarat')
    {
        response.write("<html><head></head><body><h1>gujarat</h1>Ahmedabad, Surat, Vadodara (Baroda), Rajkot, Bhavnagar, Jamnagar, Gandhinagar, Junagadh, Anand, Bharuch.</body></html>");
    }
    else if(url == '/maharastra')
    {
        response.write("<html><head></head><body><h1>maharastra</h1>Mumbai, Pune, Nagpur, Nashik, Aurangabad, Thane, Solapur, Amravati, Kolhapur, Navi Mumbai</body></html>");
    }
    else if(url == '/rajasthan')
    {
        response.write("<html><head></head><body><h1>rajasthan</h1>Jaipur, Jodhpur, Udaipur, Ajmer, Kota, Bikaner, Pushkar, Alwar, Mount Abu, Chittorgarh.</body></html>");
    }
    response.end();
});
server.listen(5000);
console.log('ready to accept request....');