import express from 'express';
import { orderController } from './order.controller';

const orderRouter = express.Router();

//oreder create routes
orderRouter.post('/orders', orderController.createOrder);

//total revnue routes
orderRouter.get('/orders/revenue', orderController.calculateTotalRevenue);

export default orderRouter;
