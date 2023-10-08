const mariadb = require("mariadb");
const pool = mariadb.createPool({
  host: "154.12.166.82",
  user: "glowhosttestdbuser",
  password: "FoDbE;(Mn3+m",
  database: "ricelove_glowhosttest",
  connectionLimit: 5
});

async function connect() {
  let connection;
  try {
    connection = await pool.getConnection();
    const users = await connection.query("SELECT * FROM users");
    console.log(`USERS: ${users}`);
  } catch (err) {
    console.log(err);
  } finally {
    if (connection) {
      connection.end();
    }
  }
}

module.exports = {
  connect: connect
}