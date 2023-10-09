const mariadb = require("mariadb");
const pool = mariadb.createPool({
  host: "quebec.gendns.com",
  user: "ricelove_glowhosttestdbuser",
  password: "FoDbE;(Mn3+m",
  // database: "ricelove_glowhosttest",
  connectionLimit: 5
});

async function query(queryString) {
  let connection;
  try {
    connection = await pool.getConnection();
    const result = await connection.query(queryString);
    return result;
  } catch (err) {
    throw(err);
  } finally {
    if (connection) {
      connection.end();
    }
  }
}

module.exports = {
  query: query
}