import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id?: number;

  @Field(() => String)
  createdOn: Date;

  @Field(() => String)
  updatedAt: Date;

  @Field(() => String, {
    nullable: false,
  })
  name: string;

  @Field(() => String, {
    nullable: true,
  })
  status: string;
}
