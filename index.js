/* Simple web server for testing this demo */

const fs = require('fs')
const express = require('express')
var app = express()
var port = 8080

app.use(express.static('/'))

// Can optionally pass a port number as an argument if 8080 in use.
if (process.argv.length > 2) {
	port = process.argv[2]
}

var server = app.listen(port, "0.0.0.0")

// Serve up the root page that lists components
app.get('/', function(request, response) {
  var display = fs.readFileSync('./index.html')
  response.end(display)
})

// Note that this treats contents as if they are in root ('/') instead of '/bower_components'
// as is in the official Predix demos. You just need to adjust your paths accordingly outside
// of the demo.
app.use(express.static('bower_components'))

app.use(express.static('components'))
