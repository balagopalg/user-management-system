import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ProjectResolver } from './project/project.resolver';
import { ProjectModule } from './project/project.module';
import { UserResolver } from './user/user.resolver';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ProjectModule,
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,

      // to generate schema from @ObjectType() class
      autoSchemaFile: true,
    }),
  ],
  exports: [ProjectResolver, UserResolver],
  providers: [ProjectResolver, UserResolver],
})
export class AppModule {}
