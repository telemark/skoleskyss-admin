if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
module.exports = {
  WEB_SERVER_PORT: process.env.WEB_SERVER_PORT || 8000,
  ORIGIN_URL: process.env.ORIGIN_URL || 'http://localhost:8000/signin',
  COOKIE_SECRET: process.env.COOKIE_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  ENCRYPTOR_SECRET: process.env.ENCRYPTOR_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  JWT_SECRET: process.env.JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  YAR_SECRET: process.env.YAR_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  AUTH_SERVICE_URL: process.env.AUTH_SERVICE_URL || 'https://auth.ldap.tjeneste.win',
  LOGS_SERVICE_URL: process.env.LOGS_SERVICE_URL || 'https://logs.skoleskyss.win',
  USER_SERVICE_URL: process.env.USER_SERVICE_URL || 'https://auth.demo.t-fk.win/lookup',
  ACCESS_GROUP: process.env.ACCESS_GROUP || 'TFK-TG-SkoleskyssAdmin',
  PAPERTRAIL_HOSTNAME: process.env.PAPERTRAIL_HOSTNAME || 'skoleskyss-dev',
  PAPERTRAIL_HOST: process.env.PAPERTRAIL_HOST || 'logs.papertrailapp.com',
  PAPERTRAIL_PORT: process.env.PAPERTRAIL_PORT || 12345
}
