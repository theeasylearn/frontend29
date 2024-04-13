var http = require('http');
var url = require('url');
var routes = [
    { from: 'bhavnagar', to: 'surat', busType: 'AC', departureTime: '08:00 AM' },
    { from: 'rajkot', to: 'baroda', busType: 'non AC', departureTime: '09:30 AM' },
    { from: 'ahmedabad', to: 'jamnagar', busType: 'AC', departureTime: '11:15 AM' },
    { from: 'baroda', to: 'bhavnagar', busType: 'non AC', departureTime: '01:00 PM' },
    { from: 'surat', to: 'rajkot', busType: 'AC', departureTime: '02:45 PM' },
    { from: 'jamnagar', to: 'ahmedabad', busType: 'non AC', departureTime: '04:30 PM' },
    { from: 'bhavnagar', to: 'rajkot', busType: 'AC', departureTime: '06:15 PM' },
    { from: 'surat', to: 'baroda', busType: 'non AC', departureTime: '07:45 PM' },
    { from: 'rajkot', to: 'jamnagar', busType: 'AC', departureTime: '09:30 PM' },
    { from: 'baroda', to: 'ahmedabad', busType: 'non AC', departureTime: '11:15 PM' },
    { from: 'ahmedabad', to: 'bhavnagar', busType: 'AC', departureTime: '01:00 AM' },
    { from: 'jamnagar', to: 'rajkot', busType: 'non AC', departureTime: '02:45 AM' },
    { from: 'baroda', to: 'surat', busType: 'AC', departureTime: '04:30 AM' },
    { from: 'bhavnagar', to: 'jamnagar', busType: 'non AC', departureTime: '06:15 AM' },
    { from: 'rajkot', to: 'ahmedabad', busType: 'AC', departureTime: '07:45 AM' },
    { from: 'ahmedabad', to: 'baroda', busType: 'non AC', departureTime: '09:30 AM' },
    { from: 'surat', to: 'bhavnagar', busType: 'AC', departureTime: '11:15 AM' },
    { from: 'jamnagar', to: 'rajkot', busType: 'non AC', departureTime: '01:00 PM' },
    { from: 'baroda', to: 'surat', busType: 'AC', departureTime: '02:45 PM' },
    { from: 'rajkot', to: 'bhavnagar', busType: 'non AC', departureTime: '04:30 PM' },
    { from: 'ahmedabad', to: 'surat', busType: 'AC', departureTime: '06:15 PM' },
    { from: 'baroda', to: 'rajkot', busType: 'non AC', departureTime: '07:45 PM' },
    { from: 'bhavnagar', to: 'baroda', busType: 'AC', departureTime: '09:30 PM' },
    { from: 'jamnagar', to: 'bhavnagar', busType: 'non AC', departureTime: '11:15 PM' },
    { from: 'surat', to: 'ahmedabad', busType: 'AC', departureTime: '01:00 AM' },
    { from: 'rajkot', to: 'baroda', busType: 'non AC', departureTime: '02:45 AM' },
    { from: 'bhavnagar', to: 'baroda', busType: 'AC', departureTime: '04:30 AM' },
    { from: 'jamnagar', to: 'rajkot', busType: 'non AC', departureTime: '06:15 AM' },
    { from: 'surat', to: 'bhavnagar', busType: 'AC', departureTime: '07:45 AM' },
    { from: 'baroda', to: 'rajkot', busType: 'non AC', departureTime: '09:30 AM' },
    { from: 'ahmedabad', to: 'surat', busType: 'AC', departureTime: '11:15 AM' },
    { from: 'rajkot', to: 'bhavnagar', busType: 'non AC', departureTime: '01:00 PM' },
    { from: 'baroda', to: 'jamnagar', busType: 'AC', departureTime: '02:45 PM' },
    { from: 'bhavnagar', to: 'surat', busType: 'non AC', departureTime: '04:30 PM' },
    { from: 'surat', to: 'rajkot', busType: 'AC', departureTime: '06:15 PM' },
];
//http://localhost:5000/route?from=bhavnagar&to=baroda
var server = http.createServer(function (request, response) {
    let querystring = url.parse(request.url, true);
    console.log(querystring);
    if (querystring.pathname == "/route") {
        var data = JSON.stringify(routes);
        var data = querystring.query;
        console.log(data); //{from:'bhavnagar',to:'baroda'}
        if (data.from === undefined || data.to === undefined) {
            response.writeHead(200, { 'content-type': 'text/html' });
            response.write(`<html><head></head><body><h1>input is missing</h1></body></html>`);
        }
        else {
            var availableBus = routes.filter((item) => {
                //annonyms arrow function
                if (item.from === data.from && item.to === data.to)
                    return item;
            });
            if(availableBus.length === 0)
            {
                response.writeHead(200, { 'content-type': 'text/html' });
                response.write(`<html><head></head><body><h1>no bus available on given routes</h1></body></html>`);
            }
            else 
            {
                response.writeHead(200, { 'content-type': 'application/json' });
                availableBus = JSON.stringify(availableBus);
                response.write(availableBus);
            }
           
        }
    }
    else {
        response.writeHead(404, { 'content-type': 'text/html' });
        response.write(`<html><head></head><body><h1>Page not found</h1></body></html>`);
    }
    response.end();
});
server.listen(5000);
console.log('ready to accept request....');