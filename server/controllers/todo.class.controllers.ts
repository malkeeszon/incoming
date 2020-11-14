/* eslint-disable */



function makePropertyMapper<T>(prototype: any, key: string, mapper: (value: any) => T) {
  const values = new Map<any, T>();
  Object.defineProperty(prototype, key, {
    set(firstValue: any) {
      Object.defineProperty(this, key, {
        get() {
          return values.get(this);
        },
        set(value: any) {
          values.set(this, mapper(value));
        },
        enumerable: true,
      });
      this[key] = firstValue;
    },
    enumerable: true,
    configurable: true,
  });
}

function exampleDecorator(multiplier: number) {
  return function (target: any, key: string) {
    makePropertyMapper(target, key, (value: number) => value * multiplier);
  };
}

class Example {
  @exampleDecorator(3)
  myNumber: number;

  @exampleDecorator(3)
  withInitializer: number;

  constructor(withInitializer: number) {
    this.withInitializer = withInitializer;
  }
}

const example = new Example(2);

console.log(example); // 9
console.log(Object.values(example)); // true

//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

import { Request, Response } from 'express';
import Todo from '../models/todo';
import Incoming from './incoming.controller';

export default class Controllers {
  async newItem(req: Request, res: Response): Promise<any> {
    try {

      const {
        withInitializer
      } = req.body;

      const example = new Example(withInitializer);

      const result = await Todo.create(example);
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
