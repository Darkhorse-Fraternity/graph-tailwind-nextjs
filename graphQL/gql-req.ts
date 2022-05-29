import request from 'graphql-request'

const GRAGHQL_BACKEND_URL = process.env.GRAGHQL_BACKEND_URL ?? ''

export function gqlReq<TData, TVariables>(
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    return request(GRAGHQL_BACKEND_URL, query, variables)
  }
}
