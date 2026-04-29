import type { FastifyInstance } from "fastify";
import { pool } from "../db/pool.js";

export async function healthRoutes(app: FastifyInstance) {
  app.get("/health", async () => {
    const dbResult = await pool.query("SELECT 1 AS ok");

    return {
      status: "ok",
      database: dbResult.rows[0]?.ok === 1 ? "ok" : "unknown",
      service: "backend"
    };
  });
}
