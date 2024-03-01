import { NestFactory } from '@nestjs/core';
import { logger } from 'utils/winston';
import { AppModule } from './app.module';

async function bootstrap() {
  logger.info('Starting the server');
  const app = await NestFactory.create(AppModule);

  // Add headers here
  app.use((req, res, next) => {
    res.setHeader('content-type', 'application/json');
    next();
  });

  await app.listen(3000, '0.0.0.0', () => {
    logger.info('GraphQL Server started on: http://localhost:3000/graphql');
  });
}
bootstrap();
