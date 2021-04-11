// import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo/apollo';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <Layout>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  );
}
