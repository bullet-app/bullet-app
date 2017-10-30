// import gql from 'graphql-tag';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://api.graph.cool/simple/v1/cj72oa42608x90179f8r37piw',
    }),
    cache: new InMemoryCache(),
});

// client
//     .query({
//         query: gql`
//             {
//                 allLogs {
//                     id
//                     title
//                 }
//             }
//         `,
//     })
//     .then(console.log);
