import { Context } from "../types";

const Author = {
  displayName: (author: any) => {
    // author will have givenName and familyName from DB
    return `${author.givenName} ${author.familyName}`;
  },
}

export {Author as default}