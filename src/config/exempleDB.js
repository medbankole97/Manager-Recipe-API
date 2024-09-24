import mysql from 'mysql2/promise'

const connPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "isik2022",
    database: "gestion_recettes",
    waitForConnections: true,
    connectionLimit: 100,
    connectTimeout: 100000,
  });

  connPool.getConnection().then(() => {
      console.log("CONNECTED");
  });

export { connPool }