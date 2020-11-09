const { query } = require("../index");

async function createMentorTable() {
  let res = await query(`
        CREATE TABLE mentorTable (
            id SERIAL PRIMARY KEY,
            name TEXT,
            age INTEGER,
            ethnicity TEXT,
            myersBriggs TEXT,
            experience TEXT
        )
    `);
  console.log(res);
}

createMentorTable();
