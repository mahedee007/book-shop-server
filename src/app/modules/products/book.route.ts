import express from 'express';
import { bookController } from './book.controller';

const bookRouter = express.Router();

//Create a new book route

bookRouter.post('/products', bookController.createBook);

//Get all books route
bookRouter.get('/products', bookController.getAllBooks);

//Get a single book route
bookRouter.get('/products/:productId', bookController.getSingleBook);

//Update a book route
bookRouter.put('/products/:productId', bookController.updateBook);

//Delete a book route
bookRouter.delete('/products/:productId', bookController.deleteBook);

export default bookRouter;
