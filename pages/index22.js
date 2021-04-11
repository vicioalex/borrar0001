import Head from 'next/head'
import { useQuery  } from '@apollo/client';
import { GET_ALL_JOBS } from '../graphql/queries';
import { initializeApollo } from '../apollo/apollo';

const Home = ({ launches }) => {
  //  console.log('launches', launches);
  // const { loading, error, data } = useQuery(GET_ALL_JOBS);

  // if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`;

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
  );
}

export async function getServerSideProps() {
  
  const apolloClient  = initializeApollo();
  const { data } = await apolloClient .query({
    query: GET_ALL_JOBS
  });
  return {
    props: {
      launches: data.productos
    }, 
  }
}

export default Home;