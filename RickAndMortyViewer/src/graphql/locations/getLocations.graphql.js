import { gql } from "@apollo/client";

function GET_LOCATIONS(page) {
 return gql`
    query {
      locations(page:${page}) {
        info {
          count
          pages
        }
        results {
          id
          name
          type
          dimension
          residents {
            id
          }
        }
      }
    }
  `;
}
export default GET_LOCATIONS;
