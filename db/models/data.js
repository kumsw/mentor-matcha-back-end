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
  SELECT *
  FROM mentorTable
  WHERE myersbriggs LIKE '${userInput}'
  `);
  return res.rows;
}

async function insertIntoMentor(value) {
  const res = await query(
    `
    INSERT INTO mentorTable (
      firstName,
      lastName,
      introduction,
      languages,
      myersBriggs,
      industry,
      interests,
      gpic,
      gid,
      gname,
      gtime,
      gemail
      )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    `,
    [
      value.firstName,
      value.lastName,
      value.introduction,
      value.languages,
      value.myersBriggs,
      value.industry,
      value.interests,
      value.gpic,
      value.gid,
      value.gname,
      value.gtime,
      value.gemail,
    ]
  );
  return res;
}

async function insertIntoMentee(value) {
  const res = await query(
    `
    INSERT INTO menteeTable (
      firstName ,
      lastName ,
      introduction ,
      myersBriggs ,
      industry ,
      interests ,
      gpic,
      gid,
      gname,
      gtime,
      gemail
      )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    `,
    [
      value.firstName,
      value.lastName,
      value.introduction,
      value.myersBriggs,
      value.industry,
      value.interests,
      value.gpic,
      value.gid,
      value.gname,
      value.gtime,
      value.gemail,
    ]
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
};
