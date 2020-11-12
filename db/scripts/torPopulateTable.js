const { query } = require("../index");

let { mentors } = require("../collection");
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