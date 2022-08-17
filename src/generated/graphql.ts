import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BooleanOp = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type IntOp = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export type Item = {
  __typename?: 'Item';
  createdAt?: Maybe<Scalars['String']>;
  cuisineType?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  dietaryChoice?: Maybe<Scalars['String']>;
  favoriteCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  kitchen?: Maybe<Kitchen>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type ItemOrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  cuisineType?: InputMaybe<SortOrder>;
  desc?: InputMaybe<SortOrder>;
  dietaryChoice?: InputMaybe<SortOrder>;
  favoriteCount?: InputMaybe<SortOrder>;
  isPublished?: InputMaybe<SortOrder>;
  kitchen?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  photo?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type ItemWhereInput = {
  createdAt?: InputMaybe<StringOp>;
  cuisineType?: InputMaybe<StringOp>;
  desc?: InputMaybe<StringOp>;
  dietaryChoice?: InputMaybe<StringOp>;
  favoriteCount?: InputMaybe<IntOp>;
  isPublished?: InputMaybe<BooleanOp>;
  name?: InputMaybe<StringOp>;
  photo?: InputMaybe<StringOp>;
  price?: InputMaybe<IntOp>;
};

export type Kitchen = {
  __typename?: 'Kitchen';
  createdAt?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  favoriteCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<Maybe<Item>>>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type KitchenOrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  desc?: InputMaybe<SortOrder>;
  favoriteCount?: InputMaybe<SortOrder>;
  isPublished?: InputMaybe<SortOrder>;
  items?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  photo?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
};

export type KitchenWhereInput = {
  createdAt?: InputMaybe<StringOp>;
  desc?: InputMaybe<StringOp>;
  favoriteCount?: InputMaybe<IntOp>;
  isPublished?: InputMaybe<BooleanOp>;
  name?: InputMaybe<StringOp>;
  photo?: InputMaybe<StringOp>;
  status?: InputMaybe<StringOp>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  item?: Maybe<Item>;
  items?: Maybe<Array<Maybe<Item>>>;
  kitchen?: Maybe<Kitchen>;
  kitchens?: Maybe<Array<Maybe<Kitchen>>>;
};


export type RootQueryItemArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type RootQueryItemsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ItemOrderByInput>>>;
  where?: InputMaybe<ItemWhereInput>;
};


export type RootQueryKitchenArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type RootQueryKitchensArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<KitchenOrderByInput>>>;
  where?: InputMaybe<KitchenWhereInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringOp = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type GetFoodItemsQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  priceGte?: InputMaybe<Scalars['Int']>;
  priceLte?: InputMaybe<Scalars['Int']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetFoodItemsQuery = { __typename?: 'RootQuery', items?: Array<{ __typename?: 'Item', id?: number | null, name?: string | null, isPublished?: boolean | null, price?: number | null, favoriteCount?: number | null, dietaryChoice?: string | null, cuisineType?: string | null, desc?: string | null, photo?: string | null } | null> | null };


export const GetFoodItemsDocument = `
    query GetFoodItems($name: String, $priceGte: Int, $priceLte: Int, $isPublished: Boolean) {
  items(
    where: {name: {startsWith: $name}, price: {gte: $priceGte, lte: $priceLte}, isPublished: {eq: $isPublished}}
  ) {
    id
    name
    isPublished
    price
    favoriteCount
    dietaryChoice
    cuisineType
    desc
    photo
  }
}
    `;
export const useGetFoodItemsQuery = <
      TData = GetFoodItemsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetFoodItemsQueryVariables,
      options?: UseQueryOptions<GetFoodItemsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetFoodItemsQuery, TError, TData>(
      variables === undefined ? ['GetFoodItems'] : ['GetFoodItems', variables],
      fetcher<GetFoodItemsQuery, GetFoodItemsQueryVariables>(client, GetFoodItemsDocument, variables, headers),
      options
    );