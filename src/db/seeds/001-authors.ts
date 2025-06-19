/**
 * Initial seed data inserted in DB
 */

import type { Knex } from "knex";

export async function seed(knex: Knex) {
  await knex("authors").delete();

  await knex("authors").insert([
    {
      givenName: "Joan",
      familyName: "Didion",
      countryCode: "US",
      pronouns: "she/her/her",
    },
    {
      givenName: "Paul",
      familyName: "Beatty",
      countryCode: "US",
      pronouns: "he/him/his",
    },
    {
      givenName: "Émile",
      familyName: "Zola",
      countryCode: "FR",
      pronouns: "he/him/his",
    },
    {
      givenName: "Haruki",
      familyName: "Murakami",
      countryCode: "JP",
      pronouns: "he/him/his",
    },
    {
      givenName: "Virginia",
      familyName: "Woolf",
      countryCode: "GB",
      pronouns: "she/her/her",
    },
    {
      givenName: "Gabriel",
      familyName: "García Márquez",
      countryCode: "CO",
      pronouns: "he/him/his",
    },
    {
      givenName: "Fatou",
      familyName: "Diome",
      countryCode: "FR",
      pronouns: "she/her/her",
    },
    {
      givenName: "Thomas",
      familyName: "Mann",
      countryCode: "DE",
      pronouns: "he/him/his",
    },
    {
      givenName: "Chimamanda",
      familyName: "Adichie",
      countryCode: "NG",
      pronouns: "she/her/her",
    },
  ]);
}
