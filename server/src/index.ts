/* eslint-disable */

import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import { todoRouter } from './routes/todo';

const app = express();
app.use(json());
app.use(todoRouter);

mongoose.connect('mongodb://localhost:27017/test-todo', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}, () => {

  console.log('Connected to database ✅' );
});

app.listen(3000, () => {
  console.log('Server 👀 port 3000');
});
