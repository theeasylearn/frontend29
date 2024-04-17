var http = require('http');
var fs = require('fs');
//create server
var server = http.createServer(function (request, response) {
    var filename = 'songs.txt';
    var content = `जन गण मन अधिनायक जय हे,
    भारत भाग्य विधाता।
    पंजाब सिन्धु गुजरात मराठा,
    द्रविड़ उत्कल बंग।
    विंध्य हिमाचल यमुना गंगा,
    उच्छल जलधि तरंग।
    तव शुभ नामे जागे,
    तव शुभ आशिष मागे।
    गाहे तव जय गाथा।
    जन गण मंगलदायक जय हे,
    भारत भाग्य विधाता।
    जय हे, जय हे, जय हे,
    जय जय जय जय हे।।`;
    fs.writeFileSync(filename,content,'utf-8');
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write('song is  Written into file successfully');
    response.end();
});
server.listen(5000);
console.log('ready to accept request');