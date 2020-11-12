const { query } = require("../index");

let { mentees } = require("../collection");

async function populateMentees() {
  const sql = `INSERT INTO menteeTable (firstName ,
    lastName ,
    introduction ,
    myersBriggs ,
    industry ,
    interests)
     VALUES ($1, $2, $3, $4, $5, $6)`;
  mentees.map(async function (value) {
    let res = await query(sql, [
      value.firstName,
      value.lastName,
      value.introduction,
      value.myersBriggs,
      value.industry,
      value.interests,
    ]);
    console.log(res);
  });
}
populateMentees();
