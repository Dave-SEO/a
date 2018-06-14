// const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express()
var apiRoutes = express.Router()
/* eslint-disable*/
var zNodes = [
  { id: 1, pId: 0, name: '随意勾选 1', open: true, group: '1'},
  { id: 11, pId: 1, name: '随意勾选 1-1', group: '2'},
  { id: 12, pId: 1, name: '随意勾选  1-2', open: true, group: '2'},
  { id: 121, pId: 12, name: '随意勾选 1-2-1', checked: true, group: '2'},
  { id: 122, pId: 12, name: '随意勾选 1-2-2', group: '2'},
  { id: 123, pId: 12, name: '随意勾选 1-2-3', group: '2'},
  { id: 13, pId: 1, name: '随意勾选 1-3', group: '2'},
  { id: 2, pId: '0', name: '随意勾选 2', open: true, group: '1'},
  { id: 21, pId: 2, name: '随意勾选 2-1', group: '2'},
  { id: 22, pId: 2, name: '随意勾选 2-2', open: true, group: '1'},
  { id: 221, pId: 22, name: '随意勾选 2-2-1', checked: true, group: '1'},
  { id: 333, pId: 221, name: '随意勾选 2-2-1-1', checked: true, group: '2'},
  { id: 222, pId: 22, name: '随意勾选 2-2-2', group: '2'},
  { id: 223, pId: 22, name: '随意勾选 2-2-3', group: '2'},
  { id: 23, pId: 2, name: '随意勾选 2-3', checked: true, group: '2'}
]
apiRoutes.get('/seller', (req, res) => {
  let tree = fs.readFileSync('./tree.js', 'utf-8')
  res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8', 'Access-Control-Allow-Origin': '*'})
  console.log(typeof JSON.stringify(tree))
  res.end(JSON.stringify(zNodes))
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
