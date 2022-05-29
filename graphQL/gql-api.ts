import { useQuery, UseQueryOptions } from 'react-query'
import { gqlReq } from 'graphQL/gql-req'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type CreateInfo = {
  __typename?: 'CreateInfo'
  bookmark?: Maybe<Scalars['String']>
  nodesCreated: Scalars['Int']
  relationshipsCreated: Scalars['Int']
}

export type CreateMoviesMutationResponse = {
  __typename?: 'CreateMoviesMutationResponse'
  info: CreateInfo
  movies: Array<Movie>
}

export type CreatePeopleMutationResponse = {
  __typename?: 'CreatePeopleMutationResponse'
  info: CreateInfo
  people: Array<Person>
}

export type DeleteInfo = {
  __typename?: 'DeleteInfo'
  bookmark?: Maybe<Scalars['String']>
  nodesDeleted: Scalars['Int']
  relationshipsDeleted: Scalars['Int']
}

export type Movie = {
  __typename?: 'Movie'
  actors: Array<Person>
  actorsAggregate?: Maybe<MoviePersonActorsAggregationSelection>
  actorsConnection: MovieActorsConnection
  tagline?: Maybe<Scalars['String']>
  title: Scalars['String']
}

export type MovieActorsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>
  options?: InputMaybe<PersonOptions>
  where?: InputMaybe<PersonWhere>
}

export type MovieActorsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>
  where?: InputMaybe<PersonWhere>
}

export type MovieActorsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  directed?: InputMaybe<Scalars['Boolean']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<MovieActorsConnectionSort>>
  where?: InputMaybe<MovieActorsConnectionWhere>
}

export type MovieActorsAggregateInput = {
  AND?: InputMaybe<Array<MovieActorsAggregateInput>>
  OR?: InputMaybe<Array<MovieActorsAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<MovieActorsNodeAggregationWhereInput>
}

export type MovieActorsConnectFieldInput = {
  connect?: InputMaybe<Array<PersonConnectInput>>
  where?: InputMaybe<PersonConnectWhere>
}

export type MovieActorsConnection = {
  __typename?: 'MovieActorsConnection'
  edges: Array<MovieActorsRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type MovieActorsConnectionSort = {
  node?: InputMaybe<PersonSort>
}

export type MovieActorsConnectionWhere = {
  AND?: InputMaybe<Array<MovieActorsConnectionWhere>>
  OR?: InputMaybe<Array<MovieActorsConnectionWhere>>
  node?: InputMaybe<PersonWhere>
  node_NOT?: InputMaybe<PersonWhere>
}

export type MovieActorsCreateFieldInput = {
  node: PersonCreateInput
}

export type MovieActorsDeleteFieldInput = {
  delete?: InputMaybe<PersonDeleteInput>
  where?: InputMaybe<MovieActorsConnectionWhere>
}

export type MovieActorsDisconnectFieldInput = {
  disconnect?: InputMaybe<PersonDisconnectInput>
  where?: InputMaybe<MovieActorsConnectionWhere>
}

export type MovieActorsFieldInput = {
  connect?: InputMaybe<Array<MovieActorsConnectFieldInput>>
  create?: InputMaybe<Array<MovieActorsCreateFieldInput>>
}

export type MovieActorsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MovieActorsNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<MovieActorsNodeAggregationWhereInput>>
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  name_EQUAL?: InputMaybe<Scalars['String']>
  name_GT?: InputMaybe<Scalars['Int']>
  name_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  name_LT?: InputMaybe<Scalars['Int']>
  name_LTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
}

export type MovieActorsRelationship = {
  __typename?: 'MovieActorsRelationship'
  cursor: Scalars['String']
  node: Person
}

export type MovieActorsUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>
}

export type MovieActorsUpdateFieldInput = {
  connect?: InputMaybe<Array<MovieActorsConnectFieldInput>>
  create?: InputMaybe<Array<MovieActorsCreateFieldInput>>
  delete?: InputMaybe<Array<MovieActorsDeleteFieldInput>>
  disconnect?: InputMaybe<Array<MovieActorsDisconnectFieldInput>>
  update?: InputMaybe<MovieActorsUpdateConnectionInput>
  where?: InputMaybe<MovieActorsConnectionWhere>
}

