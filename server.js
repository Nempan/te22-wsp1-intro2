import express, { query, request, response } from "express"
import nunjucks from "nunjucks"

const app = express()
nunjucks.configure('views', {
    autoescape: true,
    express: app,
})

app.use(express.static ('public'))

app.get('/', (request, response) => {
    console.log(request,query)
    const name = request.query.name
    console.log(name)
    response.render('index.njk', {
        message: 'Hello World',
        title: 'Nunjucks hello world'
    })
})

app.get('/watch', (request,response) => {
    const movieID = request.query.v
    console.log(movieID)


    const movies = {
        'tt1238831':{
            title: 'Madagascar',
            year: 2000
        }
    }

    const movie = movies[movieID]
    console.log(movie)

   response.render('watch.njk', {
       title: 'watch',
        movie: movie
    })
//response.json(movie)

})

app.get('/om', (request, response) => {
    response.render('om.njk', {
        message: 'Det här är om',
        title: 'Nunjucks OM'
    })
})

app.get('/ytub', (request, response) => {
    const ID = request.query.v
    console.log(ID)
    response.render('ytub.njk', {
        title: 'Youtube',
        youtubeID: ID,
    })
})

app.get("/readme", (request, response) => {
    console.log(request)
    response.send("Hello World")
    response.json({
        message: "Hello World"
    })
})

app.get('/', (req, res) => {
    
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})