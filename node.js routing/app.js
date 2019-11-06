const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){

    console.log(`request was made to ${req.url}`);

    if(req.url === '/home' || req.rul === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/pages/index.html').pipe(res);

    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/pages/contact.html').pipe(res);

    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/pages/about.html').pipe(res);

    } else if (req.url === '/api/people') {
        let people = [
            {name: 'jack', age: 21}, 
            {name: 'mike', age: 31},
            {name: 'nick', age: 21},
            {name: 'emily', age: 22}
        ];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(people));

    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/pages/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');