const text = `
CREATE TABLE IF NOT EXISTS USERS (
  id UUID PRIMARY KEY, 
  email VARCHAR UNIQUE NOT NULL,
  password VARCHAR NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );
`;

const createUserTable = dbClient => {
  console.log("starting user table create");
  return dbClient
    .query(text)
    .then(result => console.log(result))
    .catch(err => console.log(err))
    .finally(() => {
      dbClient.end();
    });
};

module.exports = {
  createUserTable
};
