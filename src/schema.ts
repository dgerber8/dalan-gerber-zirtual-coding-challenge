import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Author {
    id: ID!
    givenName: String!
    familyName: String!
  }

  type Query {
    getAuthors: [Author!]!
  }
`;