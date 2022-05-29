import { gql } from 'graphql-request'

gql`
  query findMovies {
    movies {
      title
      tagline
      actors {
        name
      }
    }
  }
`