export type MovieAggregateSelection = {
  __typename?: 'MovieAggregateSelection'
  count: Scalars['Int']
  tagline: StringAggregateSelectionNullable
  title: StringAggregateSelectionNonNullable
}

export type MovieConnectInput = {
  actors?: InputMaybe<Array<MovieActorsConnectFieldInput>>
}

export type MovieConnectWhere = {
  node: MovieWhere
}

export type MovieCreateInput = {
  actors?: InputMaybe<MovieActorsFieldInput>
  tagline?: InputMaybe<Scalars['String']>
  title: Scalars['String']
}

export type MovieDeleteInput = {
  actors?: InputMaybe<Array<MovieActorsDeleteFieldInput>>
}

export type MovieDisconnectInput = {
  actors?: InputMaybe<Array<MovieActorsDisconnectFieldInput>>
}

export type MovieEdge = {
  __typename?: 'MovieEdge'
  cursor: Scalars['String']
  node: Movie
}

export type MovieOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more MovieSort objects to sort Movies by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MovieSort>>
}

export type MoviePersonActorsAggregationSelection = {
  __typename?: 'MoviePersonActorsAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<MoviePersonActorsNodeAggregateSelection>
}

export type MoviePersonActorsNodeAggregateSelection = {
  __typename?: 'MoviePersonActorsNodeAggregateSelection'
  name: StringAggregateSelectionNonNullable
}

export type MovieRelationInput = {
  actors?: InputMaybe<Array<MovieActorsCreateFieldInput>>
}

/** Fields to sort Movies by. The order in which sorts are applied is not guaranteed when specifying many fields in one MovieSort object. */
export type MovieSort = {
  tagline?: InputMaybe<SortDirection>
  title?: InputMaybe<SortDirection>
}

export type MovieUpdateInput = {
  actors?: InputMaybe<Array<MovieActorsUpdateFieldInput>>
  tagline?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type MovieWhere = {
  AND?: InputMaybe<Array<MovieWhere>>
  OR?: InputMaybe<Array<MovieWhere>>
  actorsAggregate?: InputMaybe<MovieActorsAggregateInput>
  actorsConnection_ALL?: InputMaybe<MovieActorsConnectionWhere>
  actorsConnection_NONE?: InputMaybe<MovieActorsConnectionWhere>
  actorsConnection_SINGLE?: InputMaybe<MovieActorsConnectionWhere>
  actorsConnection_SOME?: InputMaybe<MovieActorsConnectionWhere>
  /** Return Movies where all of the related People match this filter */
  actors_ALL?: InputMaybe<PersonWhere>
  /** Return Movies where none of the related People match this filter */
  actors_NONE?: InputMaybe<PersonWhere>
  /** Return Movies where one of the related People match this filter */
  actors_SINGLE?: InputMaybe<PersonWhere>
  /** Return Movies where some of the related People match this filter */
  actors_SOME?: InputMaybe<PersonWhere>
  tagline?: InputMaybe<Scalars['String']>
  tagline_CONTAINS?: InputMaybe<Scalars['String']>
  tagline_ENDS_WITH?: InputMaybe<Scalars['String']>
  tagline_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  tagline_NOT?: InputMaybe<Scalars['String']>
  tagline_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  tagline_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  tagline_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  tagline_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  tagline_STARTS_WITH?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  title_CONTAINS?: InputMaybe<Scalars['String']>
  title_ENDS_WITH?: InputMaybe<Scalars['String']>
  title_IN?: InputMaybe<Array<Scalars['String']>>
  title_NOT?: InputMaybe<Scalars['String']>
  title_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  title_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  title_NOT_IN?: InputMaybe<Array<Scalars['String']>>
  title_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  title_STARTS_WITH?: InputMaybe<Scalars['String']>
}

export type MoviesConnection = {
  __typename?: 'MoviesConnection'
  edges: Array<MovieEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type Mutation = {
  __typename?: 'Mutation'
  createMovies: CreateMoviesMutationResponse
  createPeople: CreatePeopleMutationResponse
  deleteMovies: DeleteInfo
  deletePeople: DeleteInfo
  updateMovies: UpdateMoviesMutationResponse
  updatePeople: UpdatePeopleMutationResponse
}

export type MutationCreateMoviesArgs = {
  input: Array<MovieCreateInput>
}

export type MutationCreatePeopleArgs = {
  input: Array<PersonCreateInput>
}

export type MutationDeleteMoviesArgs = {
  delete?: InputMaybe<MovieDeleteInput>
  where?: InputMaybe<MovieWhere>
}

export type MutationDeletePeopleArgs = {
  delete?: InputMaybe<PersonDeleteInput>
  where?: InputMaybe<PersonWhere>
}

export type MutationUpdateMoviesArgs = {
  connect?: InputMaybe<MovieConnectInput>
  create?: InputMaybe<MovieRelationInput>
  delete?: InputMaybe<MovieDeleteInput>
  disconnect?: InputMaybe<MovieDisconnectInput>
  update?: InputMaybe<MovieUpdateInput>
  where?: InputMaybe<MovieWhere>
}

export type MutationUpdatePeopleArgs = {
  connect?: InputMaybe<PersonConnectInput>
  create?: InputMaybe<PersonRelationInput>
  delete?: InputMaybe<PersonDeleteInput>
  disconnect?: InputMaybe<PersonDisconnectInput>
  update?: InputMaybe<PersonUpdateInput>
  where?: InputMaybe<PersonWhere>
}

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo'
  endCursor?: Maybe<Scalars['String']>
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor?: Maybe<Scalars['String']>
}

export type PeopleConnection = {
  __typename?: 'PeopleConnection'
  edges: Array<PersonEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type Person = {
  __typename?: 'Person'
  movies: Array<Movie>
  moviesAggregate?: Maybe<PersonMovieMoviesAggregationSelection>
  moviesConnection: PersonMoviesConnection
  name: Scalars['String']
}

export type PersonMoviesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>
  options?: InputMaybe<MovieOptions>
  where?: InputMaybe<MovieWhere>
}

export type PersonMoviesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>
  where?: InputMaybe<MovieWhere>
}

