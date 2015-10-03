var express = require('express');

express()
.use(express.static('.'))
.listen(3000);

console.log("app server is running at 'http://localhost:3000'");
