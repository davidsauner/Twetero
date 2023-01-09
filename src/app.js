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

const usersLogged = users.find(user => user.username === username) 
if(usersLogged){
    res.status(409).send("Já existe um usuário com esse nome")
    return
}
users.push({username, avatar})
res.send("OK")
})

  
  app.post('/tweets', (req, res) => {
    const {username , tweet}   = req.body
    const usersLogged = users.find(user => user.username === username) 
    
     if(!usersLogged){
        res.status(401).send("UNAUTHORIZED")
        return
     }
    if(!tweet) {
      res.status(400).send("Campo de mensagem em branco!")
      return
  } 
    
  
    const {avatar} = users.find(user => user.username === username)
    tweets.push({username, tweet , avatar})
    res.send("OK")
  })
  


  app.get('/tweets', (req, res) => {
    res.send(tweets.slice(-10).reverse())

  })











  app.listen(PORT, () => {
    console.log(`Server iniciado na porta ${PORT}`)
  })
