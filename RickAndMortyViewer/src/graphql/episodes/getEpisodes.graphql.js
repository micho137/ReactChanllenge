import { gql } from "@apollo/client";

function GET_EPISODES(page) {
  return gql`
  {
    episodes(page:${page}) {
      info{
        count
        pages
      }
      results {
        id
        name
        episode
        air_date
      }
    }
  }
`;
}

export default GET_EPISODES;
