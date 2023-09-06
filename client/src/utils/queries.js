import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
     username
     email
     userIcon
     figures{
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
`;
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
