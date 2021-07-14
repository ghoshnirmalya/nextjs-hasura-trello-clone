import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bpchar: any;
  numeric: number;
  timestamptz: string;
  uuid: any;
};


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts';
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  provider_account_id: Scalars['String'];
  provider_id: Scalars['String'];
  provider_type: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
};


/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Accounts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: Maybe<Array<Accounts_Bool_Exp>>;
  _not?: Maybe<Accounts_Bool_Exp>;
  _or?: Maybe<Array<Accounts_Bool_Exp>>;
  access_token?: Maybe<String_Comparison_Exp>;
  access_token_expires?: Maybe<Timestamptz_Comparison_Exp>;
  compound_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  provider_account_id?: Maybe<String_Comparison_Exp>;
  provider_id?: Maybe<String_Comparison_Exp>;
  provider_type?: Maybe<String_Comparison_Exp>;
  refresh_token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey'
}

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** on conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  access_token?: Maybe<Order_By>;
  access_token_expires?: Maybe<Order_By>;
  compound_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider_account_id?: Maybe<Order_By>;
  provider_id?: Maybe<Order_By>;
  provider_type?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  AccessTokenExpires = 'access_token_expires',
  /** column name */
  CompoundId = 'compound_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderAccountId = 'provider_account_id',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  ProviderType = 'provider_type',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  access_token?: Maybe<Scalars['String']>;
  access_token_expires?: Maybe<Scalars['timestamptz']>;
  compound_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider_account_id?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  provider_type?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  AccessTokenExpires = 'access_token_expires',
  /** column name */
  CompoundId = 'compound_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderAccountId = 'provider_account_id',
  /** column name */
  ProviderId = 'provider_id',
  /** column name */
  ProviderType = 'provider_type',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "boards" */
