import { useContext } from 'react'
import { BookshelfContext } from 'src/providers/context/BookshelfContext'

export const QUERY = gql`
  query BookshelfQuery {
    bookshelf: books {
      id
      title
      category {
        name
        id
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
  const bookshelfSettings = useContext(BookshelfContext)

  return (
    <ul>
      {bookshelf
        .filter((book) => book.category.id == bookshelfSettings[0].category)
        .map((book) => {
          return (
            <li key={book.id}>
              {book.title} - {book.category.name}
            </li>
          )
        })}
    </ul>
  )
}
