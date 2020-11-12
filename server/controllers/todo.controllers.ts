/* eslint-disable */
import { Request, Response } from 'express';
import Todo from '../models/todo';
import {
  Contains, IsBoolean, IsEmail, IsLength, NotEmpty, IsDate,
} from '../../decorators/index';

class Incoming {
  @IsLength(10, 15)
  title: string

  description: string

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}

export default class Controllers {
  async newItem(req: Request, res: Response): Promise<any> {
    try {
      const { title, description } = req.body;
      const incoming = new Incoming(title, description);
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
