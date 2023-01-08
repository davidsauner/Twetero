const PORT = 5000
import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

let users = []
let tweets = []


app.post("/sign-up", (req, res) => {
const {username , avatar} = req.body

if(!username || !avatar) {
    res.status(400).send("Complete os campos de registro corretamente.")
    return       
}

users.push({username, avatar})
res.send("OK")
})

  
  app.post('/tweets', (req, res) => {
    const {username , tweet}   = req.body
    tweets.push({username, tweet})
    res.send("OK")


    res.send(tweets)
  })
  


  app.get('/tweets', (req, res) => {
    res.send("ok")
  })











  app.listen(PORT, () => {
    console.log(`Server iniciado na porta ${PORT}`)
  })
