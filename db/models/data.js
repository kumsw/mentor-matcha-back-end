const { query } = require("../index");


async function getAllMentor() {
  const res = await query(`
    SELECT * FROM mentorTable;
    `);
  return res.rows;
}
async function getAllMentee() {
  const res = await query(`
    SELECT * FROM menteeTable;
    `);
  return res.rows;
}

async function matchMyersBriggs() {
  const res = await query(
    `
  SELECT *
  FROM mentorTable INNER JOIN menteeTable 
  ON mentorTable.myersBriggs=menteeTable.myersBriggs
  `
  );
  return res.rows;
}
// function to match the bootcamper to mentor(s) on Myers briggs
// write a search funtion which will use req.query
async function bootcamperMatch(userInput) {
  const res = await query(`
  SELECT Name, Myersbriggs
  FROM mentorTable
  WHERE mentorTable.myersbriggs LIKE '${userInput}'
  `);
  return res.rows;
}

//Test for Zaid
async function testing(value) {
  const res = await query(
    `INSERT INTO mentorTable (name)
        values ($1)`,
    [value]
  );
  return res; //why res.rows?
}
//--------Test end---------//

async function insertIntoMentor(value) {
  const res = await query(
    `
    INSERT INTO mentorTable (name, age, ethnicity, myersBriggs, experience)
    VALUES ($1, $2, $3, $4, $5)
    `,
    [
      value.name,
      value.age,
      value.ethnicity,
      value.myersBriggs,
      value.experience,
    ]
  );
  return res;
}

async function insertIntoMentee(value) {
  const res = await query(
    `
    INSERT INTO menteeTable (name, age, ethnicity, myersBriggs)
    VALUES ($1, $2, $3, $4)
    `,
    [value.name, value.age, value.ethnicity, value.myersBriggs]
  );
  return res;
}

module.exports = {
  getAllMentor,
  getAllMentee,
  matchMyersBriggs,
  insertIntoMentor,
  insertIntoMentee,
  bootcamperMatch,
  testing,
};
