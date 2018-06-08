const http = require('http')
const fs = require('fs')
http.createServer(function (req, res) {
  let tree = fs.readFileSync('./tree.js', 'utf-8')
  res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8', 'Access-Control-Allow-Origin': '*'})
  console.log(typeof JSON.stringify(tree))
  res.end(JSON.stringify(tree))
}).listen(8888)
