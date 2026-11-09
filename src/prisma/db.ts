import 'dotenv/config';
import postgres from '@prisma/orm-postgres/runtime';
import { contractFromJson } from '@prisma/orm-postgres/static';
import type { Contract } from './contract.d';
import contractJson from './contract.json' with { type: 'json' };

export const contract = contractFromJson<Contract>(contractJson);

const dbUrl = process.env['ENV'] === 'production' ? process.env['DB_PROD_URL'] : process.env['DB_DEV_URL'];

export const db = postgres({
  contract,
  url: process.env[`${dbUrl}`]!,
});
