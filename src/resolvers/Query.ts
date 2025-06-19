import { Context } from "../types";

const Query = {
    
  getAuthors: async (parent, args, context: Context) => {
    return await context.db.listAuthors();
  },
}

export {Query as default}