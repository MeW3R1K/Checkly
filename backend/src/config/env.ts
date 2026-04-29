import dotenv from "dotenv";

dotenv.config();

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: Number(process.env.PORT ?? 4000),
  databaseUrl: process.env.DATABASE_URL ?? "postgres://checkly:checkly_password@localhost:5432/checkly",
  jwtSecret: process.env.JWT_SECRET ?? "change_me_in_real_environment"
};
