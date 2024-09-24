import express from "express";

const router = express.Router()

router.get("/test", (req, res) => {
    res.send("Hello world")
})

router.get("/readme", (req, res) => {
    console.log(req)
    res.send("Hello World")
    res.json({
        message: "Hello World"
    })
})

router.get('/', (req, res) => {
    console.log(req.query)
    const name = req.query.name
    console.log(name)
    res.render('index.njk', {
        message: 'Hello World',
        title: 'Nunjucks hello world'
    })
})

router.get('/watch', (req,res) => {
    const movieID = req.query.v
    console.log(movieID)


    const movies = {
        'tt1238831':{
            title: 'Madagascar',
            year: 2000
        }
    }

    const movie = movies[movieID]
    console.log(movie)

   res.render('watch.njk', {
       title: 'watch',
        movie: movie
    })
//res.json(movie)

})

router.get('/om', (req, res) => {
    res.render('om.njk', {
        message: 'Det här är om',
        title: 'Nunjucks OM'
    })
})

router.get('/ytub', (req, res) => {
    const ID = req.query.v
    console.log(ID)
    res.render('ytub.njk', {
        title: 'Youtube',
        youtubeID: ID,
    })
})


export default router