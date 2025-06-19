/**
 * Basic Apollo Server configuration
 * Check out https://www.apollographql.com/docs/apollo-server/getting-started/ for more info
 */

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
/**
 * Our GraphQL API definitions and resolvers
 */
import { typeDefs } from "./schema";
import Query from "./resolvers/Query";
import Author from "./resolvers/Author";

import { Context } from "./types";

/**
 * Initialize database
 */
import db from "./db";

async function startApolloServer() {
  const server = new ApolloServer<Context>({
    typeDefs,
    resolvers: {
      Query: Query,
      Author: Author,
    },
  });

  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => {
      return {
        userAgent: req.headers["user-agent"],
        db,
      };
    },
  });

  console.log(`🚀  Server ready at ${url}`);
}

startApolloServer();