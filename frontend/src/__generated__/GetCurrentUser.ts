/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCurrentUser
// ====================================================

export interface GetCurrentUser_me {
  __typename: "User";
  id: string;
  name: string;
}

export interface GetCurrentUser {
  me: GetCurrentUser_me | null;
}
