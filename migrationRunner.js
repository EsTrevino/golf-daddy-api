const { db, createUserTable } = require("./migrations");

(async () => {
  try {
    await db.connect();
    await createUserTable(db);
  } catch (e) {
    console.log(e);
  }
})();
