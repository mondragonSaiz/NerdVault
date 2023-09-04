const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    userIcon: String
    figures: [Figure]
  }

  type Figure {
    _id: ID
    name: String
    saga: String
    year: String
    releaseType: String
    isEventExclsive: Boolean
    image: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    figures: [Figure]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      username: String!
      email: String!
      password: String!
      userIcon: String!
    ): Auth
    addFigure(figureId: ID!): Auth
  }
`;

module.exports = typeDefs;
