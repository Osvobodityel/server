const host = 'localhost';
const http = require('http');
const port = 3000;
const fs = require('fs').promises;

const requestListener = function (req, res) {
	fs.readFile(__dirname + "/idnex.html")
	.then(contents => {
		res.setHeader("Content-Type", "text/html");
		res.writeHead(200);
		res.end(contents);
	})
	.catch(err => {
		res.writeHead(500);
		res.end(err);
		return;
	})
};

/*const requestListener = function (req, res) {
	res.writeHead(200);
	res.end("HELLO");
};
*/
const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`serwer działa na http://${host}:${port}`);
});