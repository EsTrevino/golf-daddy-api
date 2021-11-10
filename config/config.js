module.exports = {
  dbConfig: {
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  },
  dbOptions: {
    dialect: process.env.DB_DIALECT
  }
};
