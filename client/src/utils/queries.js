import { gql } from '@apollo/client';

export const GET_FIGURES = gql`
  query figures {
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
`;
