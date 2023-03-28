import { gql } from "@apollo/client";

function GET_CHARACTERS_BY_ID(id) {
  return gql`
    query {
      character(id: ${id}) {
        id
        name
        status
        species
        gender
        type
        origin {
          name
          dimension
        }
        location {
          name
          type
        }
        image
      }
    }
  `;
}

export default GET_CHARACTERS_BY_ID;
