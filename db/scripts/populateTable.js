const { query } = require("../index");

let { mentees, mentors } = require("../collection");
// let mentees = myModule.mentees;
// let mentors = myModule.mentors;

console.log(mentors);

// async function populateMentees() {
//   const sql = `INSERT INTO menteeTable (name, age, ethnicity, myersBriggs)
//     VALUES ($1, $2, $3, $4)`;
//   mentees.map(async function (value) {
//     let res = await query(sql, [
//       value.name,
//       value.age,
//       value.ethnicity,
//       value.myersBriggs,
//     ]);
//     console.log(res);
//   });
// }
// populateMentees();

async function populateMentors() {
  mentors.map(async function (value) {
    let res = await query(
      `
            INSERT INTO mentorTable (name, age, ethnicity, myersBriggs, experience) VALUES ($1, $2, $3, $4, $5)
        `,
      [
        value.name,
        value.age,
        value.ethnicity,
        value.myersBriggs,
        value.experience,
      ]
    );
    console.log(res);
  });
}
populateMentors();
