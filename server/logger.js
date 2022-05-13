const { format, createLogger, transports } = require('winston');
var sentry = require('winston-sentry');
const { timestamp, combine, printf, errors } = format;
const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
  });
var winston = require('winston');
const env = process.env.NODE_ENV;
const logDir = 'logs';
const fs = require('fs');

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
 }

const now = new Date();
var Logger = winston.createLogger({
        format: combine(
    //   format.colorize(),
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      errors({ stack: true }),
      logFormat
    ),
transports: [

    new winston.transports.File({
        name: 'error-file',
        filename: './logs/exceptions.log',
        level: 'error',
        json: false
    }),
    new sentry({
            level: 'error',
            dsn: "https://7787d3090f8a4eeda3837781e55af88d@o1245576.ingest.sentry.io/6402831"
    }),

    new winston.transports.File({
        name: 'info-file',
        filename: './logs/info.log',
        level: 'info',
        json: false
    }),
    new sentry({
      level: 'info',
      dsn: "https://7787d3090f8a4eeda3837781e55af88d@o1245576.ingest.sentry.io/6402831"
}),

    new(require('winston-daily-rotate-file'))({
        filename: `${logDir}/-apimodules.log`,
        timestamp: now,
        datePattern: 'dd-MM-yyyy',
        prepend: true,
        json: false,
        level: env === 'development' ? 'verbose' : 'info'
    })
],
exitOnError: false
});

module.exports = Logger;
module.exports.stream = {
  write: function(message, encoding) {
    Logger.info(message);
    console.log('message=', message);
  }
};