import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $userIcon: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      userIcon: $userIcon
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FIGURE = gql`
  mutation addFigure($figureId: ID!) {
    addFigure(figureId: $figureId) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_FIGURE = gql`
  mutation removeFigure($figureId: ID!) {
    removeFigure(figureId: $figureId) {
      token
      user {
        _id
        username
        figures {
          _id
          name
          saga
          year
          releaseType
          isEventExclsive
          image
        }
      }
    }
  }
`;
