import { gql } from "@apollo/client";

function GET_EPISODES_BY_ID(id) {
  return gql`
    {
      episode(id: ${id}) {
        id
        name
        episode
        characters {
          id
          name
          image
          status
          species
        }
        created
        air_date
      }
    }
  `;
}

export default GET_EPISODES_BY_ID;
