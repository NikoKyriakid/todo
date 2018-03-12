const express = require('express')
const app = express()

app.get('/', function (req, res) {
  console.log(process.env);
    res.send('Hello World!')

});

const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
const ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
 
app.listen(port, ip, function () {
    console.log('Nick server is starting.....')
    console.log( "Listening on " + ip + ", port " + port )
});


