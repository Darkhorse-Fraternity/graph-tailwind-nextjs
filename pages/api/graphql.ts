import { ApolloServer } from 'apollo-server-micro'
import { Neo4jGraphQL } from '@neo4j/graphql'
import neo4j from 'neo4j-driver'
import { NextApiRequest, NextApiResponse } from 'next'
import { typeDefs } from 'graphQL/type-definition'

const driver = neo4j.driver(
  process.env.NEO4J_URI ?? '',
  neo4j.auth.basic(
    process.env.NEO4J_USER ?? '',
    process.env.NEO4J_PASSWORD ?? ''
  )
)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  const neoSchema = new Neo4jGraphQL({ typeDefs, driver })
  const apolloServer = new ApolloServer({ schema: await neoSchema.getSchema() })
  await apolloServer.start()
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}
