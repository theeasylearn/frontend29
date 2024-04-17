var http = require('http');
var fs = require('fs');
//create server
var server = http.createServer(function (request, response) {
    var filename = 'songs.txt';
    var content = `\nवन्दे मातरम्
    सुजलां सुफलां मलयजशीतलाम्
    शस्यश्यामलां मातरम्।
    शुभ्रज्योत्स्नापुलकितयामिनीम्
    फुल्लकुसुमितद्रुमदलशोभिनीम्।
    सुहासिनिमसुमधुरभाषिणीम्
    सुखदां वरदां मातरम्।
    कोटि-कण्ठ-कलकलनिनादकराले
    कोटि-भुजैर्धृत-खरकरवाले।
    अबला केन मा एत बले।
    बहुबलधारिणीं नमामि तारिणीं
    रिपुदलवारिणीं मातरम्।
    तुमि विद्या, तुमि धर्म,
    तुमि हृदये, तुमि मर्म,
    त्वं हि प्राणाः शरीरे।
    बाहुते तुमि मा शक्ति,
    हृदये तुमि मा भक्ति,
    तोमारै प्रतिमा गड़ी,
    मंदिरे मंदिरे।`;
    fs.appendFileSync(filename,content,'utf-8');
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write('song is  appended into file successfully');
    response.end();
});
server.listen(5000);
console.log('ready to accept request');