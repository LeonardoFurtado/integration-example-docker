require('dotenv').config()

var http = require('http')
var port = process.env.PORT || 8080

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write(`<h1>Hello ${process.env.HELLO}!<h1>`)
  res.end() //end the response
}).listen(port, function(){
  console.log(`server start at port ${port}`)
})
