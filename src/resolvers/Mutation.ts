import { Context } from "../types";

const Mutation = {
  createAuthor: async (parent, args, context: Context) => {
    const newAuthor = await context.db.createAuthor(args.input);
    return newAuthor;
  },
  updateAuthor: async (parent, args, context: Context) => {
    const updatedAuthor = await context.db.updateAuthor(args.id, args.input);
    return updatedAuthor;
  },
};

export { Mutation as default };