const { query } = require(`../index`);

 async function dropMentees() {
   const res = await query(`
     DROP TABLE menteeTable;
     `);
   console.log(res);
 }
 dropMentees();

async function dropMentors() {
  const res = await query(`
    DROP TABLE mentorTable;
    `);
  console.log(res);
}
dropMentors();