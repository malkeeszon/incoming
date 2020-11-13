/* eslint-disable */

import express, { Request, Response } from 'express';
import Todo from '../../models/todo';
import ClassControllers from '../../controllers/todo.class.controllers';
import FunctionControllers from '../../controllers/todo.function.controllers'

const router = express.Router();

// class controllers
const controllers = new ClassControllers();

router.get('/todo', controllers.showAll);
router.post('/todo', controllers.newItem);

// // function controllers

// router.get('/todo', FunctionControllers.getTodos);
// router.post('/todo', FunctionControllers.createTodo);

export { router as todoRouter };
