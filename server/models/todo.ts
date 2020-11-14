/* eslint-disable */
import * as mongoose from 'mongoose';

interface ITodo {
  withInitializer: number
}

interface todoModelInterface extends mongoose.Model<TodoDoc> {
  build(attr: ITodo): TodoDoc
}

interface TodoDoc extends mongoose.Document {
  withInitializer: number
}

const todoSchema = new mongoose.Schema({

  withInitializer: {
      type: Number,
      required: true
    },
  // title: {
  //   type: String,
  //   required: true
  // },
  // description: {
  //   type: String,
  //   required: true,
  // },
  // deadline: {
  //   type: String,
  //   required: true,
  // },
  // notifyWhenDone: {
  //   type: String,
  //   required: true,
  // },
  // author: {
  //   type: String,
  //   required: true,
  // },


});

todoSchema.statics.build = (attr: ITodo) => new Todo(attr);

const Todo = mongoose.model<TodoDoc, todoModelInterface>('Todo', todoSchema);

export default Todo;
