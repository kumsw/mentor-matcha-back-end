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
            interests TEXT,
            gpic TEXT,
            gid TEXT,
            gname TEXT,
            gtime TEXT,
            gemail TEXT

        )
    `);
  console.log(res);
}

createMentorTable();
