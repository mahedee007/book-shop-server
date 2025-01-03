import mongoose, { model, Schema } from 'mongoose';
import { bookModel } from '../products/book.model';
import { Iorder } from './order.interface';
import validator from 'validator';

const orderShchema = new Schema<Iorder>(
  {
    email: { type: String, required: true, validate: {
      validator: (value:string) => validator.isEmail(value),
      message: '{VALUE} is not a valid email',
    }
 },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'book',
      required: true,
    },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true, min: 0 },
  },
  {
    timestamps: true,
  },
);

orderShchema.pre('save', async function (next) {
  const product = await bookModel.findById(this.product);
  if (product) {
    this.totalPrice = product.price * this.quantity;
  } else {
    throw new Error('Product not found');
  }

  next();
});

export const orderModel = model<Iorder>('order', orderShchema);
