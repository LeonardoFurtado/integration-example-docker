var http = require('http')

var port = 3001

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write(`<h1>Hello World!<h1>`)
  res.end() //end the response
}).listen(port, function(){
  console.log(`server start at port ${port}`)
})
