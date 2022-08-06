import express from 'express';

//body parser
import bodyParser from 'body-parser';

//initialize express
const app = express()
//port
const PORT = 5000

//initialize body parser
app.use(bodyParser.json());



//home route
app.get('/', (req, res) => { res.send('Hello From home Page') })
    

// listen on port 5000
app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`))
