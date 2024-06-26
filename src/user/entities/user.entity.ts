import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id?: number;

  @Field()
  name: string;

  @Field()
  status: string;
}

@ObjectType()
export class CreateUser {
  @Field()
  message: string;
}
