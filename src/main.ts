import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { logger } from 'utils/winston';

async function bootstrap() {
  logger.info('Starting the server');
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, '0.0.0.0', () => {
    logger.info('GraphQL Server started on: http://localhost:3000/graphql');
  });
}
bootstrap();
