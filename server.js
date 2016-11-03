var http = require('http');
//var useragent = require('useragent');
//var bodyParser = require('body-parser');
var server = http.createServer(function(req, res) {
	

	var ip = req.headers['x-forwarded-for'] ||
		req.connection.remoteAddress ||
		req.socket.remoteAddress ||
		req.connection.socket.remoteAddress;

	var language = req.headers["accept-language"];

	var os = req.headers["user-agent"];

	//var os = req.body.urlencoded

	//var os = useragent.parse(req.headers['user-agent']);

	console.log(ip);
	console.log(language);
	console.log(os);


	res.writeHead(200, { "Content-Type": "application/json" });

	res.end(JSON.stringify({
		"ipaddress": ip,
		"language": language.match("^.....", ''),
		"software": os
		}));

	res.end()
})

server.listen(8000);

// any get request we responsd wih IP, language, and OS as a JSON object.
