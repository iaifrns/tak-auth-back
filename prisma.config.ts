import 'dotenv/config';
import { definePrismaConfig } from '@prisma/cli-engine';
import { defineConfig as ormConfig } from '@prisma/orm-postgres/config';

const dbUrl = process.env['ENV'] === 'production' ? 'DB_PROD_URL' : 'DB_DEV_URL';

export default definePrismaConfig({
  orm: ormConfig({
    contract: "./src/prisma/contract.prisma",
    db: {
      connection: process.env[`${dbUrl}`]!,
    },
  }),
});