export type PersonMoviesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  directed?: InputMaybe<Scalars['Boolean']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<PersonMoviesConnectionSort>>
  where?: InputMaybe<PersonMoviesConnectionWhere>
}

export type PersonAggregateSelection = {
  __typename?: 'PersonAggregateSelection'
  count: Scalars['Int']
  name: StringAggregateSelectionNonNullable
}

export type PersonConnectInput = {
  movies?: InputMaybe<Array<PersonMoviesConnectFieldInput>>
}

export type PersonConnectWhere = {
  node: PersonWhere
}

export type PersonCreateInput = {
  movies?: InputMaybe<PersonMoviesFieldInput>
  name: Scalars['String']
}

export type PersonDeleteInput = {
  movies?: InputMaybe<Array<PersonMoviesDeleteFieldInput>>
}

export type PersonDisconnectInput = {
  movies?: InputMaybe<Array<PersonMoviesDisconnectFieldInput>>
}

export type PersonEdge = {
  __typename?: 'PersonEdge'
  cursor: Scalars['String']
  node: Person
}

export type PersonMovieMoviesAggregationSelection = {
  __typename?: 'PersonMovieMoviesAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<PersonMovieMoviesNodeAggregateSelection>
}

export type PersonMovieMoviesNodeAggregateSelection = {
  __typename?: 'PersonMovieMoviesNodeAggregateSelection'
  tagline: StringAggregateSelectionNullable
  title: StringAggregateSelectionNonNullable
}

export type PersonMoviesAggregateInput = {
  AND?: InputMaybe<Array<PersonMoviesAggregateInput>>
  OR?: InputMaybe<Array<PersonMoviesAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<PersonMoviesNodeAggregationWhereInput>
}

export type PersonMoviesConnectFieldInput = {
  connect?: InputMaybe<Array<MovieConnectInput>>
  where?: InputMaybe<MovieConnectWhere>
}

