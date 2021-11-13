module.exports = {
  dbConfig: {
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: '5432'
  },
  dbOptions: {
    dialect: process.env.DB_DIALECT
  }
};
