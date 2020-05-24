import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class TVSeriesType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly title: string;
  @Field(() => Int)
  readonly runtime: number;
  @Field(() => Float)
  readonly rating: number;
}
