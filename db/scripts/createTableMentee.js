const { query } = require("../index");

async function createMenteeTable() {
  let res = await query(`
        CREATE TABLE menteeTable (
            id SERIAL PRIMARY KEY,
            name TEXT,
            age INTEGER,
            ethnicity TEXT,
            myersBriggs TEXT
        )
    `);
  console.log(res);
}

createMenteeTable();
