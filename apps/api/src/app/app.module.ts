import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TVSeriesModule } from './tv_series/tv_series.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    MongooseModule.forRoot('mongodb://localhost/entertainment_mart'),
    TVSeriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
