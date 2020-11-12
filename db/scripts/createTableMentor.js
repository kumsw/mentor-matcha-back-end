const { query } = require("../index");

async function createMentorTable() {
  let res = await query(`
        CREATE TABLE mentorTable (
            id SERIAL PRIMARY KEY,
            firstName TEXT,
            lastName TEXT,
            introduction TEXT,
            languages TEXT,
            myersBriggs TEXT,
            industry TEXT,
            interests TEXT
        )
    `);
  console.log(res);
}

createMentorTable();
