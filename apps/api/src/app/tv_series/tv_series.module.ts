import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TVSeriesResolver } from './tv_series.resolver';
import { TVSeriesSchema } from './tv_series.schema';
import { TVSeriesService } from './tv_series.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'TVSeries', schema: TVSeriesSchema }])
  ],
  providers: [TVSeriesResolver, TVSeriesService],
})
export class TVSeriesModule {}
