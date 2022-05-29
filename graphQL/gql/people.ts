import { gql } from 'graphql-request'

gql`
  query findPeople {
    people {
      name
      movies {
        title
      }
    }
  }
`
