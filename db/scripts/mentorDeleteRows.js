const { query } = require(`../index`);

async function deleteRowsMentors() {
  const res = await query(`
  DELETE FROM mentorTable;
      `);
  console.log(res);
}
deleteRowsMentors();