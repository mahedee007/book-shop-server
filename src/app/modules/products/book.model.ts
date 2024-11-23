import { model, Schema } from 'mongoose';
import { Tbook } from './book.interface';

const bookSchema = new Schema<Tbook>(
  {
    title: { type: 'string', required: true, unique: true },
    author: { type: 'string', required: true },
    price: {
      type: 'number',
      required: true,
      min: [0, 'Price must be a positive number'],
    },
    category: {
      type: 'string',
      enum: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
      required: true,
    },
    description: { type: 'string', required: true },
    quantity: { type: 'number', required: true, min: 0 },
    inStock: { type: 'boolean', required: true },
  },
  { timestamps: true },
  
);

export const bookModel = model<Tbook>('book', bookSchema);
