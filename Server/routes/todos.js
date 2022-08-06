import express from "express";

import { v4 as uuidv4 } from "uuid";
uuidv4();

import fs from "fs";

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
    let todos = data;
    // log the data
    console.log(todos);
  })
  .catch((error) => console.log(error));

//store document in a variable and log it
let todos = await fetch(url).then((response) => response.json());
//save the first 100 todos to a json file name todos.json in server folder and format it as json
// fs.writeFileSync("todos.json", JSON.stringify(todos.slice(0, 100)));

//log the todos.json file
console.log(todos);

//log the first 100 todos
console.log(todos.slice(0, 100));
//log the first 100 todos in json format
console.log(JSON.stringify(todos.slice(0, 100)));
//log the first 100 todos in json format with indentation
console.log(JSON.stringify(todos.slice(0, 100), null, 2));





//   if (err) throw err;
//   console.log("The file has been saved!");
// })

router.get("/", (req, res) => {
  console.log("Post Route Recahed" )
  res.send(todos);
});

//post a new todo
router.post("/", (req, res) => {
 const todo = req.body;

  // const todoId = uuidv4();

  // const todoWithId = {

  //   ...todo,id: todoId,
  // }
  // res.json(todos);
  //console.log(todos);
  // res.send(todos);
  //push the new todo to the todos array
  // todos.push(req.body);
  // console.log(req.body);
  // const todo = req.body;
  todos.push({ ...todo, id: uuidv4() });
  res.send( `todo with ${todo}  added the database`  )
})

//get by id
router.get("/:id", (req, res) => {
  // res.send("Get by id route reached");

  const todoId = req.params.id;
  const todo = todos.find((todo) => todo.id === todoId);
  // res.json(todo);
  res.send(todo);

  

});

//delete by id

router.delete("/:id", (req, res) => {

  const todoId = req.params.id; //get the id from the url params
  // const todo = todos.find((todo) => todo.id === todoId);
  // // res.json(todo);
  // // res.send(todo);
  // //remove the todo from the todos array
  // todos.splice(todos.indexOf(todo), 1);
  // res.send(`todo with ${todo}  deleted from the database`)

  todos = todos.filter((todo) => todo.id !== todoId); //filter the todos array to remove the todo with the id of the todoId
  res.send(`todo with ${todoId}  deleted from the database`) 
}
);


//update by id
router.put("/:id", (req, res) => {
  const todoId = req.params.id;
  const todo = req.body;
  // const todo = todos.find((todo) => todo.id === todoId);
  // // res.json(todo);
  // // res.send(todo);
  // //remove the todo from the todos array
  // todos.splice(todos.indexOf(todo), 1);
  // res.send(`todo with ${todo}  deleted from the database`)

  todos = todos.map((todo) =>
    todo.id === todoId ? { ...todo, ...todo } : todo
  ); //map the todos array to remove the todo with the id of the todoId
  res.send(`todo with ${todoId}  updated in the database`)
}
);

//using patch to update to change the completed status of a todo and title of a todo
router.patch("/:id", (req, res) => {
  
  //patch to update the completed status of a todo and title of a todo
  const todoId = req.params.id;
  const todo = req.body;
  // const todo = todos.find((todo) => todo.id === todoId);
  // // res.json(todo);
  // // res.send(todo);
  // //remove the todo from the todos array
  // todos.splice(todos.indexOf(todo), 1);
  // res.send(`todo with ${todo}  deleted from the database`)

  todos = todos.map((todo) =>
    todo.id === todoId ? { ...todo, ...todo } : todo
  ); //map the todos array to remove the todo with the id of the todoId
  res.send(`todo with ${todoId}  updated in the database`)

}
);

// seach for a todo by title and return the todo
router.get("/search/:title", (req, res) => {
  const title = req.params.title;
  const todo = todos.find((todo) => todo.title === title);
  res.send(todo);
}
);

//return only completed todos
router.get("/completed", (req, res) => {
  const todo = todos.filter((todo) => todo.completed === true);
  res.send(todo);
}
);



 
export default router;
