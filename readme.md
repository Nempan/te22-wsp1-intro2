#webbserver intro

## Linux commandon

* touch - skapa ny txt

* ll

## Node

För att initiera nytt node projekt 'npm init -y' i en mapp.
Skapar en package.json

För node instalerade vi express och nodemon

ctrl + c för avsluta

## Express

Skapade en express server med start kod. Skicka statiska filer från public. I public finns filer som vi vill skicka. Skapade en request response protcl som tar info från både index och /om   .Testade även att få fel meddelanden som 418 och 404 och andra.


import express, { request, response } from "express"

const app = express()

app.use(express.static ('public'))  

app.get('/', (req, res) => {
    res.send('Hejsan Svejsan')
    res.status(418).sendFile('status code')
})


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})

## Nunjucks

Typ som html. configure för att välja en map som ska läsas ifrån. Indexen från view mappen läses in som bara "/" och resten måste man skriva som tex /om (utan .njk)

app.get('/', (request, response) => {
    response.render('index.njk', {
        message: 'Hello World',
        title: 'Nunjucks hello world'
    })
})

app.get('/om', (request, response) => {
    response.render('om.njk', {
        message: 'Det här är om',
        title: 'Nunjucks OM'
    })
})

## Route

Vi gjorde index.js som route där den sparar alla routes til dom olika sidorn så det skulle slippa vara i server.js

Vi tog även information med get från search.js i listan med namn så att när man söker på namnen så hittar den. 
Vi gjorde även en toLowerCase så att allt omvandlas till lower case när man söker.