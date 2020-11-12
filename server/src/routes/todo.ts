import express, { Request, Response } from 'express'
import { Todo } from '../../models/todo'
import Controllers from '../../controllers/todo.controllers'

const router = express.Router()
const controllers = new Controllers();

router.get('/todo', async (req: Request, res: Response) => {
  const todo = await Todo.find({})
  return res.status(200).send(todo)
})

router.post('/todo', controllers.newItem)

export { router as todoRouter }