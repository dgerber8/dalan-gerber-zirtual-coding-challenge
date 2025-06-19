import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Author {
    id: ID!
    givenName: String!
    familyName: String!
    displayName: String!
    countryCode: String
    country: String
  }

  type Query {
    getAuthors: [Author!]!
  }
`;