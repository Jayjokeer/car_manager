import * as mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  brand: {
    type: String,
  },
  color: {
    type: String,
  },
  model: {
    type: String,
  },
});
