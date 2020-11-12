const { query } = require("../index");

let { mentees } = require("../collection");

 async function populateMentees() {
   const sql = `INSERT INTO menteeTable (name, age, ethnicity, myersBriggs)
     VALUES ($1, $2, $3, $4)`;
   mentees.map(async function (value) {
     let res = await query(sql, [
       value.name,
       value.age,
       value.ethnicity,
       value.myersBriggs,
     ]);
     console.log(res);
   });
 }
 populateMentees();