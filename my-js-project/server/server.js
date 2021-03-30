const express = require('express') // to create the express server
const app = express() //use express
const port = 3000 // the port we are using
app.use(express.json()); // to parse the body of the response

// Set the application api to listen on this port so that it will respond
app.listen(port, () => {
 console.log(`JobSeeker app listening at http://localhost:${port}`)
})

const low = require('lowdb') //to access this db
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('database.json')
const db = low(adapter)

app.get('/users', (req, res) => {
    res.send('users')
})
db.get('users')   

db.defaults({ users: [] })
.write()

app.get('/users', (req, res) => {
    const data = db.get('users') //we are reading the users
    res.send(data)
})
 
app.post('/users', (req, res) => {
    db.get('users')
      .push(req.body)
      .write()
    res.send('User created') //sending back a response
})

app.delete('/users/1', (req, res) => {
    db.get('users')
      .remove({ id: 1})
      .write()
    res.send('deleted!')
})
   
   