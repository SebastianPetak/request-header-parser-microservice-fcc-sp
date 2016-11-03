/*
	FreeCodeCamp's Request Header Parser Microservice
	
	User Story: I can get the IP address, language, and 
	operating system for my browser.
*/

var http = require('http');

var server = http.createServer(function(req, res) {
	// ['x-forwarded-for'] will account for proxies, returning
	// the last proxy the request went through
	var ip = req.headers['x-forwarded-for'] ||
		req.connection.remoteAddress ||
		req.socket.remoteAddress ||
		req.connection.socket.remoteAddress;

	var language = req.headers["accept-language"];

	// splits are for isolating the os from the req.header["user-agent"] object
	var os = req.headers["user-agent"].split(') ')[0].split(' (')[1];

	res.writeHead(200, { "Content-Type": "application/json" });
	res.end(JSON.stringify({
		"ipaddress": ip,
		"language": language.match("^.....", '')[0],
		"software": os
		}));
})

server.listen(8000);
