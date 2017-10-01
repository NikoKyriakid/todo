const express = require('express')
const app = express()

app.get('/', function (req, res) {
    console.log(req)
    res.send('Hello World!')

})

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })

const server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});

module.exports = app;

