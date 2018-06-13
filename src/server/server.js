// const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express()
var apiRoutes = express.Router()
apiRoutes.get('/seller', (req, res) => {
  let tree = fs.readFileSync('./tree.js', 'utf-8')
  res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8', 'Access-Control-Allow-Origin': '*'})
  console.log(typeof JSON.stringify(tree))
  res.end(JSON.stringify(tree))
})
apiRoutes.get('/sellerId', (req, res) => {
  let sellerId = {id: [4, 5, 6, 7, 8]}
  res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8', 'Access-Control-Allow-Origin': '*'})
  res.end(JSON.stringify(sellerId))
})
// http.createServer(function (req, res) {
//   let tree = fs.readFileSync('./tree.js', 'utf-8')
//   res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8', 'Access-Control-Allow-Origin': '*'})
//   console.log(typeof JSON.stringify(tree))
//   res.end(JSON.stringify(tree))
// }).listen(8888)
// /* eslint-disable*/
// var a= [
//   {"id":1000000001,"pid":0,"name":"组A"},
//   {"id":1,"name":"admin","pid":1000000001},
//   {"id":1000000002,"pid":1,"name":"组AA"},
//   {"id":1000000003,"pid":1,"name":"组AA1"},
//   {"id":2,"name":"tbadmin","pid":1000000001}
// ]
app.use('/api', apiRoutes)
app.listen(8888)
