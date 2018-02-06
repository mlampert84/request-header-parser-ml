const express = require('express')
const PORT = process.env.PORT || 5000
var languageParser = require('accept-language-parser')

express()
   .get('/api/whoami', (req,res) => {

    var languages = languageParser.parse(req.headers['accept-language'])

     var whoami  = { ipaddress: req.headers['x-forwarded-for'] || req.ip,
                     language: languages[0].code + '-' + languages[0].region,
                     software: req.headers['user-agent']}

     
     console.log(JSON.stringify(req.headers))
     res.send(JSON.stringify(whoami))
   })
     .listen(PORT, () => console.log('Listening on PORT: ' + PORT))
   
