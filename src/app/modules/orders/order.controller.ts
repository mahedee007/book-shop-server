import { Request, Response } from 'express';
import { orderService } from './order.service';

//Create a new order
const createOrder = async (req: Request, res: Response) => {
  try {
    const { email, product, quantity } = req.body;
    const newOrder = await orderService.createOrder(email, product, quantity);

    res.json({
      message: 'Order created successfully',
      status: true,
      data: newOrder,
    });
  } catch (err) {
    res.json({
      message: 'Failed to create order',
      status: false,
      data: err,
    });
  }
};

//Caculate total revenue

const calculateTotalRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await orderService.calcualteTotalRevenue();

    res.json({
      message: 'Revenue calculated successfully',
      status: true,
      data: totalRevenue,
    });
  } catch (err) {
    res.json({
      message: 'Failed to calculate total revenue',
      status: false,
      data: err,
    });
  }
};

export const orderController = {
  createOrder,
  calculateTotalRevenue,
};
