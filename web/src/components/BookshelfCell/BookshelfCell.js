export const QUERY = gql`
  query BookshelfQuery {
    bookshelf: books {
      id
      title
      category {
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ bookshelf }) => {
  return (
    <ul>
      {bookshelf.map((book) => {
        return (
          <li key={book.id}>
            {book.title} - {book.category.name}
          </li>
        )
      })}
    </ul>
  )
}
