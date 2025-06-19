/**
 * A client for a public API providing information about countries.
 * Documentation available here: https://restcountries.com/
 */

/**
 * Axios is used as HTTP client
 * https://www.npmjs.com/package/axios
 */
import axios from "axios";

/**
 * Typing for data returned by endpoints of https://restcountries.com/
 * This is a partial, work in progress, implementation of said typing.
 */
interface Country {
  cca2: string; // 2-letter code https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
  name: {
    common: string; // Common name of the country
  };
}

export default class Countries {
  private restApi = axios.create({
    baseURL: "https://restcountries.com/v3.1",
  });

  /**
   * Example of how to query the rest API.
   * @param name Country name to search for
   * @returns List of countries matching searched term
   */
  public async searchByName(name: string) {
    const { data } = await this.restApi.get<Country[]>(
      `/name/${encodeURIComponent(name)}`
    );

    return data;
  }

  /**
   * Example of how to query the rest API.
   * @param cca2 2-letter country code to search for
   * @returns Country matching searched term
   */
  public async searchByCode(cca2: string) {
    // Handle the case where cca2 is not provided or is an empty string
    if (!cca2 || cca2.trim() === "") {
      return null; // Return an empty array if no code is provided
    }
    try {
      const { data } = await this.restApi.get<Country>(
        `/alpha/${encodeURIComponent(cca2)}`
      );
      return data[0];
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        return null; // Not found
      }
      throw error; // Unexpected errors are thrown
    } 
  }

}
