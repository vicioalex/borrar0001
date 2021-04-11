import Head from 'next/head'
import { ApolloClient, InMemoryCache, gql  } from '@apollo/client';
import { GET_ALL_JOBS } from '../graphql/queries';

const Home = ({ launches }) => {
  //  console.log('launches', launches);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <div>
      {launches.map((job) => (
        <div key={job.id} >{job.nombre}</div>
      ))}
    </div>
    </div>
  )
}

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });
  const { data } = await client.query({
    query: GET_ALL_JOBS
  });
  return {
    props: {
      launches: data.productos
    }, 
  }
}

export default Home;