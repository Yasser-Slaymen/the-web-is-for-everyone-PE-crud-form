const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { application } = require('express')
app.set('port', process.env.PORT ||3000 )
const BaseUrl = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
// Create application/form-urlen coded parser
const urlencodedParser = bodyParser.urlencoded({extended:false})


app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));
// Tamplet engine or rendering engine is ejs
app.set('view engine','ejs')
app.set('views','./viewes')

// Routs

// method GET

app.get('/',(request, response) =>{

    fetchJson(BaseUrl).then( (jsonData) => {
      response.render('pages/home', {
        title: 'Dit is zones pagina',
        smartzones: jsonData.data,
      })
    })

    
})

// Methode:post
// Home page POST
app.post('/', urlencodedParser, (request, response)=>{
  const postData = {
    method:'POST',
    body:JSON.stringify(request.body),
    headers:{'Content-Type':'application/json'}
  }
  
  fetchJson(BaseUrl, postData).then(function () {
    response.render('pages/home',{
      title:'add new smartzone'
    })
  })
})
//  renderen  page add in de link
app.get('/home',(request,response) => {
    response.render('pages/home', {
        title: 'edite',
    })
})



const server = app.listen(app.get('port'), () => {
  console.log(`Application started on port: ${app.get('port')}`)
})


async function fetchJson(BaseUrl, postData = {}) {
  return await fetch(BaseUrl, postData)
    .then((response) => response.json())
    .catch((error) => error)
}

// pages for testing

            // app.get('/zones', (req, res) => {
            //   fetchJson('https://codingthecurbs.api.fdnd.nl/v1/smartzone').then(function (jsonData) {
            //     console.log(jsonData)
            //     res.render('pages/zones', {
            //       title: 'Dit is zones pagina',
            //       zones: jsonData.data,
            //     })
            //   })
            // })


            // Add POST
            app.post('/add', urlencodedParser, (request, response)=>{
              const postData = {
                method:'POST',
                body:JSON.stringify(request.body),
                headers:{'Content-Type':'application/json'}
              }
              
              fetchJson(BaseUrl, postData).then(function () {
                response.render('pages/add',{
                  title:'add new smartzone'
                })
              })
            })
            //  renderen  page add in de link
            app.get('/add',(request,response) => {
                response.render('pages/add', {
                    title: 'edite',
                })
            })
            // for get method
            // async function fetchJson(url) {
            //     return await fetch(url)
            //       .then((response) => response.json())
            //       .catch((error) => error)
            //   }
            // app.listen(port, function(){
            //     console.log(`listening to port ${port}`)
            // })
