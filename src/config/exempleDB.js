import mysql from 'mysql2/promise'

const connPool = mysql.createPool({
    host: "localhost",
    user: "user",
    password: "password",
    database: "database_name",
    waitForConnections: true,
    connectionLimit: 100,
    connectTimeout: 100000,
  });

  connPool.getConnection().then(() => {
      console.log("CONNECTED");
  });

export { connPool }