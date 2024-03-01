import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Module {
  @Field(() => Int)
  id?: number;

  @Field(() => String)
  createdAt: Date;

  @Field(() => String)
  updatedAt: Date;

  @Field(() => String, {
    nullable: false,
  })
  name: string;

  @Field(() => String, {
    nullable: true,
  })
  description: string;

  @Field(() => String, {
    nullable: true,
  })
  status: string;
}
