const express = require('express')
const app = express()
// const port = process.env.PORT || 3000
const BaseUrl = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))


app.use(express.static('public'))
// Tamplet engine or rendering engine is ejs
app.set('view engine','ejs')
app.set('views','./viewes')

// Routs

// method GET

app.get('/',(request, response) =>{

    fetchJson('https://codingthecurbs.api.fdnd.nl/v1/smartzone').then(function (jsonData) {
      response.render('pages/home', {
        title: 'Dit is zones pagina',
        smartzones: jsonData.data,
      })
    })

    
})

app.get('/zones', (req, res) => {
    fetchJson('https://codingthecurbs.api.fdnd.nl/v1/smartzone').then(function (jsonData) {
      console.log(jsonData)
      res.render('pages/zones', {
        title: 'Dit is zones pagina',
        zones: jsonData.data,
      })
    })
  })


app.set('port', process.env.PORT ||3000 )

const server = app.listen(app.get('port'), () => {
  console.log(`Application started on port: ${app.get('port')}`)
})

async function fetchJson(url) {
    return await fetch(url)
      .then((response) => response.json())
      .catch((error) => error)
  }
// app.listen(port, function(){
//     console.log(`listening to port ${port}`)
// })
