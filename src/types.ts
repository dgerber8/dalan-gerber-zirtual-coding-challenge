import type { Db } from "./db";

export type Context = {
  userAgent?: string;
  db: Db;
};