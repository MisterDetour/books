import CategoryNav from '../CategoryNav/CategoryNav'

export const QUERY = gql`
  query FindCategories($userId: Int!) {
    categories(userId: $userId) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ categories }) => {
  return <CategoryNav categories={categories} />
}
