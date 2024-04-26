var fs = require('fs');
var http = require('http');
//create server
var server = http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'});
    var filename = 'states.txt';
    //file open 
    fs.open(filename,function(error,fd){
        if(error)
        {
            response.write("can not open file");
            response.end();
        }
        else 
        {
            //file read operation
            var buf = new Buffer(8192);
            var size = buf.length;
            var position = 0;
            fs.read(fd,buf,0,size,position,function(err,count){
                if(err)
                    response.write("error in reading data from file");
                else 
                {
                    if(count>0)
                        response.write(buf.slice(0,count).toString());
                }
                fs.close(fd);
                response.end();
            });
        }
    });
        
});

server.listen(5000);
console.log('ready to accept request.');