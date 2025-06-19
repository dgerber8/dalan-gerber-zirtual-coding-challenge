/**
 * Database client
 * It's essentially a wrapper around Knex https://knexjs.org/
 */

import initKnex, { Knex } from "knex";

import config from "./config";
import type { Author } from "./types";

export * from "./types";

export class Db {
  private knex: Knex;

  constructor() {
    this.knex = initKnex(config.development);
  }
  
  public listAuthors(limit = 50, offset = 0) {
    return this.knex.table<Author>("authors").select("*").limit(limit).offset(offset);
  }

  public async countAuthors() {
    const result = await this.knex("authors").count("id as count");
    const count = (result[0] as { count: string | number }).count;
    return Number(count);
  }

  public getAuthorById(id: number) {
    return this.knex.table<Author>("authors").where("id", id).first();
  }
  
  public async createAuthor(author: Omit<Author, "id">) {
    const [id] = await this.knex.table<Author>("authors").insert(author);
    return this.getAuthorById(id);
  }

  public async updateAuthor(id: number, author: Omit<Author, "id">) {
    await this.knex.table<Author>("authors").where({ id }).update(author);
    return this.getAuthorById(id);
  }
}

export default new Db();
