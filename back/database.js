import pg from "pg";

const {Pool} = pg;
const connection = new Pool({
    connectionString: process.env.DATABASE_URL,
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgres", 
    database: "boardcamp"
  });

  export default connection;