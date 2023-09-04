import { gql } from '@apollo/client';

export const GET_FIGURES = gql`
  query figures {
    figures {
      name
      saga
      saga
      releaseType
      isEventExclsive
      image
    }
  }
`;
