/* eslint-disable */
import { Request, Response } from 'express';
import Todo from '../models/todo';
import Incoming from './incoming.controller'

export default class Controllers {
  async newItem(req: Request, res: Response): Promise<any> {
    try {
      const { title, description, deadline, notifyWhenDone, author } = req.body;
      console.log('req, body', title, description, deadline, notifyWhenDone, author );
      const incoming = new Incoming(title, description, deadline, notifyWhenDone, author);
      console.log(incoming.title);
      const result = await Todo.create(incoming);
      res.status(201).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error while creating element');
    }
  }

  async showAll(req: Request, res: Response): Promise<any> {
    const result = await Todo.find();
    res.status(200).send(result);
  }
}