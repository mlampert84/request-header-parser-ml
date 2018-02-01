const express = require('express')
const PORT = process.env.PORT || 5000


express()
   .get('/api/whoami', (req,res) => {
     var whoami  = { ipaddress: req.ip,
                     language: req.headers['accept-language'],
                     software: req.headers['user-agent']}

     
     console.log(JSON.stringify(req.headers))
     res.send(JSON.stringify(whoami))
   })
     .listen(PORT, () => console.log('Listening on PORT: ' + PORT))
   
