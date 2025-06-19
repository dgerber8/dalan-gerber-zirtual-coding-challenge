import { Context } from "../types";

const Query = {
    
  getAuthors: async (parent, args, context: Context) => {
    return await context.db.listAuthors();
  },
  getAuthorById: async (parent, args, context: Context) => {
    const author = await context.db.getAuthorById(args.id);
    // If the author is not found, we return null
    return author ?? null;
  }
}

export { Query as default }