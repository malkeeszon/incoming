/* eslint-disable */
import {
  Contains, IsBoolean, IsEmail, IsLength, NotEmpty, IsDate,
} from '../../decorators/index';

export default class Incoming {
  @IsLength(4, 10)
  title: string

  @IsLength(10, 30)
  description: string

  @IsDate()
  deadline: string

  @IsEmail()
  notifyWhenDone: string

  @Contains('Rafal')
  author: string

  constructor(title: string, description: string, deadline: string, notifyWhenDone: string, author: string) {
    this.title = title;
    this.description = description;
    this.deadline = deadline;
    this.notifyWhenDone = notifyWhenDone;
    this.author = author;
  }
}

