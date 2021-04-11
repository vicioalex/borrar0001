import { gql } from '@apollo/client'

const GET_ALL_JOBS = gql`
  query {
    productos {
      id
      nombre
    }
  }
`

export { GET_ALL_JOBS }
