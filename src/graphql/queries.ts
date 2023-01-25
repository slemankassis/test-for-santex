import { gql } from '@apollo/client';

export const getAllProductsQuery = gql`
  query getAllProducts {
    products {
      items {
        name
        id
        description
        assets {
          name
          source
          width
          height
        }
        featuredAsset {
          name
          source
          width
          height
        }
        variants {
          id
          name
          price
          stockLevel
          options {
            id
            groupId
            name
          }
        }
        optionGroups {
          id
          name
          options {
            id
            name
          }
        }
      }
    }
  }
`;
