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

createMenteeTable();
