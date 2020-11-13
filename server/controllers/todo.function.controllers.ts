/* eslint-disable  */
import { Request, Response } from 'express';
import Todo from '../models/todo';
import Incoming from './incoming.controller'

exports.getTodos = async (req: Request, res: Response): Promise<any> => {
  try {
    const Todos = await Todo.find();
    res.status(200).send(Todos);
  } catch (error) {
    console.log('Error', error);
    res.sendStatus(500);
  }
};

exports.createTodo = async (req: Request, res: Response): Promise<any> => {
  try {
    const { title, description, deadline, notifyWhenDone, author } = req.body;
    const incoming = new Incoming(title, description, deadline, notifyWhenDone, author);
    const result = await Todo.create(incoming);
    res.status(201).send(result);
  } catch (error) {
    console.log('Error', error);
    res.sendStatus(500);
  }
};
