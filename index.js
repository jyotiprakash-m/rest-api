import express from 'express'
import bodyParser from 'body-parser'
import usersRoutes from "./routes/users.js";
const app = express()
const PORT = 8000;

// app.use(express.json())
app.use(bodyParser.json())



app.use("/user", usersRoutes);
app.get('/', (req, res) => {
    res.send("Welcome to our API")
})

app.all('*', (req, res) => {
    res.send("This router is not exist")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
