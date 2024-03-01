import * as winston from 'winston';
const { combine } = winston.format;
export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: combine(winston.format.colorize(), winston.format.simple()),
    }),
  ],
  level: 'info',
  silent: false,
  exitOnError: false,
});
global.logger = logger;
