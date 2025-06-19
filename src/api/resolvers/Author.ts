import { Context } from "../../types";
import Countries from "../../lib/Countries"

const FAMILY_FIRST_COUNTRIES = ["JP"]

const countriesClient = new Countries();

const Author = {
  displayName: (author: any) => {
    // If the country is in FAMILY_FIRST_COUNTRIES, we display family name first
    if (FAMILY_FIRST_COUNTRIES.includes(author.countryCode)) {
      return `${author.familyName} ${author.givenName}`;
    }
    // Otherwise, we display given name first
    return `${author.givenName} ${author.familyName}`;
  },
  country: async (author: any) => {
    const country = await countriesClient.searchByCode(author.countryCode);
    
    // If the country is not found, we return null
    return country?.name.common ?? null;
  }
}

export { Author as default }