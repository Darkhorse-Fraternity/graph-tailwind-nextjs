import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Movie {
    title: String!
    tagline: String
    actors: [Person!]! @relationship(type: "ACTED_IN", direction: IN)
  }

  type Person {
    name: String!
    movies: [Movie!]! @relationship(type: "ACTED_IN", direction: OUT)
  }
`
