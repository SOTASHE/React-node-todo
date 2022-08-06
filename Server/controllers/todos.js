
import express from "express";

import { v4 as uuidv4 } from "uuid";
uuidv4();

const router = express.Router();

import fetch from "node-fetch";

// fet data from https://jsonplaceholder.typicode.com/todos and save it to a variable
// connect to https://jsonplaceholder.typicode.com/todos and get the data
const url = "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5";
//http://localhost:5000/todos?_start=0&_limit=5
//get only 5 todos from the data


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

// let todos = await fetch(url).then((response) => response.json());
//get only 5 todos from the data

let todos = await fetch(url).then((response) => response.json());


// call back function for the get route
export const getAllTodos = (req, res) => {
  console.log("Get Route Recahed");
  res.send(todos);
};

// call back function for the post route
export const postTodo = (req, res) => {
  const todo = req.body;

  todos.push({ ...todo, id: uuidv4() });
  res.send(`todo with ${todo}  added the database`);
};

// call back function for the get route
export const getTodo = (req, res) => {
  // res.send("Get by id route reached");
  const todoId = req.params.id;
  const todo = todos.find((todo) => todo.id === todoId);
  // res.json(todo);
  res.send(todo);
};

//call back function for the delete route
export const deleteTodo = (req, res) => {
  const todoId = req.params.id; //get the id from the url params
  todos = todos.filter((todo) => todo.id !== todoId); //filter the todos array to remove the todo with the id of the todoId
  res.send(`todo with ${todoId}  deleted from the database`);
};


//call back function for the update route using put
export const updateTodoById = (req, res) => {
  const todoId = req.params.id;
  const todo = req.body;
  // const todo = todos.find((todo) => todo.id === todoId);
  // todos.splice(todos.indexOf(todo), 1);
  // res.send(`todo with ${todo}  deleted from the database`)
  todos = todos.map((todo) =>
    todo.id === todoId ? { ...todo, ...todo } : todo
  ); //map the todos array to remove the todo with the id of the todoId
  res.send(`todo with ${todoId}  updated in the database`);
};


//call back function for the patch route
export const patchTodoById = (req, res) => {
  //patch to update the completed status of a todo and title of a todo
  const todoId = req.params.id;
  const todo = req.body;
  todos = todos.map((todo) =>
    todo.id === todoId ? { ...todo, ...todo } : todo
  ); //map the todos array to remove the todo with the id of the todoId
  res.send(`todo with ${todoId}  updated in the database`);
};

//call back function for the search route
export const searchTodo = (req, res) => {
  const title = req.params.title;
  const todo = todos.find((todo) => todo.title === title);
  res.send(todo);
};

//call back function for the completed route
export const completedTodos = (req, res) => {
  const todo = todos.filter((todo) => todo.completed === true);
  res.send(todo);
};



