import mysql from 'mysql2/promise';

const connPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'isik2022',
  database: 'gestion_recettes',
  connectionLimit: 2,
  connectTimeout: false,
});

async function testConnection() {
  try {
    const connection = await connPool.getConnection();
    console.log("CONNECTED");
    connection.release();
  } catch (err) {
    console.error("CONNECTION ERROR: ", err);
  }
}

testConnection();

export default connPool;
