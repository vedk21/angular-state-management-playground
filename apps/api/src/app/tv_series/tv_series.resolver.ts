import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TVSeriesService } from './tv_series.service';
import { TVSeriesType } from './dto/create_tv_series.dto';
import { TVSeriesInput } from './inputs/tv_series.input';

@Resolver()
export class TVSeriesResolver {
  constructor(
    private readonly tvSeriesService: TVSeriesService
  ) {}

  @Query(() => [TVSeriesType])
  async getAllTVSeries() {
    return this.tvSeriesService.findAll();
  }

  @Mutation(() => TVSeriesType)
  async createTVSeries(@Args('input') input: TVSeriesInput) {
    return this.tvSeriesService.create(input);
  }
}
