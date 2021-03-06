import * as dotenv from "dotenv";

dotenv.config();

export default {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  logging: process.env.DB_LOGGING,
  syncronize: process.env.DB_SYNCHRONIZE,
};
