const { query } = require(`../index`);

async function deleteRowsMentees() {
       const res = await query(`
           DELETE FROM menteeTable;
           `);
       console.log(res);
     }
     deleteRowsMentees();
    
     