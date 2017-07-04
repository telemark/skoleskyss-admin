'use strict'

const handlers = require('../handlers')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: handlers.getFrontpage,
    config: {
      description: 'Show the frontpage'
    }
  },
  {
    method: 'GET',
    path: '/logs',
    handler: handlers.getLogspage,
    config: {
      description: 'Show the logspage'
    }
  }
]
