
export enum LogLevels {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  VERBOSE = 'verbose',
  DEBUG = 'debug',
}

export const myLevels = {

  levels: {
    error: 0,
    warn: 1,
    info: 2,
    verbose: 4,
    debug: 5,
  },

  colors: {
    error: 'red',
    warn: 'orange',
    info: 'green',
    verbose: 'cyan',
    debug: 'yellow',
  }
}