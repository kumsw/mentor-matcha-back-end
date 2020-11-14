const { query } = require("../index");
let { mentors } = require("../collection");
async function populateMentors() {
  mentors.map(async function (value) {
    let res = await query(
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
    console.log(res);
  });
}
populateMentors();
