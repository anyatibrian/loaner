import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';
import {GRAPHQL_ENDPOINT} from './contants';
const gqlClient = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
});
export default gqlClient;