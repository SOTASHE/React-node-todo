import express from "express";

const router = express.Router();

import fetch from "node-fetch";


// fet data from https://jsonplaceholder.typicode.com/todos and save it to a variable
// connect to https://jsonplaceholder.typicode.com/todos and get the data
const url = "https://jsonplaceholder.typicode.com/todos";
// fetch the data
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // save the data to a variable
    const todos = data;
    // log the data
    console.log(todos);
  })
  .catch((error) => console.log(error));

//store document in a variable and log it
const todos = await fetch(url).then((response) => response.json());
console.log(todos);

//create route to get all todos in that document or local variable
// all routes in here are going to be prefixed with /todos
router.get("/", (req, res) => {
  // res.json(todos);
//   console.log(todos);
  res.send(todos);
});

export default router;
