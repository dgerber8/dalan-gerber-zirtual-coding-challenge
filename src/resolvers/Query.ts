import { Context } from "../types";

const Query = {
    
  getAuthors: async (parent, args, context: Context) => {
    const { limit = 50, offset = 0 } = args;
    const items = await context.db.listAuthors(limit, offset);
    const count = await context.db.countAuthors();
    return {
      items,
      limit,
      offset,
      totalCount: Number(count),
    };
  },
  getAuthorById: async (parent, args, context: Context) => {
    const author = await context.db.getAuthorById(args.id);
    // If the author is not found, we return null
    return author ?? null;
  }
}

export { Query as default }