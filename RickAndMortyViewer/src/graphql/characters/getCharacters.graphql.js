import { gql } from "@apollo/client";

function GET_CHARACTERS(page){
  return gql`
  query {
    characters(page:${page}) {
      info {
        pages
      }
      results {
        id
        name
        image
        status
        species
        location{
          name
        }
      }
    }
  }
`
} 
export default GET_CHARACTERS;
