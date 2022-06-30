import NewBook from '../NewBook/NewBook'

export const QUERY = gql`
  query categories($userId: Int!) {
    categories(userId: $userId) {
      name
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ categories }) => {
  return <NewBook categories={categories} />
}
