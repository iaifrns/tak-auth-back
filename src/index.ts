import express from "express";
import { db } from "./prisma/db";

const app = express();

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await db.connect();
    const plan = db.raw.sql`SELECT 1 AS result`
      .returnsRow({ result: "pg/int4@1" })
      .build();

    const raw = await db.query(plan);

    console.log("Database connection test result:", raw);

    console.log("Database connected successfully!");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    db.close();
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
