import express from 'express';
// import fetch from 'node-fetch';
//body parser
import bodyParser from 'body-parser';

import todosRoutes from "./routes/todos.js";

// initialize express
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());


// stating path to the routes
app.use('/todos', todosRoutes);



app.get("/", (req, res) => {
    // res.json(todos);
    //console.log(todos);
    res.send('hi there');
});



app.listen(port, () => console.log(`Listening on port ${port}`));