export type Boards = {
  __typename?: 'boards';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "boards" */
export type Boards_Aggregate = {
  __typename?: 'boards_aggregate';
  aggregate?: Maybe<Boards_Aggregate_Fields>;
  nodes: Array<Boards>;
};

/** aggregate fields of "boards" */
export type Boards_Aggregate_Fields = {
  __typename?: 'boards_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Boards_Max_Fields>;
  min?: Maybe<Boards_Min_Fields>;
};


/** aggregate fields of "boards" */
export type Boards_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Boards_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "boards". All fields are combined with a logical 'AND'. */
export type Boards_Bool_Exp = {
  _and?: Maybe<Array<Boards_Bool_Exp>>;
  _not?: Maybe<Boards_Bool_Exp>;
  _or?: Maybe<Array<Boards_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "boards" */
export enum Boards_Constraint {
  /** unique or primary key constraint */
  BoardsPkey = 'boards_pkey'
}

/** input type for inserting data into table "boards" */
export type Boards_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Boards_Max_Fields = {
  __typename?: 'boards_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Boards_Min_Fields = {
  __typename?: 'boards_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "boards" */
export type Boards_Mutation_Response = {
  __typename?: 'boards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Boards>;
};

/** on conflict condition type for table "boards" */
export type Boards_On_Conflict = {
  constraint: Boards_Constraint;
  update_columns?: Array<Boards_Update_Column>;
  where?: Maybe<Boards_Bool_Exp>;
};

/** Ordering options when selecting data from "boards". */
export type Boards_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: boards */
export type Boards_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "boards" */
export enum Boards_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "boards" */
export type Boards_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "boards" */
export enum Boards_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "boards_users" */
export type Boards_Users = {
  __typename?: 'boards_users';
  board_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "boards_users" */
export type Boards_Users_Aggregate = {
  __typename?: 'boards_users_aggregate';
  aggregate?: Maybe<Boards_Users_Aggregate_Fields>;
  nodes: Array<Boards_Users>;
};

/** aggregate fields of "boards_users" */
export type Boards_Users_Aggregate_Fields = {
  __typename?: 'boards_users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Boards_Users_Max_Fields>;
  min?: Maybe<Boards_Users_Min_Fields>;
};


/** aggregate fields of "boards_users" */
export type Boards_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Boards_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "boards_users". All fields are combined with a logical 'AND'. */
export type Boards_Users_Bool_Exp = {
  _and?: Maybe<Array<Boards_Users_Bool_Exp>>;
  _not?: Maybe<Boards_Users_Bool_Exp>;
  _or?: Maybe<Array<Boards_Users_Bool_Exp>>;
  board_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "boards_users" */
export enum Boards_Users_Constraint {
  /** unique or primary key constraint */
  BoardsUsersPkey = 'boards_users_pkey'
}

/** input type for inserting data into table "boards_users" */
export type Boards_Users_Insert_Input = {
  board_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Boards_Users_Max_Fields = {
  __typename?: 'boards_users_max_fields';
  board_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Boards_Users_Min_Fields = {
  __typename?: 'boards_users_min_fields';
  board_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "boards_users" */
export type Boards_Users_Mutation_Response = {
  __typename?: 'boards_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Boards_Users>;
};

/** on conflict condition type for table "boards_users" */
export type Boards_Users_On_Conflict = {
  constraint: Boards_Users_Constraint;
  update_columns?: Array<Boards_Users_Update_Column>;
  where?: Maybe<Boards_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "boards_users". */
export type Boards_Users_Order_By = {
  board_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: boards_users */
export type Boards_Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "boards_users" */
export enum Boards_Users_Select_Column {
  /** column name */
  BoardId = 'board_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "boards_users" */
export type Boards_Users_Set_Input = {
  board_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "boards_users" */
export enum Boards_Users_Update_Column {
  /** column name */
  BoardId = 'board_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}


/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: Maybe<Scalars['bpchar']>;
  _gt?: Maybe<Scalars['bpchar']>;
  _gte?: Maybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['bpchar']>;
  _in?: Maybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['bpchar']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['bpchar']>;
  _lt?: Maybe<Scalars['bpchar']>;
  _lte?: Maybe<Scalars['bpchar']>;
  _neq?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['bpchar']>;
  _nin?: Maybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['bpchar']>;
};

/** columns and relationships of "cards" */
export type Cards = {
  __typename?: 'cards';
  board_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  list_id: Scalars['uuid'];
  position: Scalars['numeric'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "cards" */
export type Cards_Aggregate = {
  __typename?: 'cards_aggregate';
  aggregate?: Maybe<Cards_Aggregate_Fields>;
  nodes: Array<Cards>;
};

/** aggregate fields of "cards" */
export type Cards_Aggregate_Fields = {
  __typename?: 'cards_aggregate_fields';
  avg?: Maybe<Cards_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cards_Max_Fields>;
  min?: Maybe<Cards_Min_Fields>;
  stddev?: Maybe<Cards_Stddev_Fields>;
  stddev_pop?: Maybe<Cards_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cards_Stddev_Samp_Fields>;
  sum?: Maybe<Cards_Sum_Fields>;
  var_pop?: Maybe<Cards_Var_Pop_Fields>;
  var_samp?: Maybe<Cards_Var_Samp_Fields>;
  variance?: Maybe<Cards_Variance_Fields>;
};


/** aggregate fields of "cards" */
export type Cards_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Cards_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Cards_Avg_Fields = {
  __typename?: 'cards_avg_fields';
  position?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "cards". All fields are combined with a logical 'AND'. */
export type Cards_Bool_Exp = {
  _and?: Maybe<Array<Cards_Bool_Exp>>;
  _not?: Maybe<Cards_Bool_Exp>;
  _or?: Maybe<Array<Cards_Bool_Exp>>;
  board_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  list_id?: Maybe<Uuid_Comparison_Exp>;
  position?: Maybe<Numeric_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "cards" */
export enum Cards_Constraint {
  /** unique or primary key constraint */
  CardsPkey = 'cards_pkey'
}

/** input type for incrementing numeric columns in table "cards" */
export type Cards_Inc_Input = {
  position?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "cards" */
export type Cards_Insert_Input = {
  board_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  list_id?: Maybe<Scalars['uuid']>;
  position?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Cards_Max_Fields = {
  __typename?: 'cards_max_fields';
  board_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  list_id?: Maybe<Scalars['uuid']>;
  position?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Cards_Min_Fields = {
  __typename?: 'cards_min_fields';
  board_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  list_id?: Maybe<Scalars['uuid']>;
  position?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "cards" */
export type Cards_Mutation_Response = {
  __typename?: 'cards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cards>;
};

/** on conflict condition type for table "cards" */
export type Cards_On_Conflict = {
  constraint: Cards_Constraint;
  update_columns?: Array<Cards_Update_Column>;
  where?: Maybe<Cards_Bool_Exp>;
};

/** Ordering options when selecting data from "cards". */
export type Cards_Order_By = {
  board_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  list_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: cards */
export type Cards_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "cards" */
export enum Cards_Select_Column {
  /** column name */
  BoardId = 'board_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ListId = 'list_id',
  /** column name */
  Position = 'position',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "cards" */
export type Cards_Set_Input = {
  board_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  list_id?: Maybe<Scalars['uuid']>;
  position?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Cards_Stddev_Fields = {
  __typename?: 'cards_stddev_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Cards_Stddev_Pop_Fields = {
  __typename?: 'cards_stddev_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Cards_Stddev_Samp_Fields = {
  __typename?: 'cards_stddev_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Cards_Sum_Fields = {
  __typename?: 'cards_sum_fields';
  position?: Maybe<Scalars['numeric']>;
};

/** update columns of table "cards" */
export enum Cards_Update_Column {
  /** column name */
  BoardId = 'board_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ListId = 'list_id',
  /** column name */
  Position = 'position',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Cards_Var_Pop_Fields = {
  __typename?: 'cards_var_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Cards_Var_Samp_Fields = {
  __typename?: 'cards_var_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Cards_Variance_Fields = {
  __typename?: 'cards_variance_fields';
  position?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "lists" */
export type Lists = {
  __typename?: 'lists';
  board_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  position: Scalars['numeric'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "lists" */
export type Lists_Aggregate = {
  __typename?: 'lists_aggregate';
  aggregate?: Maybe<Lists_Aggregate_Fields>;
  nodes: Array<Lists>;
};

/** aggregate fields of "lists" */
export type Lists_Aggregate_Fields = {
  __typename?: 'lists_aggregate_fields';
  avg?: Maybe<Lists_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Lists_Max_Fields>;
  min?: Maybe<Lists_Min_Fields>;
  stddev?: Maybe<Lists_Stddev_Fields>;
  stddev_pop?: Maybe<Lists_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Lists_Stddev_Samp_Fields>;
  sum?: Maybe<Lists_Sum_Fields>;
  var_pop?: Maybe<Lists_Var_Pop_Fields>;
  var_samp?: Maybe<Lists_Var_Samp_Fields>;
  variance?: Maybe<Lists_Variance_Fields>;
};


/** aggregate fields of "lists" */
export type Lists_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Lists_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Lists_Avg_Fields = {
  __typename?: 'lists_avg_fields';
  position?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "lists". All fields are combined with a logical 'AND'. */
export type Lists_Bool_Exp = {
  _and?: Maybe<Array<Lists_Bool_Exp>>;
  _not?: Maybe<Lists_Bool_Exp>;
  _or?: Maybe<Array<Lists_Bool_Exp>>;
  board_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  position?: Maybe<Numeric_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "lists" */
export enum Lists_Constraint {
  /** unique or primary key constraint */
  ListsPkey = 'lists_pkey'
}

/** input type for incrementing numeric columns in table "lists" */
export type Lists_Inc_Input = {
  position?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "lists" */
export type Lists_Insert_Input = {
  board_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Lists_Max_Fields = {
  __typename?: 'lists_max_fields';
  board_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Lists_Min_Fields = {
  __typename?: 'lists_min_fields';
  board_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "lists" */
export type Lists_Mutation_Response = {
  __typename?: 'lists_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Lists>;
};

/** on conflict condition type for table "lists" */
export type Lists_On_Conflict = {
  constraint: Lists_Constraint;
  update_columns?: Array<Lists_Update_Column>;
  where?: Maybe<Lists_Bool_Exp>;
};

/** Ordering options when selecting data from "lists". */
export type Lists_Order_By = {
  board_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: lists */
export type Lists_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "lists" */
export enum Lists_Select_Column {
  /** column name */
  BoardId = 'board_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Position = 'position',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "lists" */
export type Lists_Set_Input = {
  board_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Lists_Stddev_Fields = {
  __typename?: 'lists_stddev_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Lists_Stddev_Pop_Fields = {
  __typename?: 'lists_stddev_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Lists_Stddev_Samp_Fields = {
  __typename?: 'lists_stddev_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Lists_Sum_Fields = {
  __typename?: 'lists_sum_fields';
  position?: Maybe<Scalars['numeric']>;
};

/** update columns of table "lists" */
export enum Lists_Update_Column {
  /** column name */
  BoardId = 'board_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Position = 'position',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Lists_Var_Pop_Fields = {
  __typename?: 'lists_var_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Lists_Var_Samp_Fields = {
  __typename?: 'lists_var_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Lists_Variance_Fields = {
  __typename?: 'lists_variance_fields';
  position?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "boards" */
  delete_boards?: Maybe<Boards_Mutation_Response>;
  /** delete single row from the table: "boards" */
  delete_boards_by_pk?: Maybe<Boards>;
  /** delete data from the table: "boards_users" */
  delete_boards_users?: Maybe<Boards_Users_Mutation_Response>;
  /** delete single row from the table: "boards_users" */
  delete_boards_users_by_pk?: Maybe<Boards_Users>;
  /** delete data from the table: "cards" */
  delete_cards?: Maybe<Cards_Mutation_Response>;
  /** delete single row from the table: "cards" */
  delete_cards_by_pk?: Maybe<Cards>;
  /** delete data from the table: "lists" */
  delete_lists?: Maybe<Lists_Mutation_Response>;
  /** delete single row from the table: "lists" */
  delete_lists_by_pk?: Maybe<Lists>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "verification_requests" */
  delete_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** delete single row from the table: "verification_requests" */
  delete_verification_requests_by_pk?: Maybe<Verification_Requests>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "boards" */
  insert_boards?: Maybe<Boards_Mutation_Response>;
  /** insert a single row into the table: "boards" */
  insert_boards_one?: Maybe<Boards>;
  /** insert data into the table: "boards_users" */
  insert_boards_users?: Maybe<Boards_Users_Mutation_Response>;
  /** insert a single row into the table: "boards_users" */
  insert_boards_users_one?: Maybe<Boards_Users>;
  /** insert data into the table: "cards" */
  insert_cards?: Maybe<Cards_Mutation_Response>;
  /** insert a single row into the table: "cards" */
  insert_cards_one?: Maybe<Cards>;
  /** insert data into the table: "lists" */
  insert_lists?: Maybe<Lists_Mutation_Response>;
  /** insert a single row into the table: "lists" */
  insert_lists_one?: Maybe<Lists>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "verification_requests" */
  insert_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** insert a single row into the table: "verification_requests" */
  insert_verification_requests_one?: Maybe<Verification_Requests>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update data of the table: "boards" */
  update_boards?: Maybe<Boards_Mutation_Response>;
  /** update single row of the table: "boards" */
  update_boards_by_pk?: Maybe<Boards>;
  /** update data of the table: "boards_users" */
  update_boards_users?: Maybe<Boards_Users_Mutation_Response>;
  /** update single row of the table: "boards_users" */
  update_boards_users_by_pk?: Maybe<Boards_Users>;
  /** update data of the table: "cards" */
  update_cards?: Maybe<Cards_Mutation_Response>;
  /** update single row of the table: "cards" */
  update_cards_by_pk?: Maybe<Cards>;
  /** update data of the table: "lists" */
  update_lists?: Maybe<Lists_Mutation_Response>;
  /** update single row of the table: "lists" */
  update_lists_by_pk?: Maybe<Lists>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "verification_requests" */
  update_verification_requests?: Maybe<Verification_Requests_Mutation_Response>;
  /** update single row of the table: "verification_requests" */
  update_verification_requests_by_pk?: Maybe<Verification_Requests>;
};


/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_BoardsArgs = {
  where: Boards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Boards_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Boards_UsersArgs = {
  where: Boards_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Boards_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CardsArgs = {
  where: Cards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cards_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ListsArgs = {
  where: Lists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Lists_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Verification_RequestsArgs = {
  where: Verification_Requests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Verification_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BoardsArgs = {
  objects: Array<Boards_Insert_Input>;
  on_conflict?: Maybe<Boards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Boards_OneArgs = {
  object: Boards_Insert_Input;
  on_conflict?: Maybe<Boards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Boards_UsersArgs = {
  objects: Array<Boards_Users_Insert_Input>;
  on_conflict?: Maybe<Boards_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Boards_Users_OneArgs = {
  object: Boards_Users_Insert_Input;
  on_conflict?: Maybe<Boards_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CardsArgs = {
  objects: Array<Cards_Insert_Input>;
  on_conflict?: Maybe<Cards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cards_OneArgs = {
  object: Cards_Insert_Input;
  on_conflict?: Maybe<Cards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ListsArgs = {
  objects: Array<Lists_Insert_Input>;
  on_conflict?: Maybe<Lists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Lists_OneArgs = {
  object: Lists_Insert_Input;
  on_conflict?: Maybe<Lists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: Maybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input;
  on_conflict?: Maybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_RequestsArgs = {
  objects: Array<Verification_Requests_Insert_Input>;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_Requests_OneArgs = {
  object: Verification_Requests_Insert_Input;
  on_conflict?: Maybe<Verification_Requests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _set?: Maybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _set?: Maybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BoardsArgs = {
  _set?: Maybe<Boards_Set_Input>;
  where: Boards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Boards_By_PkArgs = {
  _set?: Maybe<Boards_Set_Input>;
  pk_columns: Boards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Boards_UsersArgs = {
  _set?: Maybe<Boards_Users_Set_Input>;
  where: Boards_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Boards_Users_By_PkArgs = {
  _set?: Maybe<Boards_Users_Set_Input>;
  pk_columns: Boards_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CardsArgs = {
  _inc?: Maybe<Cards_Inc_Input>;
  _set?: Maybe<Cards_Set_Input>;
  where: Cards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cards_By_PkArgs = {
  _inc?: Maybe<Cards_Inc_Input>;
  _set?: Maybe<Cards_Set_Input>;
  pk_columns: Cards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ListsArgs = {
  _inc?: Maybe<Lists_Inc_Input>;
  _set?: Maybe<Lists_Set_Input>;
  where: Lists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Lists_By_PkArgs = {
  _inc?: Maybe<Lists_Inc_Input>;
  _set?: Maybe<Lists_Set_Input>;
  pk_columns: Lists_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _set?: Maybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _set?: Maybe<Sessions_Set_Input>;
  pk_columns: Sessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_RequestsArgs = {
  _set?: Maybe<Verification_Requests_Set_Input>;
  where: Verification_Requests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Requests_By_PkArgs = {
  _set?: Maybe<Verification_Requests_Set_Input>;
  pk_columns: Verification_Requests_Pk_Columns_Input;
};


/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "boards" */
  boards: Array<Boards>;
  /** fetch aggregated fields from the table: "boards" */
  boards_aggregate: Boards_Aggregate;
  /** fetch data from the table: "boards" using primary key columns */
  boards_by_pk?: Maybe<Boards>;
  /** fetch data from the table: "boards_users" */
  boards_users: Array<Boards_Users>;
  /** fetch aggregated fields from the table: "boards_users" */
  boards_users_aggregate: Boards_Users_Aggregate;
  /** fetch data from the table: "boards_users" using primary key columns */
  boards_users_by_pk?: Maybe<Boards_Users>;
  /** fetch data from the table: "cards" */
  cards: Array<Cards>;
  /** fetch aggregated fields from the table: "cards" */
  cards_aggregate: Cards_Aggregate;
  /** fetch data from the table: "cards" using primary key columns */
  cards_by_pk?: Maybe<Cards>;
  /** fetch data from the table: "lists" */
  lists: Array<Lists>;
  /** fetch aggregated fields from the table: "lists" */
  lists_aggregate: Lists_Aggregate;
  /** fetch data from the table: "lists" using primary key columns */
  lists_by_pk?: Maybe<Lists>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_requests" */
  verification_requests: Array<Verification_Requests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verification_requests_aggregate: Verification_Requests_Aggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verification_requests_by_pk?: Maybe<Verification_Requests>;
};


export type Query_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBoardsArgs = {
  distinct_on?: Maybe<Array<Boards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Order_By>>;
  where?: Maybe<Boards_Bool_Exp>;
};


export type Query_RootBoards_AggregateArgs = {
  distinct_on?: Maybe<Array<Boards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Order_By>>;
  where?: Maybe<Boards_Bool_Exp>;
};


export type Query_RootBoards_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBoards_UsersArgs = {
  distinct_on?: Maybe<Array<Boards_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Users_Order_By>>;
  where?: Maybe<Boards_Users_Bool_Exp>;
};


export type Query_RootBoards_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Boards_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Users_Order_By>>;
  where?: Maybe<Boards_Users_Bool_Exp>;
};


export type Query_RootBoards_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCardsArgs = {
  distinct_on?: Maybe<Array<Cards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cards_Order_By>>;
  where?: Maybe<Cards_Bool_Exp>;
};


export type Query_RootCards_AggregateArgs = {
  distinct_on?: Maybe<Array<Cards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cards_Order_By>>;
  where?: Maybe<Cards_Bool_Exp>;
};


export type Query_RootCards_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootListsArgs = {
  distinct_on?: Maybe<Array<Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lists_Order_By>>;
  where?: Maybe<Lists_Bool_Exp>;
};


export type Query_RootLists_AggregateArgs = {
  distinct_on?: Maybe<Array<Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lists_Order_By>>;
  where?: Maybe<Lists_Bool_Exp>;
};


export type Query_RootLists_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSessionsArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


export type Query_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


export type Query_RootVerification_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "sessions" */
export type Sessions = {
  __typename?: 'sessions';
  access_token: Scalars['String'];
  created_at: Scalars['timestamptz'];
  expires: Scalars['timestamptz'];
  id: Scalars['uuid'];
  session_token: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
  __typename?: 'sessions_aggregate';
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
  __typename?: 'sessions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
};


/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sessions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: Maybe<Array<Sessions_Bool_Exp>>;
  _not?: Maybe<Sessions_Bool_Exp>;
  _or?: Maybe<Array<Sessions_Bool_Exp>>;
  access_token?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  session_token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint */
  SessionsPkey = 'sessions_pkey'
}

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  access_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  session_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
  __typename?: 'sessions_max_fields';
  access_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  session_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
  __typename?: 'sessions_min_fields';
  access_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  session_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  __typename?: 'sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>;
};

/** on conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns?: Array<Sessions_Update_Column>;
  where?: Maybe<Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions". */
export type Sessions_Order_By = {
  access_token?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  session_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: sessions */
export type Sessions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'session_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  access_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  session_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'session_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "boards" */
  boards: Array<Boards>;
  /** fetch aggregated fields from the table: "boards" */
  boards_aggregate: Boards_Aggregate;
  /** fetch data from the table: "boards" using primary key columns */
  boards_by_pk?: Maybe<Boards>;
  /** fetch data from the table: "boards_users" */
  boards_users: Array<Boards_Users>;
  /** fetch aggregated fields from the table: "boards_users" */
  boards_users_aggregate: Boards_Users_Aggregate;
  /** fetch data from the table: "boards_users" using primary key columns */
  boards_users_by_pk?: Maybe<Boards_Users>;
  /** fetch data from the table: "cards" */
  cards: Array<Cards>;
  /** fetch aggregated fields from the table: "cards" */
  cards_aggregate: Cards_Aggregate;
  /** fetch data from the table: "cards" using primary key columns */
  cards_by_pk?: Maybe<Cards>;
  /** fetch data from the table: "lists" */
  lists: Array<Lists>;
  /** fetch aggregated fields from the table: "lists" */
  lists_aggregate: Lists_Aggregate;
  /** fetch data from the table: "lists" using primary key columns */
  lists_by_pk?: Maybe<Lists>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_requests" */
  verification_requests: Array<Verification_Requests>;
  /** fetch aggregated fields from the table: "verification_requests" */
  verification_requests_aggregate: Verification_Requests_Aggregate;
  /** fetch data from the table: "verification_requests" using primary key columns */
  verification_requests_by_pk?: Maybe<Verification_Requests>;
};


export type Subscription_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBoardsArgs = {
  distinct_on?: Maybe<Array<Boards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Order_By>>;
  where?: Maybe<Boards_Bool_Exp>;
};


export type Subscription_RootBoards_AggregateArgs = {
  distinct_on?: Maybe<Array<Boards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Order_By>>;
  where?: Maybe<Boards_Bool_Exp>;
};


export type Subscription_RootBoards_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBoards_UsersArgs = {
  distinct_on?: Maybe<Array<Boards_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Users_Order_By>>;
  where?: Maybe<Boards_Users_Bool_Exp>;
};


export type Subscription_RootBoards_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Boards_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Boards_Users_Order_By>>;
  where?: Maybe<Boards_Users_Bool_Exp>;
};


export type Subscription_RootBoards_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCardsArgs = {
  distinct_on?: Maybe<Array<Cards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cards_Order_By>>;
  where?: Maybe<Cards_Bool_Exp>;
};


export type Subscription_RootCards_AggregateArgs = {
  distinct_on?: Maybe<Array<Cards_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cards_Order_By>>;
  where?: Maybe<Cards_Bool_Exp>;
};


export type Subscription_RootCards_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootListsArgs = {
  distinct_on?: Maybe<Array<Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lists_Order_By>>;
  where?: Maybe<Lists_Bool_Exp>;
};


export type Subscription_RootLists_AggregateArgs = {
  distinct_on?: Maybe<Array<Lists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lists_Order_By>>;
  where?: Maybe<Lists_Bool_Exp>;
};


export type Subscription_RootLists_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSessionsArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootVerification_RequestsArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


export type Subscription_RootVerification_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Verification_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Verification_Requests_Order_By>>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};


export type Subscription_RootVerification_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  email_verified?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['bpchar']>;
  name?: Maybe<Scalars['String']>;
  theme: Scalars['bpchar'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  email_verified?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<Bpchar_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  theme?: Maybe<Bpchar_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['bpchar']>;
  name?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['bpchar']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['bpchar']>;
  name?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['bpchar']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['bpchar']>;
  name?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['bpchar']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  theme?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Theme = 'theme',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['bpchar']>;
  name?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['bpchar']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Theme = 'theme',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "verification_requests" */
export type Verification_Requests = {
  __typename?: 'verification_requests';
  created_at: Scalars['timestamptz'];
  expires: Scalars['timestamptz'];
  id: Scalars['uuid'];
  identifier: Scalars['String'];
  token: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "verification_requests" */
export type Verification_Requests_Aggregate = {
  __typename?: 'verification_requests_aggregate';
  aggregate?: Maybe<Verification_Requests_Aggregate_Fields>;
  nodes: Array<Verification_Requests>;
};

/** aggregate fields of "verification_requests" */
export type Verification_Requests_Aggregate_Fields = {
  __typename?: 'verification_requests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Verification_Requests_Max_Fields>;
  min?: Maybe<Verification_Requests_Min_Fields>;
};


/** aggregate fields of "verification_requests" */
export type Verification_Requests_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Verification_Requests_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "verification_requests". All fields are combined with a logical 'AND'. */
export type Verification_Requests_Bool_Exp = {
  _and?: Maybe<Array<Verification_Requests_Bool_Exp>>;
  _not?: Maybe<Verification_Requests_Bool_Exp>;
  _or?: Maybe<Array<Verification_Requests_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  identifier?: Maybe<String_Comparison_Exp>;
  token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_requests" */
export enum Verification_Requests_Constraint {
  /** unique or primary key constraint */
  VerificationRequestsPkey = 'verification_requests_pkey'
}

/** input type for inserting data into table "verification_requests" */
export type Verification_Requests_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Verification_Requests_Max_Fields = {
  __typename?: 'verification_requests_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Verification_Requests_Min_Fields = {
  __typename?: 'verification_requests_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "verification_requests" */
export type Verification_Requests_Mutation_Response = {
  __typename?: 'verification_requests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Verification_Requests>;
};

/** on conflict condition type for table "verification_requests" */
export type Verification_Requests_On_Conflict = {
  constraint: Verification_Requests_Constraint;
  update_columns?: Array<Verification_Requests_Update_Column>;
  where?: Maybe<Verification_Requests_Bool_Exp>;
};

/** Ordering options when selecting data from "verification_requests". */
export type Verification_Requests_Order_By = {
  created_at?: Maybe<Order_By>;
  expires?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  identifier?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: verification_requests */
export type Verification_Requests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "verification_requests" */
export enum Verification_Requests_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "verification_requests" */
export type Verification_Requests_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "verification_requests" */
export enum Verification_Requests_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type CreateBoardMutationVariables = Exact<{
  name: Scalars['String'];
  user_id: Scalars['uuid'];
}>;


export type CreateBoardMutation = (
  { __typename?: 'mutation_root' }
  & { insert_boards?: Maybe<(
    { __typename?: 'boards_mutation_response' }
    & { returning: Array<(
      { __typename?: 'boards' }
      & Pick<Boards, 'id' | 'name'>
    )> }
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  userId: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
}>;


export type UpdateUserMutation = (
  { __typename?: 'mutation_root' }
  & { update_users?: Maybe<(
    { __typename?: 'users_mutation_response' }
    & { returning: Array<(
      { __typename?: 'users' }
      & Pick<Users, 'id' | 'name'>
    )> }
  )> }
);

export type FetchUserQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type FetchUserQuery = (
  { __typename?: 'query_root' }
  & { users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'name'>
  )> }
);

export type FetchBoardsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type FetchBoardsSubscription = (
  { __typename?: 'subscription_root' }
  & { boards: Array<(
    { __typename?: 'boards' }
    & Pick<Boards, 'id' | 'name'>
  )> }
);


export const CreateBoardDocument = gql`
    mutation createBoard($name: String!, $user_id: uuid!) {
  insert_boards(objects: {name: $name, user_id: $user_id}) {
    returning {
      id
      name
    }
  }
}
    `;
export type CreateBoardMutationFn = Apollo.MutationFunction<CreateBoardMutation, CreateBoardMutationVariables>;
export type CreateBoardComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateBoardMutation, CreateBoardMutationVariables>, 'mutation'>;

    export const CreateBoardComponent = (props: CreateBoardComponentProps) => (
      <ApolloReactComponents.Mutation<CreateBoardMutation, CreateBoardMutationVariables> mutation={CreateBoardDocument} {...props} />
    );
    
export type CreateBoardProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateBoardMutation, CreateBoardMutationVariables>
    } & TChildProps;
export function withCreateBoard<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateBoardMutation,
  CreateBoardMutationVariables,
  CreateBoardProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateBoardMutation, CreateBoardMutationVariables, CreateBoardProps<TChildProps, TDataName>>(CreateBoardDocument, {
      alias: 'createBoard',
      ...operationOptions
    });
};

/**
 * __useCreateBoardMutation__
 *
 * To run a mutation, you first call `useCreateBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBoardMutation, { data, loading, error }] = useCreateBoardMutation({
 *   variables: {
 *      name: // value for 'name'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useCreateBoardMutation(baseOptions?: Apollo.MutationHookOptions<CreateBoardMutation, CreateBoardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBoardMutation, CreateBoardMutationVariables>(CreateBoardDocument, options);
      }
export type CreateBoardMutationHookResult = ReturnType<typeof useCreateBoardMutation>;
export type CreateBoardMutationResult = Apollo.MutationResult<CreateBoardMutation>;
export type CreateBoardMutationOptions = Apollo.BaseMutationOptions<CreateBoardMutation, CreateBoardMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($userId: uuid!, $name: String) {
  update_users(where: {id: {_eq: $userId}}, _set: {name: $name}) {
    returning {
      id
      name
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;
export type UpdateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateUserMutation, UpdateUserMutationVariables>, 'mutation'>;

    export const UpdateUserComponent = (props: UpdateUserComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateUserMutation, UpdateUserMutationVariables> mutation={UpdateUserDocument} {...props} />
    );
    
export type UpdateUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>
    } & TChildProps;
export function withUpdateUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  UpdateUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateUserMutation, UpdateUserMutationVariables, UpdateUserProps<TChildProps, TDataName>>(UpdateUserDocument, {
      alias: 'updateUser',
      ...operationOptions
    });
};

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const FetchUserDocument = gql`
    query fetchUser($userId: uuid!) {
  users_by_pk(id: $userId) {
    id
    name
  }
}
    `;
export type FetchUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FetchUserQuery, FetchUserQueryVariables>, 'query'> & ({ variables: FetchUserQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const FetchUserComponent = (props: FetchUserComponentProps) => (
      <ApolloReactComponents.Query<FetchUserQuery, FetchUserQueryVariables> query={FetchUserDocument} {...props} />
    );
    
export type FetchUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<FetchUserQuery, FetchUserQueryVariables>
    } & TChildProps;
export function withFetchUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  FetchUserQuery,
  FetchUserQueryVariables,
  FetchUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, FetchUserQuery, FetchUserQueryVariables, FetchUserProps<TChildProps, TDataName>>(FetchUserDocument, {
      alias: 'fetchUser',
      ...operationOptions
    });
};

/**
 * __useFetchUserQuery__
 *
 * To run a query within a React component, call `useFetchUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFetchUserQuery(baseOptions: Apollo.QueryHookOptions<FetchUserQuery, FetchUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchUserQuery, FetchUserQueryVariables>(FetchUserDocument, options);
      }
export function useFetchUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchUserQuery, FetchUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchUserQuery, FetchUserQueryVariables>(FetchUserDocument, options);
        }
export type FetchUserQueryHookResult = ReturnType<typeof useFetchUserQuery>;
export type FetchUserLazyQueryHookResult = ReturnType<typeof useFetchUserLazyQuery>;
export type FetchUserQueryResult = Apollo.QueryResult<FetchUserQuery, FetchUserQueryVariables>;
export const FetchBoardsDocument = gql`
    subscription fetchBoards {
  boards(order_by: {created_at: desc}) {
    id
    name
  }
}
    `;
export type FetchBoardsComponentProps = Omit<ApolloReactComponents.SubscriptionComponentOptions<FetchBoardsSubscription, FetchBoardsSubscriptionVariables>, 'subscription'>;

    export const FetchBoardsComponent = (props: FetchBoardsComponentProps) => (
      <ApolloReactComponents.Subscription<FetchBoardsSubscription, FetchBoardsSubscriptionVariables> subscription={FetchBoardsDocument} {...props} />
    );
    
export type FetchBoardsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<FetchBoardsSubscription, FetchBoardsSubscriptionVariables>
    } & TChildProps;
export function withFetchBoards<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  FetchBoardsSubscription,
  FetchBoardsSubscriptionVariables,
  FetchBoardsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withSubscription<TProps, FetchBoardsSubscription, FetchBoardsSubscriptionVariables, FetchBoardsProps<TChildProps, TDataName>>(FetchBoardsDocument, {
      alias: 'fetchBoards',
      ...operationOptions
    });
};

/**
 * __useFetchBoardsSubscription__
 *
 * To run a query within a React component, call `useFetchBoardsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useFetchBoardsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchBoardsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useFetchBoardsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<FetchBoardsSubscription, FetchBoardsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<FetchBoardsSubscription, FetchBoardsSubscriptionVariables>(FetchBoardsDocument, options);
      }
export type FetchBoardsSubscriptionHookResult = ReturnType<typeof useFetchBoardsSubscription>;
export type FetchBoardsSubscriptionResult = Apollo.SubscriptionResult<FetchBoardsSubscription>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  String_comparison_exp: String_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  accounts: ResolverTypeWrapper<Accounts>;
  accounts_aggregate: ResolverTypeWrapper<Accounts_Aggregate>;
  accounts_aggregate_fields: ResolverTypeWrapper<Accounts_Aggregate_Fields>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  accounts_bool_exp: Accounts_Bool_Exp;
  accounts_constraint: Accounts_Constraint;
  accounts_insert_input: Accounts_Insert_Input;
  accounts_max_fields: ResolverTypeWrapper<Accounts_Max_Fields>;
  accounts_min_fields: ResolverTypeWrapper<Accounts_Min_Fields>;
  accounts_mutation_response: ResolverTypeWrapper<Accounts_Mutation_Response>;
  accounts_on_conflict: Accounts_On_Conflict;
  accounts_order_by: Accounts_Order_By;
  accounts_pk_columns_input: Accounts_Pk_Columns_Input;
  accounts_select_column: Accounts_Select_Column;
  accounts_set_input: Accounts_Set_Input;
  accounts_update_column: Accounts_Update_Column;
  boards: ResolverTypeWrapper<Boards>;
  boards_aggregate: ResolverTypeWrapper<Boards_Aggregate>;
  boards_aggregate_fields: ResolverTypeWrapper<Boards_Aggregate_Fields>;
  boards_bool_exp: Boards_Bool_Exp;
  boards_constraint: Boards_Constraint;
  boards_insert_input: Boards_Insert_Input;
  boards_max_fields: ResolverTypeWrapper<Boards_Max_Fields>;
  boards_min_fields: ResolverTypeWrapper<Boards_Min_Fields>;
  boards_mutation_response: ResolverTypeWrapper<Boards_Mutation_Response>;
  boards_on_conflict: Boards_On_Conflict;
  boards_order_by: Boards_Order_By;
  boards_pk_columns_input: Boards_Pk_Columns_Input;
  boards_select_column: Boards_Select_Column;
  boards_set_input: Boards_Set_Input;
  boards_update_column: Boards_Update_Column;
  boards_users: ResolverTypeWrapper<Boards_Users>;
  boards_users_aggregate: ResolverTypeWrapper<Boards_Users_Aggregate>;
  boards_users_aggregate_fields: ResolverTypeWrapper<Boards_Users_Aggregate_Fields>;
  boards_users_bool_exp: Boards_Users_Bool_Exp;
  boards_users_constraint: Boards_Users_Constraint;
  boards_users_insert_input: Boards_Users_Insert_Input;
  boards_users_max_fields: ResolverTypeWrapper<Boards_Users_Max_Fields>;
  boards_users_min_fields: ResolverTypeWrapper<Boards_Users_Min_Fields>;
  boards_users_mutation_response: ResolverTypeWrapper<Boards_Users_Mutation_Response>;
  boards_users_on_conflict: Boards_Users_On_Conflict;
  boards_users_order_by: Boards_Users_Order_By;
  boards_users_pk_columns_input: Boards_Users_Pk_Columns_Input;
  boards_users_select_column: Boards_Users_Select_Column;
  boards_users_set_input: Boards_Users_Set_Input;
  boards_users_update_column: Boards_Users_Update_Column;
  bpchar: ResolverTypeWrapper<Scalars['bpchar']>;
  bpchar_comparison_exp: Bpchar_Comparison_Exp;
  cards: ResolverTypeWrapper<Cards>;
  cards_aggregate: ResolverTypeWrapper<Cards_Aggregate>;
  cards_aggregate_fields: ResolverTypeWrapper<Cards_Aggregate_Fields>;
  cards_avg_fields: ResolverTypeWrapper<Cards_Avg_Fields>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  cards_bool_exp: Cards_Bool_Exp;
  cards_constraint: Cards_Constraint;
  cards_inc_input: Cards_Inc_Input;
  cards_insert_input: Cards_Insert_Input;
  cards_max_fields: ResolverTypeWrapper<Cards_Max_Fields>;
  cards_min_fields: ResolverTypeWrapper<Cards_Min_Fields>;
  cards_mutation_response: ResolverTypeWrapper<Cards_Mutation_Response>;
  cards_on_conflict: Cards_On_Conflict;
  cards_order_by: Cards_Order_By;
  cards_pk_columns_input: Cards_Pk_Columns_Input;
  cards_select_column: Cards_Select_Column;
  cards_set_input: Cards_Set_Input;
  cards_stddev_fields: ResolverTypeWrapper<Cards_Stddev_Fields>;
  cards_stddev_pop_fields: ResolverTypeWrapper<Cards_Stddev_Pop_Fields>;
  cards_stddev_samp_fields: ResolverTypeWrapper<Cards_Stddev_Samp_Fields>;
  cards_sum_fields: ResolverTypeWrapper<Cards_Sum_Fields>;
  cards_update_column: Cards_Update_Column;
  cards_var_pop_fields: ResolverTypeWrapper<Cards_Var_Pop_Fields>;
  cards_var_samp_fields: ResolverTypeWrapper<Cards_Var_Samp_Fields>;
  cards_variance_fields: ResolverTypeWrapper<Cards_Variance_Fields>;
  lists: ResolverTypeWrapper<Lists>;
  lists_aggregate: ResolverTypeWrapper<Lists_Aggregate>;
  lists_aggregate_fields: ResolverTypeWrapper<Lists_Aggregate_Fields>;
  lists_avg_fields: ResolverTypeWrapper<Lists_Avg_Fields>;
  lists_bool_exp: Lists_Bool_Exp;
  lists_constraint: Lists_Constraint;
  lists_inc_input: Lists_Inc_Input;
  lists_insert_input: Lists_Insert_Input;
  lists_max_fields: ResolverTypeWrapper<Lists_Max_Fields>;
  lists_min_fields: ResolverTypeWrapper<Lists_Min_Fields>;
  lists_mutation_response: ResolverTypeWrapper<Lists_Mutation_Response>;
  lists_on_conflict: Lists_On_Conflict;
  lists_order_by: Lists_Order_By;
  lists_pk_columns_input: Lists_Pk_Columns_Input;
  lists_select_column: Lists_Select_Column;
  lists_set_input: Lists_Set_Input;
  lists_stddev_fields: ResolverTypeWrapper<Lists_Stddev_Fields>;
  lists_stddev_pop_fields: ResolverTypeWrapper<Lists_Stddev_Pop_Fields>;
  lists_stddev_samp_fields: ResolverTypeWrapper<Lists_Stddev_Samp_Fields>;
  lists_sum_fields: ResolverTypeWrapper<Lists_Sum_Fields>;
  lists_update_column: Lists_Update_Column;
  lists_var_pop_fields: ResolverTypeWrapper<Lists_Var_Pop_Fields>;
  lists_var_samp_fields: ResolverTypeWrapper<Lists_Var_Samp_Fields>;
  lists_variance_fields: ResolverTypeWrapper<Lists_Variance_Fields>;
  mutation_root: ResolverTypeWrapper<{}>;
  numeric: ResolverTypeWrapper<Scalars['numeric']>;
  numeric_comparison_exp: Numeric_Comparison_Exp;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  sessions: ResolverTypeWrapper<Sessions>;
  sessions_aggregate: ResolverTypeWrapper<Sessions_Aggregate>;
  sessions_aggregate_fields: ResolverTypeWrapper<Sessions_Aggregate_Fields>;
  sessions_bool_exp: Sessions_Bool_Exp;
  sessions_constraint: Sessions_Constraint;
  sessions_insert_input: Sessions_Insert_Input;
  sessions_max_fields: ResolverTypeWrapper<Sessions_Max_Fields>;
  sessions_min_fields: ResolverTypeWrapper<Sessions_Min_Fields>;
  sessions_mutation_response: ResolverTypeWrapper<Sessions_Mutation_Response>;
  sessions_on_conflict: Sessions_On_Conflict;
  sessions_order_by: Sessions_Order_By;
  sessions_pk_columns_input: Sessions_Pk_Columns_Input;
  sessions_select_column: Sessions_Select_Column;
  sessions_set_input: Sessions_Set_Input;
  sessions_update_column: Sessions_Update_Column;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  users: ResolverTypeWrapper<Users>;
  users_aggregate: ResolverTypeWrapper<Users_Aggregate>;
  users_aggregate_fields: ResolverTypeWrapper<Users_Aggregate_Fields>;
  users_bool_exp: Users_Bool_Exp;
  users_constraint: Users_Constraint;
  users_insert_input: Users_Insert_Input;
  users_max_fields: ResolverTypeWrapper<Users_Max_Fields>;
  users_min_fields: ResolverTypeWrapper<Users_Min_Fields>;
  users_mutation_response: ResolverTypeWrapper<Users_Mutation_Response>;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_select_column: Users_Select_Column;
  users_set_input: Users_Set_Input;
  users_update_column: Users_Update_Column;
  uuid: ResolverTypeWrapper<Scalars['uuid']>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
  verification_requests: ResolverTypeWrapper<Verification_Requests>;
  verification_requests_aggregate: ResolverTypeWrapper<Verification_Requests_Aggregate>;
  verification_requests_aggregate_fields: ResolverTypeWrapper<Verification_Requests_Aggregate_Fields>;
  verification_requests_bool_exp: Verification_Requests_Bool_Exp;
  verification_requests_constraint: Verification_Requests_Constraint;
  verification_requests_insert_input: Verification_Requests_Insert_Input;
  verification_requests_max_fields: ResolverTypeWrapper<Verification_Requests_Max_Fields>;
  verification_requests_min_fields: ResolverTypeWrapper<Verification_Requests_Min_Fields>;
  verification_requests_mutation_response: ResolverTypeWrapper<Verification_Requests_Mutation_Response>;
  verification_requests_on_conflict: Verification_Requests_On_Conflict;
  verification_requests_order_by: Verification_Requests_Order_By;
  verification_requests_pk_columns_input: Verification_Requests_Pk_Columns_Input;
  verification_requests_select_column: Verification_Requests_Select_Column;
  verification_requests_set_input: Verification_Requests_Set_Input;
  verification_requests_update_column: Verification_Requests_Update_Column;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String_comparison_exp: String_Comparison_Exp;
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  accounts: Accounts;
  accounts_aggregate: Accounts_Aggregate;
  accounts_aggregate_fields: Accounts_Aggregate_Fields;
  Int: Scalars['Int'];
  accounts_bool_exp: Accounts_Bool_Exp;
  accounts_insert_input: Accounts_Insert_Input;
  accounts_max_fields: Accounts_Max_Fields;
  accounts_min_fields: Accounts_Min_Fields;
  accounts_mutation_response: Accounts_Mutation_Response;
  accounts_on_conflict: Accounts_On_Conflict;
  accounts_order_by: Accounts_Order_By;
  accounts_pk_columns_input: Accounts_Pk_Columns_Input;
  accounts_set_input: Accounts_Set_Input;
  boards: Boards;
  boards_aggregate: Boards_Aggregate;
  boards_aggregate_fields: Boards_Aggregate_Fields;
  boards_bool_exp: Boards_Bool_Exp;
  boards_insert_input: Boards_Insert_Input;
  boards_max_fields: Boards_Max_Fields;
  boards_min_fields: Boards_Min_Fields;
  boards_mutation_response: Boards_Mutation_Response;
  boards_on_conflict: Boards_On_Conflict;
  boards_order_by: Boards_Order_By;
  boards_pk_columns_input: Boards_Pk_Columns_Input;
  boards_set_input: Boards_Set_Input;
  boards_users: Boards_Users;
  boards_users_aggregate: Boards_Users_Aggregate;
  boards_users_aggregate_fields: Boards_Users_Aggregate_Fields;
  boards_users_bool_exp: Boards_Users_Bool_Exp;
  boards_users_insert_input: Boards_Users_Insert_Input;
  boards_users_max_fields: Boards_Users_Max_Fields;
  boards_users_min_fields: Boards_Users_Min_Fields;
  boards_users_mutation_response: Boards_Users_Mutation_Response;
  boards_users_on_conflict: Boards_Users_On_Conflict;
  boards_users_order_by: Boards_Users_Order_By;
  boards_users_pk_columns_input: Boards_Users_Pk_Columns_Input;
  boards_users_set_input: Boards_Users_Set_Input;
  bpchar: Scalars['bpchar'];
  bpchar_comparison_exp: Bpchar_Comparison_Exp;
  cards: Cards;
  cards_aggregate: Cards_Aggregate;
  cards_aggregate_fields: Cards_Aggregate_Fields;
  cards_avg_fields: Cards_Avg_Fields;
  Float: Scalars['Float'];
  cards_bool_exp: Cards_Bool_Exp;
  cards_inc_input: Cards_Inc_Input;
  cards_insert_input: Cards_Insert_Input;
  cards_max_fields: Cards_Max_Fields;
  cards_min_fields: Cards_Min_Fields;
  cards_mutation_response: Cards_Mutation_Response;
  cards_on_conflict: Cards_On_Conflict;
  cards_order_by: Cards_Order_By;
  cards_pk_columns_input: Cards_Pk_Columns_Input;
  cards_set_input: Cards_Set_Input;
  cards_stddev_fields: Cards_Stddev_Fields;
  cards_stddev_pop_fields: Cards_Stddev_Pop_Fields;
  cards_stddev_samp_fields: Cards_Stddev_Samp_Fields;
  cards_sum_fields: Cards_Sum_Fields;
  cards_var_pop_fields: Cards_Var_Pop_Fields;
  cards_var_samp_fields: Cards_Var_Samp_Fields;
  cards_variance_fields: Cards_Variance_Fields;
  lists: Lists;
  lists_aggregate: Lists_Aggregate;
  lists_aggregate_fields: Lists_Aggregate_Fields;
  lists_avg_fields: Lists_Avg_Fields;
  lists_bool_exp: Lists_Bool_Exp;
  lists_inc_input: Lists_Inc_Input;
  lists_insert_input: Lists_Insert_Input;
  lists_max_fields: Lists_Max_Fields;
  lists_min_fields: Lists_Min_Fields;
  lists_mutation_response: Lists_Mutation_Response;
  lists_on_conflict: Lists_On_Conflict;
  lists_order_by: Lists_Order_By;
  lists_pk_columns_input: Lists_Pk_Columns_Input;
  lists_set_input: Lists_Set_Input;
  lists_stddev_fields: Lists_Stddev_Fields;
  lists_stddev_pop_fields: Lists_Stddev_Pop_Fields;
  lists_stddev_samp_fields: Lists_Stddev_Samp_Fields;
  lists_sum_fields: Lists_Sum_Fields;
  lists_var_pop_fields: Lists_Var_Pop_Fields;
  lists_var_samp_fields: Lists_Var_Samp_Fields;
  lists_variance_fields: Lists_Variance_Fields;
  mutation_root: {};
  numeric: Scalars['numeric'];
  numeric_comparison_exp: Numeric_Comparison_Exp;
  query_root: {};
  sessions: Sessions;
  sessions_aggregate: Sessions_Aggregate;
  sessions_aggregate_fields: Sessions_Aggregate_Fields;
  sessions_bool_exp: Sessions_Bool_Exp;
  sessions_insert_input: Sessions_Insert_Input;
  sessions_max_fields: Sessions_Max_Fields;
  sessions_min_fields: Sessions_Min_Fields;
  sessions_mutation_response: Sessions_Mutation_Response;
  sessions_on_conflict: Sessions_On_Conflict;
  sessions_order_by: Sessions_Order_By;
  sessions_pk_columns_input: Sessions_Pk_Columns_Input;
  sessions_set_input: Sessions_Set_Input;
  subscription_root: {};
  timestamptz: Scalars['timestamptz'];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  users: Users;
  users_aggregate: Users_Aggregate;
  users_aggregate_fields: Users_Aggregate_Fields;
  users_bool_exp: Users_Bool_Exp;
  users_insert_input: Users_Insert_Input;
  users_max_fields: Users_Max_Fields;
  users_min_fields: Users_Min_Fields;
  users_mutation_response: Users_Mutation_Response;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_set_input: Users_Set_Input;
  uuid: Scalars['uuid'];
  uuid_comparison_exp: Uuid_Comparison_Exp;
  verification_requests: Verification_Requests;
  verification_requests_aggregate: Verification_Requests_Aggregate;
  verification_requests_aggregate_fields: Verification_Requests_Aggregate_Fields;
  verification_requests_bool_exp: Verification_Requests_Bool_Exp;
  verification_requests_insert_input: Verification_Requests_Insert_Input;
  verification_requests_max_fields: Verification_Requests_Max_Fields;
  verification_requests_min_fields: Verification_Requests_Min_Fields;
  verification_requests_mutation_response: Verification_Requests_Mutation_Response;
  verification_requests_on_conflict: Verification_Requests_On_Conflict;
  verification_requests_order_by: Verification_Requests_Order_By;
  verification_requests_pk_columns_input: Verification_Requests_Pk_Columns_Input;
  verification_requests_set_input: Verification_Requests_Set_Input;
};

export type CachedDirectiveArgs = {   ttl?: Scalars['Int'];
  refresh?: Scalars['Boolean']; };

export type CachedDirectiveResolver<Result, Parent, ContextType = any, Args = CachedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccountsResolvers<ContextType = any, ParentType extends ResolversParentTypes['accounts'] = ResolversParentTypes['accounts']> = {
  access_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  access_token_expires?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  compound_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  provider_account_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refresh_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['accounts_aggregate'] = ResolversParentTypes['accounts_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['accounts_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['accounts']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['accounts_aggregate_fields'] = ResolversParentTypes['accounts_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Accounts_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['accounts_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['accounts_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['accounts_max_fields'] = ResolversParentTypes['accounts_max_fields']> = {
  access_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  access_token_expires?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  compound_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  provider_account_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refresh_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['accounts_min_fields'] = ResolversParentTypes['accounts_min_fields']> = {
  access_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  access_token_expires?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  compound_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  provider_account_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refresh_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['accounts_mutation_response'] = ResolversParentTypes['accounts_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['accounts']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BoardsResolvers<ContextType = any, ParentType extends ResolversParentTypes['boards'] = ResolversParentTypes['boards']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Boards_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['boards_aggregate'] = ResolversParentTypes['boards_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['boards_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['boards']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Boards_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['boards_aggregate_fields'] = ResolversParentTypes['boards_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Boards_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['boards_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['boards_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Boards_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['boards_max_fields'] = ResolversParentTypes['boards_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Boards_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['boards_min_fields'] = ResolversParentTypes['boards_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Boards_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['boards_mutation_response'] = ResolversParentTypes['boards_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['boards']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Boards_UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['boards_users'] = ResolversParentTypes['boards_users']> = {
  board_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Boards_Users_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['boards_users_aggregate'] = ResolversParentTypes['boards_users_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['boards_users_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['boards_users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Boards_Users_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['boards_users_aggregate_fields'] = ResolversParentTypes['boards_users_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Boards_Users_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['boards_users_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['boards_users_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Boards_Users_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['boards_users_max_fields'] = ResolversParentTypes['boards_users_max_fields']> = {
  board_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Boards_Users_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['boards_users_min_fields'] = ResolversParentTypes['boards_users_min_fields']> = {
  board_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Boards_Users_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['boards_users_mutation_response'] = ResolversParentTypes['boards_users_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['boards_users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BpcharScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['bpchar'], any> {
  name: 'bpchar';
}

export type CardsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cards'] = ResolversParentTypes['cards']> = {
  board_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  list_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Cards_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['cards_aggregate'] = ResolversParentTypes['cards_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['cards_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['cards']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Cards_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cards_aggregate_fields'] = ResolversParentTypes['cards_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['cards_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Cards_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['cards_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['cards_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['cards_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['cards_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['cards_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['cards_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['cards_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['cards_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['cards_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Cards_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cards_avg_fields'] = ResolversParentTypes['cards_avg_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Cards_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cards_max_fields'] = ResolversParentTypes['cards_max_fields']> = {
  board_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  list_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Cards_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cards_min_fields'] = ResolversParentTypes['cards_min_fields']> = {
  board_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  list_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Cards_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['cards_mutation_response'] = ResolversParentTypes['cards_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['cards']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Cards_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cards_stddev_fields'] = ResolversParentTypes['cards_stddev_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Cards_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cards_stddev_pop_fields'] = ResolversParentTypes['cards_stddev_pop_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Cards_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cards_stddev_samp_fields'] = ResolversParentTypes['cards_stddev_samp_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Cards_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cards_sum_fields'] = ResolversParentTypes['cards_sum_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Cards_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cards_var_pop_fields'] = ResolversParentTypes['cards_var_pop_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Cards_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cards_var_samp_fields'] = ResolversParentTypes['cards_var_samp_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Cards_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cards_variance_fields'] = ResolversParentTypes['cards_variance_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListsResolvers<ContextType = any, ParentType extends ResolversParentTypes['lists'] = ResolversParentTypes['lists']> = {
  board_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Lists_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['lists_aggregate'] = ResolversParentTypes['lists_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['lists_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['lists']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Lists_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['lists_aggregate_fields'] = ResolversParentTypes['lists_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['lists_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Lists_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['lists_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['lists_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['lists_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['lists_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['lists_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['lists_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['lists_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['lists_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['lists_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Lists_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['lists_avg_fields'] = ResolversParentTypes['lists_avg_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Lists_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['lists_max_fields'] = ResolversParentTypes['lists_max_fields']> = {
  board_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Lists_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['lists_min_fields'] = ResolversParentTypes['lists_min_fields']> = {
  board_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Lists_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['lists_mutation_response'] = ResolversParentTypes['lists_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['lists']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Lists_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['lists_stddev_fields'] = ResolversParentTypes['lists_stddev_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Lists_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['lists_stddev_pop_fields'] = ResolversParentTypes['lists_stddev_pop_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Lists_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['lists_stddev_samp_fields'] = ResolversParentTypes['lists_stddev_samp_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Lists_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['lists_sum_fields'] = ResolversParentTypes['lists_sum_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Lists_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['lists_var_pop_fields'] = ResolversParentTypes['lists_var_pop_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Lists_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['lists_var_samp_fields'] = ResolversParentTypes['lists_var_samp_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Lists_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['lists_variance_fields'] = ResolversParentTypes['lists_variance_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  delete_accounts?: Resolver<Maybe<ResolversTypes['accounts_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_AccountsArgs, 'where'>>;
  delete_accounts_by_pk?: Resolver<Maybe<ResolversTypes['accounts']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Accounts_By_PkArgs, 'id'>>;
  delete_boards?: Resolver<Maybe<ResolversTypes['boards_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_BoardsArgs, 'where'>>;
  delete_boards_by_pk?: Resolver<Maybe<ResolversTypes['boards']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Boards_By_PkArgs, 'id'>>;
  delete_boards_users?: Resolver<Maybe<ResolversTypes['boards_users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Boards_UsersArgs, 'where'>>;
  delete_boards_users_by_pk?: Resolver<Maybe<ResolversTypes['boards_users']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Boards_Users_By_PkArgs, 'id'>>;
  delete_cards?: Resolver<Maybe<ResolversTypes['cards_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_CardsArgs, 'where'>>;
  delete_cards_by_pk?: Resolver<Maybe<ResolversTypes['cards']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Cards_By_PkArgs, 'id'>>;
  delete_lists?: Resolver<Maybe<ResolversTypes['lists_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_ListsArgs, 'where'>>;
  delete_lists_by_pk?: Resolver<Maybe<ResolversTypes['lists']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Lists_By_PkArgs, 'id'>>;
  delete_sessions?: Resolver<Maybe<ResolversTypes['sessions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_SessionsArgs, 'where'>>;
  delete_sessions_by_pk?: Resolver<Maybe<ResolversTypes['sessions']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Sessions_By_PkArgs, 'id'>>;
  delete_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_UsersArgs, 'where'>>;
  delete_users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Users_By_PkArgs, 'id'>>;
  delete_verification_requests?: Resolver<Maybe<ResolversTypes['verification_requests_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Verification_RequestsArgs, 'where'>>;
  delete_verification_requests_by_pk?: Resolver<Maybe<ResolversTypes['verification_requests']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Verification_Requests_By_PkArgs, 'id'>>;
  insert_accounts?: Resolver<Maybe<ResolversTypes['accounts_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_AccountsArgs, 'objects'>>;
  insert_accounts_one?: Resolver<Maybe<ResolversTypes['accounts']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Accounts_OneArgs, 'object'>>;
  insert_boards?: Resolver<Maybe<ResolversTypes['boards_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_BoardsArgs, 'objects'>>;
  insert_boards_one?: Resolver<Maybe<ResolversTypes['boards']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Boards_OneArgs, 'object'>>;
  insert_boards_users?: Resolver<Maybe<ResolversTypes['boards_users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Boards_UsersArgs, 'objects'>>;
  insert_boards_users_one?: Resolver<Maybe<ResolversTypes['boards_users']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Boards_Users_OneArgs, 'object'>>;
  insert_cards?: Resolver<Maybe<ResolversTypes['cards_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_CardsArgs, 'objects'>>;
  insert_cards_one?: Resolver<Maybe<ResolversTypes['cards']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Cards_OneArgs, 'object'>>;
  insert_lists?: Resolver<Maybe<ResolversTypes['lists_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_ListsArgs, 'objects'>>;
  insert_lists_one?: Resolver<Maybe<ResolversTypes['lists']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Lists_OneArgs, 'object'>>;
  insert_sessions?: Resolver<Maybe<ResolversTypes['sessions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_SessionsArgs, 'objects'>>;
  insert_sessions_one?: Resolver<Maybe<ResolversTypes['sessions']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Sessions_OneArgs, 'object'>>;
  insert_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_UsersArgs, 'objects'>>;
  insert_users_one?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Users_OneArgs, 'object'>>;
  insert_verification_requests?: Resolver<Maybe<ResolversTypes['verification_requests_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Verification_RequestsArgs, 'objects'>>;
  insert_verification_requests_one?: Resolver<Maybe<ResolversTypes['verification_requests']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Verification_Requests_OneArgs, 'object'>>;
  update_accounts?: Resolver<Maybe<ResolversTypes['accounts_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_AccountsArgs, 'where'>>;
  update_accounts_by_pk?: Resolver<Maybe<ResolversTypes['accounts']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Accounts_By_PkArgs, 'pk_columns'>>;
  update_boards?: Resolver<Maybe<ResolversTypes['boards_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_BoardsArgs, 'where'>>;
  update_boards_by_pk?: Resolver<Maybe<ResolversTypes['boards']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Boards_By_PkArgs, 'pk_columns'>>;
  update_boards_users?: Resolver<Maybe<ResolversTypes['boards_users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Boards_UsersArgs, 'where'>>;
  update_boards_users_by_pk?: Resolver<Maybe<ResolversTypes['boards_users']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Boards_Users_By_PkArgs, 'pk_columns'>>;
  update_cards?: Resolver<Maybe<ResolversTypes['cards_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_CardsArgs, 'where'>>;
  update_cards_by_pk?: Resolver<Maybe<ResolversTypes['cards']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Cards_By_PkArgs, 'pk_columns'>>;
  update_lists?: Resolver<Maybe<ResolversTypes['lists_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_ListsArgs, 'where'>>;
  update_lists_by_pk?: Resolver<Maybe<ResolversTypes['lists']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Lists_By_PkArgs, 'pk_columns'>>;
  update_sessions?: Resolver<Maybe<ResolversTypes['sessions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_SessionsArgs, 'where'>>;
  update_sessions_by_pk?: Resolver<Maybe<ResolversTypes['sessions']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Sessions_By_PkArgs, 'pk_columns'>>;
  update_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_UsersArgs, 'where'>>;
  update_users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Users_By_PkArgs, 'pk_columns'>>;
  update_verification_requests?: Resolver<Maybe<ResolversTypes['verification_requests_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Verification_RequestsArgs, 'where'>>;
  update_verification_requests_by_pk?: Resolver<Maybe<ResolversTypes['verification_requests']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Verification_Requests_By_PkArgs, 'pk_columns'>>;
};

export interface NumericScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['numeric'], any> {
  name: 'numeric';
}

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  accounts?: Resolver<Array<ResolversTypes['accounts']>, ParentType, ContextType, RequireFields<Query_RootAccountsArgs, never>>;
  accounts_aggregate?: Resolver<ResolversTypes['accounts_aggregate'], ParentType, ContextType, RequireFields<Query_RootAccounts_AggregateArgs, never>>;
  accounts_by_pk?: Resolver<Maybe<ResolversTypes['accounts']>, ParentType, ContextType, RequireFields<Query_RootAccounts_By_PkArgs, 'id'>>;
  boards?: Resolver<Array<ResolversTypes['boards']>, ParentType, ContextType, RequireFields<Query_RootBoardsArgs, never>>;
  boards_aggregate?: Resolver<ResolversTypes['boards_aggregate'], ParentType, ContextType, RequireFields<Query_RootBoards_AggregateArgs, never>>;
  boards_by_pk?: Resolver<Maybe<ResolversTypes['boards']>, ParentType, ContextType, RequireFields<Query_RootBoards_By_PkArgs, 'id'>>;
  boards_users?: Resolver<Array<ResolversTypes['boards_users']>, ParentType, ContextType, RequireFields<Query_RootBoards_UsersArgs, never>>;
  boards_users_aggregate?: Resolver<ResolversTypes['boards_users_aggregate'], ParentType, ContextType, RequireFields<Query_RootBoards_Users_AggregateArgs, never>>;
  boards_users_by_pk?: Resolver<Maybe<ResolversTypes['boards_users']>, ParentType, ContextType, RequireFields<Query_RootBoards_Users_By_PkArgs, 'id'>>;
  cards?: Resolver<Array<ResolversTypes['cards']>, ParentType, ContextType, RequireFields<Query_RootCardsArgs, never>>;
  cards_aggregate?: Resolver<ResolversTypes['cards_aggregate'], ParentType, ContextType, RequireFields<Query_RootCards_AggregateArgs, never>>;
  cards_by_pk?: Resolver<Maybe<ResolversTypes['cards']>, ParentType, ContextType, RequireFields<Query_RootCards_By_PkArgs, 'id'>>;
  lists?: Resolver<Array<ResolversTypes['lists']>, ParentType, ContextType, RequireFields<Query_RootListsArgs, never>>;
  lists_aggregate?: Resolver<ResolversTypes['lists_aggregate'], ParentType, ContextType, RequireFields<Query_RootLists_AggregateArgs, never>>;
  lists_by_pk?: Resolver<Maybe<ResolversTypes['lists']>, ParentType, ContextType, RequireFields<Query_RootLists_By_PkArgs, 'id'>>;
  sessions?: Resolver<Array<ResolversTypes['sessions']>, ParentType, ContextType, RequireFields<Query_RootSessionsArgs, never>>;
  sessions_aggregate?: Resolver<ResolversTypes['sessions_aggregate'], ParentType, ContextType, RequireFields<Query_RootSessions_AggregateArgs, never>>;
  sessions_by_pk?: Resolver<Maybe<ResolversTypes['sessions']>, ParentType, ContextType, RequireFields<Query_RootSessions_By_PkArgs, 'id'>>;
  users?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Query_RootUsersArgs, never>>;
  users_aggregate?: Resolver<ResolversTypes['users_aggregate'], ParentType, ContextType, RequireFields<Query_RootUsers_AggregateArgs, never>>;
  users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Query_RootUsers_By_PkArgs, 'id'>>;
  verification_requests?: Resolver<Array<ResolversTypes['verification_requests']>, ParentType, ContextType, RequireFields<Query_RootVerification_RequestsArgs, never>>;
  verification_requests_aggregate?: Resolver<ResolversTypes['verification_requests_aggregate'], ParentType, ContextType, RequireFields<Query_RootVerification_Requests_AggregateArgs, never>>;
  verification_requests_by_pk?: Resolver<Maybe<ResolversTypes['verification_requests']>, ParentType, ContextType, RequireFields<Query_RootVerification_Requests_By_PkArgs, 'id'>>;
};

export type SessionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['sessions'] = ResolversParentTypes['sessions']> = {
  access_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  expires?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  session_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['sessions_aggregate'] = ResolversParentTypes['sessions_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['sessions_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['sessions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['sessions_aggregate_fields'] = ResolversParentTypes['sessions_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Sessions_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['sessions_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['sessions_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['sessions_max_fields'] = ResolversParentTypes['sessions_max_fields']> = {
  access_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  expires?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  session_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['sessions_min_fields'] = ResolversParentTypes['sessions_min_fields']> = {
  access_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  expires?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  session_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['sessions_mutation_response'] = ResolversParentTypes['sessions_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['sessions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  accounts?: SubscriptionResolver<Array<ResolversTypes['accounts']>, "accounts", ParentType, ContextType, RequireFields<Subscription_RootAccountsArgs, never>>;
  accounts_aggregate?: SubscriptionResolver<ResolversTypes['accounts_aggregate'], "accounts_aggregate", ParentType, ContextType, RequireFields<Subscription_RootAccounts_AggregateArgs, never>>;
  accounts_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['accounts']>, "accounts_by_pk", ParentType, ContextType, RequireFields<Subscription_RootAccounts_By_PkArgs, 'id'>>;
  boards?: SubscriptionResolver<Array<ResolversTypes['boards']>, "boards", ParentType, ContextType, RequireFields<Subscription_RootBoardsArgs, never>>;
  boards_aggregate?: SubscriptionResolver<ResolversTypes['boards_aggregate'], "boards_aggregate", ParentType, ContextType, RequireFields<Subscription_RootBoards_AggregateArgs, never>>;
  boards_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['boards']>, "boards_by_pk", ParentType, ContextType, RequireFields<Subscription_RootBoards_By_PkArgs, 'id'>>;
  boards_users?: SubscriptionResolver<Array<ResolversTypes['boards_users']>, "boards_users", ParentType, ContextType, RequireFields<Subscription_RootBoards_UsersArgs, never>>;
  boards_users_aggregate?: SubscriptionResolver<ResolversTypes['boards_users_aggregate'], "boards_users_aggregate", ParentType, ContextType, RequireFields<Subscription_RootBoards_Users_AggregateArgs, never>>;
  boards_users_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['boards_users']>, "boards_users_by_pk", ParentType, ContextType, RequireFields<Subscription_RootBoards_Users_By_PkArgs, 'id'>>;
  cards?: SubscriptionResolver<Array<ResolversTypes['cards']>, "cards", ParentType, ContextType, RequireFields<Subscription_RootCardsArgs, never>>;
  cards_aggregate?: SubscriptionResolver<ResolversTypes['cards_aggregate'], "cards_aggregate", ParentType, ContextType, RequireFields<Subscription_RootCards_AggregateArgs, never>>;
  cards_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['cards']>, "cards_by_pk", ParentType, ContextType, RequireFields<Subscription_RootCards_By_PkArgs, 'id'>>;
  lists?: SubscriptionResolver<Array<ResolversTypes['lists']>, "lists", ParentType, ContextType, RequireFields<Subscription_RootListsArgs, never>>;
  lists_aggregate?: SubscriptionResolver<ResolversTypes['lists_aggregate'], "lists_aggregate", ParentType, ContextType, RequireFields<Subscription_RootLists_AggregateArgs, never>>;
  lists_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['lists']>, "lists_by_pk", ParentType, ContextType, RequireFields<Subscription_RootLists_By_PkArgs, 'id'>>;
  sessions?: SubscriptionResolver<Array<ResolversTypes['sessions']>, "sessions", ParentType, ContextType, RequireFields<Subscription_RootSessionsArgs, never>>;
  sessions_aggregate?: SubscriptionResolver<ResolversTypes['sessions_aggregate'], "sessions_aggregate", ParentType, ContextType, RequireFields<Subscription_RootSessions_AggregateArgs, never>>;
  sessions_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['sessions']>, "sessions_by_pk", ParentType, ContextType, RequireFields<Subscription_RootSessions_By_PkArgs, 'id'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['users']>, "users", ParentType, ContextType, RequireFields<Subscription_RootUsersArgs, never>>;
  users_aggregate?: SubscriptionResolver<ResolversTypes['users_aggregate'], "users_aggregate", ParentType, ContextType, RequireFields<Subscription_RootUsers_AggregateArgs, never>>;
  users_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['users']>, "users_by_pk", ParentType, ContextType, RequireFields<Subscription_RootUsers_By_PkArgs, 'id'>>;
  verification_requests?: SubscriptionResolver<Array<ResolversTypes['verification_requests']>, "verification_requests", ParentType, ContextType, RequireFields<Subscription_RootVerification_RequestsArgs, never>>;
  verification_requests_aggregate?: SubscriptionResolver<ResolversTypes['verification_requests_aggregate'], "verification_requests_aggregate", ParentType, ContextType, RequireFields<Subscription_RootVerification_Requests_AggregateArgs, never>>;
  verification_requests_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['verification_requests']>, "verification_requests_by_pk", ParentType, ContextType, RequireFields<Subscription_RootVerification_Requests_By_PkArgs, 'id'>>;
};

export interface TimestamptzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export type UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['users'] = ResolversParentTypes['users']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email_verified?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['bpchar']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  theme?: Resolver<ResolversTypes['bpchar'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_aggregate'] = ResolversParentTypes['users_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['users_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_aggregate_fields'] = ResolversParentTypes['users_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Users_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['users_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['users_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_max_fields'] = ResolversParentTypes['users_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email_verified?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['bpchar']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  theme?: Resolver<Maybe<ResolversTypes['bpchar']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_min_fields'] = ResolversParentTypes['users_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email_verified?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['bpchar']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  theme?: Resolver<Maybe<ResolversTypes['bpchar']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_mutation_response'] = ResolversParentTypes['users_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type Verification_RequestsResolvers<ContextType = any, ParentType extends ResolversParentTypes['verification_requests'] = ResolversParentTypes['verification_requests']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  expires?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['verification_requests_aggregate'] = ResolversParentTypes['verification_requests_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['verification_requests_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['verification_requests']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['verification_requests_aggregate_fields'] = ResolversParentTypes['verification_requests_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Verification_Requests_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['verification_requests_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['verification_requests_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['verification_requests_max_fields'] = ResolversParentTypes['verification_requests_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  expires?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['verification_requests_min_fields'] = ResolversParentTypes['verification_requests_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  expires?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Requests_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['verification_requests_mutation_response'] = ResolversParentTypes['verification_requests_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['verification_requests']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  accounts?: AccountsResolvers<ContextType>;
  accounts_aggregate?: Accounts_AggregateResolvers<ContextType>;
  accounts_aggregate_fields?: Accounts_Aggregate_FieldsResolvers<ContextType>;
  accounts_max_fields?: Accounts_Max_FieldsResolvers<ContextType>;
  accounts_min_fields?: Accounts_Min_FieldsResolvers<ContextType>;
  accounts_mutation_response?: Accounts_Mutation_ResponseResolvers<ContextType>;
  boards?: BoardsResolvers<ContextType>;
  boards_aggregate?: Boards_AggregateResolvers<ContextType>;
  boards_aggregate_fields?: Boards_Aggregate_FieldsResolvers<ContextType>;
  boards_max_fields?: Boards_Max_FieldsResolvers<ContextType>;
  boards_min_fields?: Boards_Min_FieldsResolvers<ContextType>;
  boards_mutation_response?: Boards_Mutation_ResponseResolvers<ContextType>;
  boards_users?: Boards_UsersResolvers<ContextType>;
  boards_users_aggregate?: Boards_Users_AggregateResolvers<ContextType>;
  boards_users_aggregate_fields?: Boards_Users_Aggregate_FieldsResolvers<ContextType>;
  boards_users_max_fields?: Boards_Users_Max_FieldsResolvers<ContextType>;
  boards_users_min_fields?: Boards_Users_Min_FieldsResolvers<ContextType>;
  boards_users_mutation_response?: Boards_Users_Mutation_ResponseResolvers<ContextType>;
  bpchar?: GraphQLScalarType;
  cards?: CardsResolvers<ContextType>;
  cards_aggregate?: Cards_AggregateResolvers<ContextType>;
  cards_aggregate_fields?: Cards_Aggregate_FieldsResolvers<ContextType>;
  cards_avg_fields?: Cards_Avg_FieldsResolvers<ContextType>;
  cards_max_fields?: Cards_Max_FieldsResolvers<ContextType>;
  cards_min_fields?: Cards_Min_FieldsResolvers<ContextType>;
  cards_mutation_response?: Cards_Mutation_ResponseResolvers<ContextType>;
  cards_stddev_fields?: Cards_Stddev_FieldsResolvers<ContextType>;
  cards_stddev_pop_fields?: Cards_Stddev_Pop_FieldsResolvers<ContextType>;
  cards_stddev_samp_fields?: Cards_Stddev_Samp_FieldsResolvers<ContextType>;
  cards_sum_fields?: Cards_Sum_FieldsResolvers<ContextType>;
  cards_var_pop_fields?: Cards_Var_Pop_FieldsResolvers<ContextType>;
  cards_var_samp_fields?: Cards_Var_Samp_FieldsResolvers<ContextType>;
  cards_variance_fields?: Cards_Variance_FieldsResolvers<ContextType>;
  lists?: ListsResolvers<ContextType>;
  lists_aggregate?: Lists_AggregateResolvers<ContextType>;
  lists_aggregate_fields?: Lists_Aggregate_FieldsResolvers<ContextType>;
  lists_avg_fields?: Lists_Avg_FieldsResolvers<ContextType>;
  lists_max_fields?: Lists_Max_FieldsResolvers<ContextType>;
  lists_min_fields?: Lists_Min_FieldsResolvers<ContextType>;
  lists_mutation_response?: Lists_Mutation_ResponseResolvers<ContextType>;
  lists_stddev_fields?: Lists_Stddev_FieldsResolvers<ContextType>;
  lists_stddev_pop_fields?: Lists_Stddev_Pop_FieldsResolvers<ContextType>;
  lists_stddev_samp_fields?: Lists_Stddev_Samp_FieldsResolvers<ContextType>;
  lists_sum_fields?: Lists_Sum_FieldsResolvers<ContextType>;
  lists_var_pop_fields?: Lists_Var_Pop_FieldsResolvers<ContextType>;
  lists_var_samp_fields?: Lists_Var_Samp_FieldsResolvers<ContextType>;
  lists_variance_fields?: Lists_Variance_FieldsResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  numeric?: GraphQLScalarType;
  query_root?: Query_RootResolvers<ContextType>;
  sessions?: SessionsResolvers<ContextType>;
  sessions_aggregate?: Sessions_AggregateResolvers<ContextType>;
  sessions_aggregate_fields?: Sessions_Aggregate_FieldsResolvers<ContextType>;
  sessions_max_fields?: Sessions_Max_FieldsResolvers<ContextType>;
  sessions_min_fields?: Sessions_Min_FieldsResolvers<ContextType>;
  sessions_mutation_response?: Sessions_Mutation_ResponseResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
  users?: UsersResolvers<ContextType>;
  users_aggregate?: Users_AggregateResolvers<ContextType>;
  users_aggregate_fields?: Users_Aggregate_FieldsResolvers<ContextType>;
  users_max_fields?: Users_Max_FieldsResolvers<ContextType>;
  users_min_fields?: Users_Min_FieldsResolvers<ContextType>;
  users_mutation_response?: Users_Mutation_ResponseResolvers<ContextType>;
  uuid?: GraphQLScalarType;
  verification_requests?: Verification_RequestsResolvers<ContextType>;
  verification_requests_aggregate?: Verification_Requests_AggregateResolvers<ContextType>;
  verification_requests_aggregate_fields?: Verification_Requests_Aggregate_FieldsResolvers<ContextType>;
  verification_requests_max_fields?: Verification_Requests_Max_FieldsResolvers<ContextType>;
  verification_requests_min_fields?: Verification_Requests_Min_FieldsResolvers<ContextType>;
  verification_requests_mutation_response?: Verification_Requests_Mutation_ResponseResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;