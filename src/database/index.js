import { Client } from "pg";

const database = new Client({
  user: "usuario",
  host: "localhost",
  database: "primeira_interacao_db",
  password: "1234",
  port: 5432,
});

export const startDatabase = async () => {
  await database.connect();
};

export default database;
