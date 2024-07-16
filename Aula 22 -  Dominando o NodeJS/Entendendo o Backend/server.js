const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    res.statusCode = 404;
    const responseContent = '<h1>Hello World</h1>';
    res.end(responseContent, () => {
        const filePath = path.join(__dirname, 'response-info.txt');
        const fileContent = `Status: ${res.statusCode}\n`;

        fs.writeFile(filePath, fileContent, (err) => {
            if (err) {
                console.error('Error writing to file', err);
            } else {
                console.log('File written successfully');
            }
        });
    });
});

server.listen(3000, () => {
    console.log('Servidor Ativo');
});
