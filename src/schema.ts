import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Author {
    id: ID!
    givenName: String!
    familyName: String!
    displayName: String!
    countryCode: String
    country: String
    pronouns: String!
  }

  type Query {
    getAuthors(limit: Int = 50, offset: Int = 0): AuthorsPage!
    getAuthorById(id: ID!): Author
  }
  
  type AuthorsPage {
    items: [Author!]!
    limit: Int!
    offset: Int!
    totalCount: Int!
  }

  type Mutation {
    createAuthor(input: CreateAuthorInput!): Author!
    updateAuthor(id: ID!, input: UpdateAuthorInput!): Author!
  }

  input CreateAuthorInput {
    givenName: String!
    familyName: String!
    countryCode: String
    pronouns: String
  }

  input UpdateAuthorInput {
    givenName: String
    familyName: String
    countryCode: String
    pronouns: String
  }

`;