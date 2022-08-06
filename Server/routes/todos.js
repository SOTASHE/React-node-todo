import express from "express";

//controllers import 
import { postTodo } from "../controllers/todos.js";
import { getTodo } from "../controllers/todos.js";
import { deleteTodo } from "../controllers/todos.js";
import { updateTodoById } from "../controllers/todos.js";
import { patchTodoById } from "../controllers/todos.js";
import { searchTodo } from "../controllers/todos.js";
import { completedTodos } from "../controllers/todos.js";
import { getAllTodos } from "../controllers/todos.js";

const router = express.Router();


router.get("/", getAllTodos);

//post a new todo
router.post("/", postTodo);

//get by id
router.get("/:id",getTodo);

//delete by id
router.delete("/:id", deleteTodo);

//update by id
router.put("/:id", updateTodoById
);

//using patch to update to change the completed status of a todo and title of a todo
router.patch("/:id", patchTodoById
);

// seach for a todo by title and return the todo
router.get("/search/:title", searchTodo
);

//return only completed todos
router.get("/completed",completedTodos
);
 
export default router;