export type PersonMoviesConnection = {
  __typename?: 'PersonMoviesConnection'
  edges: Array<PersonMoviesRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type PersonMoviesConnectionSort = {
  node?: InputMaybe<MovieSort>
}

export type PersonMoviesConnectionWhere = {
  AND?: InputMaybe<Array<PersonMoviesConnectionWhere>>
  OR?: InputMaybe<Array<PersonMoviesConnectionWhere>>
  node?: InputMaybe<MovieWhere>
  node_NOT?: InputMaybe<MovieWhere>
}

export type PersonMoviesCreateFieldInput = {
  node: MovieCreateInput
}

export type PersonMoviesDeleteFieldInput = {
  delete?: InputMaybe<MovieDeleteInput>
  where?: InputMaybe<PersonMoviesConnectionWhere>
}

export type PersonMoviesDisconnectFieldInput = {
  disconnect?: InputMaybe<MovieDisconnectInput>
  where?: InputMaybe<PersonMoviesConnectionWhere>
}

export type PersonMoviesFieldInput = {
  connect?: InputMaybe<Array<PersonMoviesConnectFieldInput>>
  create?: InputMaybe<Array<PersonMoviesCreateFieldInput>>
}

export type PersonMoviesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonMoviesNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<PersonMoviesNodeAggregationWhereInput>>
  tagline_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  tagline_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  tagline_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  tagline_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  tagline_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  tagline_EQUAL?: InputMaybe<Scalars['String']>
  tagline_GT?: InputMaybe<Scalars['Int']>
  tagline_GTE?: InputMaybe<Scalars['Int']>
  tagline_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  tagline_LONGEST_GT?: InputMaybe<Scalars['Int']>
  tagline_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  tagline_LONGEST_LT?: InputMaybe<Scalars['Int']>
  tagline_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  tagline_LT?: InputMaybe<Scalars['Int']>
  tagline_LTE?: InputMaybe<Scalars['Int']>
  tagline_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  tagline_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  tagline_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  tagline_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  tagline_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  title_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  title_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  title_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  title_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  title_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  title_EQUAL?: InputMaybe<Scalars['String']>
  title_GT?: InputMaybe<Scalars['Int']>
  title_GTE?: InputMaybe<Scalars['Int']>
  title_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  title_LONGEST_GT?: InputMaybe<Scalars['Int']>
  title_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  title_LONGEST_LT?: InputMaybe<Scalars['Int']>
  title_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  title_LT?: InputMaybe<Scalars['Int']>
  title_LTE?: InputMaybe<Scalars['Int']>
  title_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  title_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  title_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  title_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  title_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
}

export type PersonMoviesRelationship = {
  __typename?: 'PersonMoviesRelationship'
  cursor: Scalars['String']
  node: Movie
}

export type PersonMoviesUpdateConnectionInput = {
  node?: InputMaybe<MovieUpdateInput>
}

export type PersonMoviesUpdateFieldInput = {
  connect?: InputMaybe<Array<PersonMoviesConnectFieldInput>>
  create?: InputMaybe<Array<PersonMoviesCreateFieldInput>>
  delete?: InputMaybe<Array<PersonMoviesDeleteFieldInput>>
  disconnect?: InputMaybe<Array<PersonMoviesDisconnectFieldInput>>
  update?: InputMaybe<PersonMoviesUpdateConnectionInput>
  where?: InputMaybe<PersonMoviesConnectionWhere>
}

export type PersonOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more PersonSort objects to sort People by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PersonSort>>
}

export type PersonRelationInput = {
  movies?: InputMaybe<Array<PersonMoviesCreateFieldInput>>
}

/** Fields to sort People by. The order in which sorts are applied is not guaranteed when specifying many fields in one PersonSort object. */
export type PersonSort = {
  name?: InputMaybe<SortDirection>
}

export type PersonUpdateInput = {
  movies?: InputMaybe<Array<PersonMoviesUpdateFieldInput>>
  name?: InputMaybe<Scalars['String']>
}

