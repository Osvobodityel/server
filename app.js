// const host = 'localhost';
// const http = require('http');
// const port = 5000;
// const fs = require('fs').promises;
// const path = require('path');
// const folderName = '/home/uczen/test/New';
// const express = require('express');
// const jade = require('jade');
// var app = express();

// app.use(express.static(__dirname + 'public'));

// app.use('/New', express.static(__dirname + '/New'));

// var server1 = app.listen(5000);



//  const requestListener = function (req, res) {}
// // 	fs.readFile(__dirname + "/New")
// // 	.then(contents => {
// // 		res.setHeader("Content-Type", "folder");
// // 		res.writeHead(200);
// // 		res.end(contents);
// // 	})
// // 	.catch(err => {
// // 		res.writeHead(500);
// // 		res.end(err);
// // 		return;
// // 	})
// // };

// /*const requestListener = function (req, res) {
// 	res.writeHead(200);
// 	res.end("HELLO");
// };
// */
// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
// 	console.log(`serwer działa na http://${host}:${port}`);

// 	var filePath = '.' + request.url;
// 	if (filePath == './')
// 		filePath = './idnex.html';

// 	var extname = path.extname(filePath);
// 	var contentType = 'text/html';
// 	switch (extname) {
// 		case '.js':
// 			contentType = 'text/javascript';
// 			break;
// 		case '.css':
// 			contentType = 'text/css';
// 		case '.json':
// 	}

// 	fs.readFile(filePath, function(error, content) {
// 		if (error) {
// 			if(error.code == 'ENOENT'){
// 				fs.readFile('./404.html', function(error, content) {
// 					response.writeHead(200, {'Content-Type': contentType});
// 					response.end(content, 'utf-8');
// 				});
// 			}
// 			else {
// 				response.writeHead(500);
// 				response.end('Sorry, check with the site admin for error: '+error.code+'..\n');
// 				response.end();
// 			}
// 		}
// 		else {
// 			response.writeHead(200, {'Content-Type': contentType});
// 			response.end(content, 'utf-8');
// 		}
// 	});
// })
// console.log('Server do be running at http://127.0.0.1:8125/');

const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening on 3000'));
app.use(express.static('New'));