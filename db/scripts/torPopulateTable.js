const { query } = require("../index");

let { mentors } = require("../collection");
async function populateMentors() {
  mentors.map(async function (value) {
    let res = await query(
      `
            INSERT INTO mentorTable (firstName,
              lastName,
              introduction,
              languages,
              myersBriggs,
              industry,
              interests)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
        `,
      [
        value.firstName,
        value.lastName,
        value.introduction,
        value.languages,
        value.myersBriggs,
        value.industry,
        value.interests,
      ]
    );
    console.log(res);
  });
}
populateMentors();
