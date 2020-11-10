const { query } = require("../index");

async function getAllData() {
  const res = await query(`
    SELECT * FROM menteeTable INNERJOIN mentorTable;
    `);
  return res.rows;
}

async function matchMyersBriggs() {
  const res = await query(`
    Select name, myersBriggs FROM  menteeTable INNER JOIN mentorTable WHERE 
    `);
}

async function insertIntoMentor(value) {
  const res = await query(
    `
    INSERT INTO mentorTable (name, age, ethnicity, myersBriggs, experience)
    VALUES ($1, $2, $3, $4, $5)
    `,
    [
      value.name,
      value.age,
      value,
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
    [value]
  );
  return res;
}

module.exports = {
  getAllData,
  matchMyersBriggs,
  insertIntoMentor,
  insertIntoMentee,
};
