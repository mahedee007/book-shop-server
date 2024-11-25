import { Types } from 'mongoose';
import { bookModel } from '../products/book.model';
import { orderModel } from './order.model';

// Calculate Place a order
const createOrder = async (
  email: string,
  productId: Types.ObjectId,
  quantity: number,
) => {
  const product = await bookModel.findById(productId);

  if (!product) {
    throw new Error('Book not found');
  }
  if (product.quantity < quantity) {
    throw new Error('Not enough stock');
  }
  const totalPrice = product.price * quantity;
  product.quantity -= quantity;
  if (product.quantity === 0) {
    product.inStock = false;
  }else{
    product.inStock = true;
  }
  await product.save();

  const newOrder = new orderModel({
    email,
    product: productId,
    quantity,
    totalPrice,
  });

  await newOrder.save();
  return newOrder;
};
// Calculate total Revenue
const calcualteTotalRevenue = async () => {
  try {
    const revenue = await orderModel.aggregate([
      {
        $lookup: {
          from: 'books',
          localField: 'product',
          foreignField: '_id',
          as: 'book',
        },
      },
      {
        $unwind: '$book',
      },
      {
        $project: {
          totalRevenue: {
            $multiply: ['$quantity', '$book.price'],
          },
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: '$totalRevenue',
          },
        },
      },
    ]);
    if (!revenue.length) {
      return 0;
    }
    return revenue[0].totalRevenue;
  } catch (err) {
    console.log(err);
  }
};

export const orderService = {
  createOrder,
  calcualteTotalRevenue,
};
