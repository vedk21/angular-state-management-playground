import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TVSeries } from './interfaces/tv_series.interface';
import { TVSeriesInput } from './inputs/tv_series.input';

@Injectable()
export class TVSeriesService {
  constructor(@InjectModel('TVSeries') private readonly TVSeriesModel: Model<TVSeries>) {}

  async create(createTVSeriesDto: TVSeriesInput): Promise<TVSeries> {
    const createdTVSeries = new this.TVSeriesModel(createTVSeriesDto);
    return await createdTVSeries.save();
  }

  async findAll(): Promise<TVSeries[]> {
    return await this.TVSeriesModel.find().exec();
  }
}
