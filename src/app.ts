import express, { Application} from 'express';
import cors from 'cors';
import bookRouter from './app/modules/products/book.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api', bookRouter)



export default app;
