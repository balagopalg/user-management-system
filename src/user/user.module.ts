import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,

      // to generate schema from @ObjectType() class
      autoSchemaFile: true,
    }),
  ],
  exports: [UserResolver, UserService],
  providers: [UserResolver, UserService],
})
export class UserModule {}
