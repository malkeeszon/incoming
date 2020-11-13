/* eslint-disable */

import express, { Request, Response } from 'express';
import Todo from '../../models/todo';
import ClassControllers from '../../controllers/todo.class.controllers';

const router = express.Router();
const controllers = new ClassControllers();

router.get('/todo', controllers.showAll);

router.post('/todo', controllers.newItem);

export { router as todoRouter };
