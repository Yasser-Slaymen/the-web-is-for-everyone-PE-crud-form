const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const BaseUrl = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))


app.use(express.static('public'))
// Tamplet engine or rendering engine is ejs
app.set('view engine','ejs')
app.set('views','viewes')

// Routs

// method GET
app.get('/',(request, response) =>{

    fetch(BaseUrl)
    .then(function(JsonData) {
        response.render('pages/home', {
            title:'Smart Zones',
            home: JsonData.data
        })
    })
})



app.get('/', (request,response) =>{
    console.log('hall world')
    response.render('pages/home',{
        title:'Home'
    })
})

app.listen(port, function(){
    console.log(`listening to port ${port}`)
})