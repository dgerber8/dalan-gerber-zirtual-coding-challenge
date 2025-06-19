import { Context } from "../types";
import Countries from "../lib/Countries"

const countriesClient = new Countries();

const Author = {
  displayName: (author: any) => {
    // author will have givenName and familyName from DB
    return `${author.givenName} ${author.familyName}`;
  },
  country: async (author: any) => {
    const country = await countriesClient.searchByCode(author.countryCode);
    
    return country?.name.common ?? null;
  }
}

export {Author as default}