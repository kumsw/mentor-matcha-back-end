const { query } = require(`../index`);

//Drop tables
// async function dropMentees() {
//   const res = await query(`
//     DROP TABLE menteeTable;
//     `);
//   console.log(res);
// }
// dropMentees();

async function dropMentors() {
  const res = await query(`
    DROP TABLE mentorTable;
    `);
  console.log(res);
}
dropMentors();

//Delete rows
// async function dropMentees() {
//   const res = await query(`
//       DELETE FROM menteeTable;
//       `);
//   console.log(res);
// }
// deleteRowsMentees();

// async function dropMentors() {
//   const res = await query(`
//   DELETE FROM mentorTable;
//       `);
//   console.log(res);
// }
// deleteRowsMentors();
