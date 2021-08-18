require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/api', require("./routes/authRouter"))
app.use('/api', require("./routes/postRouter"))
app.use('/api', require("./routes/wordRouter"))
app.use('/api', require("./routes/categoryRouter"))

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:false
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 6400
app.listen(port, () => {
    console.log('Server is running on port', port)
})