/**
 * Migration file to add a pronouns column to the `authors` table
 */

import type { Knex } from "knex";

export function up(knex: Knex) {
  return knex.schema.table("authors", (table) => {
    // Pronouns are represented as a string containing subject, object and possesive forms, e.g., "he/him/his"
    table.string("pronouns", 32).notNullable().defaultTo("they/them/their");
  });
}

export function down(knex: Knex) {
  return knex.schema.table("authors", (table) => {
    table.dropColumn("pronouns");
  });
}
