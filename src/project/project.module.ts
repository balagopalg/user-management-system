import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ProjectResolver } from './project.resolver';
import { ProjectService } from './project.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,

      // to generate schema from @ObjectType() class
      autoSchemaFile: true,
    }),
  ],
  exports: [ProjectResolver, ProjectService],
  providers: [ProjectResolver, ProjectService],
})
export class ProjectModule {}
