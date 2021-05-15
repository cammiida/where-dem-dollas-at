export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['ID'];
  name: Scalars['String'];
  user: User;
  active: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: Account;
  createUser: User;
};


export type MutationCreateAccountArgs = {
  input: NewAccount;
};


export type MutationCreateUserArgs = {
  input: NewUser;
};

export type NewAccount = {
  name: Scalars['String'];
  userId: Scalars['String'];
};

export type NewUser = {
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  accounts: Array<Account>;
  me?: Maybe<User>;
  users: Array<User>;
};

export type Subscription = {
  __typename?: 'Subscription';
  userAdded: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  accounts: Array<Account>;
};
