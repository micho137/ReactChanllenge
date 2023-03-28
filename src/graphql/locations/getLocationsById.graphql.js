import { gql } from "@apollo/client";

function GET_LOCATIONS_BY_ID(id) {
  return gql`
    query {
      location(id: ${id}) {
        id
        name
        type
        dimension
        residents {
          id
          name
          image
          status
          species
        }
      }
    }
  `;
}
export default GET_LOCATIONS_BY_ID;