export type PersonWhere = {
  AND?: InputMaybe<Array<PersonWhere>>
  OR?: InputMaybe<Array<PersonWhere>>
  moviesAggregate?: InputMaybe<PersonMoviesAggregateInput>
  moviesConnection_ALL?: InputMaybe<PersonMoviesConnectionWhere>
  moviesConnection_NONE?: InputMaybe<PersonMoviesConnectionWhere>
  moviesConnection_SINGLE?: InputMaybe<PersonMoviesConnectionWhere>
  moviesConnection_SOME?: InputMaybe<PersonMoviesConnectionWhere>
  /** Return People where all of the related Movies match this filter */
  movies_ALL?: InputMaybe<MovieWhere>
  /** Return People where none of the related Movies match this filter */
  movies_NONE?: InputMaybe<MovieWhere>
  /** Return People where one of the related Movies match this filter */
  movies_SINGLE?: InputMaybe<MovieWhere>
  /** Return People where some of the related Movies match this filter */
  movies_SOME?: InputMaybe<MovieWhere>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<Scalars['String']>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  movies: Array<Movie>
  moviesAggregate: MovieAggregateSelection
  moviesConnection: MoviesConnection
  people: Array<Person>
  peopleAggregate: PersonAggregateSelection
  peopleConnection: PeopleConnection
}

export type QueryMoviesArgs = {
  options?: InputMaybe<MovieOptions>
  where?: InputMaybe<MovieWhere>
}

export type QueryMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>
}

export type QueryMoviesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<InputMaybe<MovieSort>>>
  where?: InputMaybe<MovieWhere>
}

export type QueryPeopleArgs = {
  options?: InputMaybe<PersonOptions>
  where?: InputMaybe<PersonWhere>
}

export type QueryPeopleAggregateArgs = {
  where?: InputMaybe<PersonWhere>
}

export type QueryPeopleConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<InputMaybe<PersonSort>>>
  where?: InputMaybe<PersonWhere>
}

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC',
}

export type StringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable'
  longest: Scalars['String']
  shortest: Scalars['String']
}

export type StringAggregateSelectionNullable = {
  __typename?: 'StringAggregateSelectionNullable'
  longest?: Maybe<Scalars['String']>
  shortest?: Maybe<Scalars['String']>
}

export type UpdateInfo = {
  __typename?: 'UpdateInfo'
  bookmark?: Maybe<Scalars['String']>
  nodesCreated: Scalars['Int']
  nodesDeleted: Scalars['Int']
  relationshipsCreated: Scalars['Int']
  relationshipsDeleted: Scalars['Int']
}

export type UpdateMoviesMutationResponse = {
  __typename?: 'UpdateMoviesMutationResponse'
  info: UpdateInfo
  movies: Array<Movie>
}

export type UpdatePeopleMutationResponse = {
  __typename?: 'UpdatePeopleMutationResponse'
  info: UpdateInfo
  people: Array<Person>
}

export type FindMoviesQueryVariables = Exact<{ [key: string]: never }>

export type FindMoviesQuery = {
  __typename?: 'Query'
  movies: Array<{
    __typename?: 'Movie'
    title: string
    tagline?: string | null
    actors: Array<{ __typename?: 'Person'; name: string }>
  }>
}

export type FindPeopleQueryVariables = Exact<{ [key: string]: never }>

export type FindPeopleQuery = {
  __typename?: 'Query'
  people: Array<{
    __typename?: 'Person'
    name: string
    movies: Array<{ __typename?: 'Movie'; title: string }>
  }>
}

export const FindMoviesDocument = `
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
export const useFindMoviesQuery = <
  TData = FindMoviesQuery,
  TError = { response: { data: { [key: string]: unknown }; status: number } }
>(
  variables?: FindMoviesQueryVariables,
  options?: UseQueryOptions<FindMoviesQuery, TError, TData>
) =>
  useQuery<FindMoviesQuery, TError, TData>(
    variables === undefined ? ['findMovies'] : ['findMovies', variables],
    gqlReq<FindMoviesQuery, FindMoviesQueryVariables>(
      FindMoviesDocument,
      variables
    ),
    options
  )
export const FindPeopleDocument = `
    query findPeople {
  people {
    name
    movies {
      title
    }
  }
}
    `
export const useFindPeopleQuery = <
  TData = FindPeopleQuery,
  TError = { response: { data: { [key: string]: unknown }; status: number } }
>(
  variables?: FindPeopleQueryVariables,
  options?: UseQueryOptions<FindPeopleQuery, TError, TData>
) =>
  useQuery<FindPeopleQuery, TError, TData>(
    variables === undefined ? ['findPeople'] : ['findPeople', variables],
    gqlReq<FindPeopleQuery, FindPeopleQueryVariables>(
      FindPeopleDocument,
      variables
    ),
    options
  )
