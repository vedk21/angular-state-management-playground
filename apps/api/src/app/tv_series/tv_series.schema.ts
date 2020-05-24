import * as mongoose from 'mongoose';

export const TVSeriesSchema = new mongoose.Schema({
  title: String,
  runtime: Number,
  rating: Number,
});
