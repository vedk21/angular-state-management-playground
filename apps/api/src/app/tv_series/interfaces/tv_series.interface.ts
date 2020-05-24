import { Document } from 'mongoose';

export interface TVSeries extends Document {
  readonly title: string;
  readonly runtime: number;
  readonly rating: number;
}
