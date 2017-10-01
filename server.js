const express = require('express')
const app = express()

app.get('/', function (req, res) {
    console.log(req)
    res.send('Hello World!')

})

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })

const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
const ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
 
app.listen(port, ip, function () {
    console.log('Nick server is starting.....')
    console.log( "Listening on " + ip + ", port " + port )
});


