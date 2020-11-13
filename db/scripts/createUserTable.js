const { query } = require("../index");

async function createUserTable() {
  let res = await query(`
        CREATE TABLE userTable (
            id SERIAL PRIMARY KEY,
            name TEXT,
            email TEXT,
            timeStampt TEXT,
            signInId UNIQUE_CHECK_EXISTING TEXT,
            Image TEXT,
            link TEXT,
            gpic TEXT,
            gid TEXT,
            gname TEXT,
            gtime TEXT
        )
    `);
  console.log(res);
}

createUserTable();
