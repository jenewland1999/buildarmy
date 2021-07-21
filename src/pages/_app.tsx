import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@lib/apollo-client";
import type { AppProps } from "next/app";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
