/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Json: any;
};

export type AddCardCreditsresult = {
  __typename?: 'AddCardCreditsresult';
  amount: Scalars['Int'];
  requestId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCardCredits: AddCardCreditsresult;
  echo: Scalars['String'];
};


export type MutationAddCardCreditsArgs = {
  CVV: Scalars['Int'];
  amount: Scalars['Int'];
  cardNumber: Scalars['Float'];
  expirationDate: Scalars['String'];
};


export type MutationEchoArgs = {
  text: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  debug?: Maybe<Scalars['Json']>;
};

export type DebugQueryVariables = Exact<{ [key: string]: never; }>;


export type DebugQuery = { __typename?: 'Query', debug?: any | null };

export type EchoMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type EchoMutation = { __typename?: 'Mutation', echo: string };

export type AddCardCreditsMutationVariables = Exact<{
  cardNumber: Scalars['Float'];
  expirationDate: Scalars['String'];
  CVV: Scalars['Int'];
  amount: Scalars['Int'];
}>;


export type AddCardCreditsMutation = { __typename?: 'Mutation', addCardCredits: { __typename?: 'AddCardCreditsresult', requestId: string, amount: number } };


export const DebugDocument = gql`
    query Debug {
  debug
}
    `;

/**
 * __useDebugQuery__
 *
 * To run a query within a React component, call `useDebugQuery` and pass it any options that fit your needs.
 * When your component renders, `useDebugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDebugQuery({
 *   variables: {
 *   },
 * });
 */
export function useDebugQuery(baseOptions?: Apollo.QueryHookOptions<DebugQuery, DebugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DebugQuery, DebugQueryVariables>(DebugDocument, options);
      }
export function useDebugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DebugQuery, DebugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DebugQuery, DebugQueryVariables>(DebugDocument, options);
        }
export type DebugQueryHookResult = ReturnType<typeof useDebugQuery>;
export type DebugLazyQueryHookResult = ReturnType<typeof useDebugLazyQuery>;
export type DebugQueryResult = Apollo.QueryResult<DebugQuery, DebugQueryVariables>;
export const EchoDocument = gql`
    mutation Echo($text: String!) {
  echo(text: $text)
}
    `;
export type EchoMutationFn = Apollo.MutationFunction<EchoMutation, EchoMutationVariables>;

/**
 * __useEchoMutation__
 *
 * To run a mutation, you first call `useEchoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEchoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [echoMutation, { data, loading, error }] = useEchoMutation({
 *   variables: {
 *      text: // value for 'text'
 *   },
 * });
 */
export function useEchoMutation(baseOptions?: Apollo.MutationHookOptions<EchoMutation, EchoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EchoMutation, EchoMutationVariables>(EchoDocument, options);
      }
export type EchoMutationHookResult = ReturnType<typeof useEchoMutation>;
export type EchoMutationResult = Apollo.MutationResult<EchoMutation>;
export type EchoMutationOptions = Apollo.BaseMutationOptions<EchoMutation, EchoMutationVariables>;
export const AddCardCreditsDocument = gql`
    mutation AddCardCredits($cardNumber: Float!, $expirationDate: String!, $CVV: Int!, $amount: Int!) {
  addCardCredits(
    cardNumber: $cardNumber
    expirationDate: $expirationDate
    CVV: $CVV
    amount: $amount
  ) {
    requestId
    amount
  }
}
    `;
export type AddCardCreditsMutationFn = Apollo.MutationFunction<AddCardCreditsMutation, AddCardCreditsMutationVariables>;

/**
 * __useAddCardCreditsMutation__
 *
 * To run a mutation, you first call `useAddCardCreditsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCardCreditsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCardCreditsMutation, { data, loading, error }] = useAddCardCreditsMutation({
 *   variables: {
 *      cardNumber: // value for 'cardNumber'
 *      expirationDate: // value for 'expirationDate'
 *      CVV: // value for 'CVV'
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function useAddCardCreditsMutation(baseOptions?: Apollo.MutationHookOptions<AddCardCreditsMutation, AddCardCreditsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCardCreditsMutation, AddCardCreditsMutationVariables>(AddCardCreditsDocument, options);
      }
export type AddCardCreditsMutationHookResult = ReturnType<typeof useAddCardCreditsMutation>;
export type AddCardCreditsMutationResult = Apollo.MutationResult<AddCardCreditsMutation>;
export type AddCardCreditsMutationOptions = Apollo.BaseMutationOptions<AddCardCreditsMutation, AddCardCreditsMutationVariables>;