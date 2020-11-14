const { query } = require("../index");
let { mentees } = require("../collection");
async function populateMentees() {
  const sql = `INSERT INTO menteeTable (
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
  `;
  mentees.map(async function (value) {
    let res = await query(sql, [
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
    ]);
    console.log(res);
  });
}
populateMentees();
