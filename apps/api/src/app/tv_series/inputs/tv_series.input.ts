import { InputType, Field, Int, Float } from "@nestjs/graphql";

@InputType()
export class TVSeriesInput {
  @Field()
  readonly title: string;
  @Field(() => Int)
  readonly runtime: number;
  @Field(() => Float)
  readonly rating: number;
}
