const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.use('/scripts',express.static('scripts'))
// Tamplet engine or rendering engine is ejs
app.set('view engine','ejs')
// Routs

app.get('/', (request,response) =>{
    console.log('hall world')
    response.render('hallo world')
})

app.listen(port, function(){
    console.log(`listening to port ${port}`)
})