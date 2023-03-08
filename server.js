const express = require('express')
const cors = require('cors')


const app = express()

var corOptions = {
    origion: "https://localhost:8000"


}

//middleware

app.use(cors());
app.use(express.json())

app.use(express.urlencoded( { extended : true }))


//routers
const router = require('./routes/productRouter.js')

app.use('/api/products', router)




//testing
//app.get('/', (req, res) => {

   // res.json({ message : 'hello'})
    

//})


const PORT =process.env.PORT || 8000


app.listen(PORT, () => {
    console.log(`serveer is running on port ${PORT}`)
})

