import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ProjectResolver } from './project/project.resolver';
import { ProjectModule } from './project/project.module';
import { UserResolver } from './user/user.resolver';
import { UserModule } from './user/user.module';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    ProjectModule,
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,

      // to generate schema from @ObjectType() class
      autoSchemaFile: true,
    }),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
  ],
  exports: [ProjectResolver, UserResolver],
  providers: [ProjectResolver, UserResolver],
})
export class AppModule {}
