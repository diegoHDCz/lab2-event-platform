import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o5s3380nj201xrdyyed6qp/master",
  cache: new InMemoryCache(),
});
