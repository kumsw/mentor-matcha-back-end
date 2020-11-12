const { query } = require("../index");

async function createMenteeTable() {
  let res = await query(`
        CREATE TABLE menteeTable (
            id SERIAL PRIMARY KEY,
            firstName TEXT,
            lastName TEXT,
            introduction TEXT,
            myersBriggs TEXT,
            industry TEXT,
            interests TEXT
        )
    `);
  console.log(res);
}

createMenteeTable();
