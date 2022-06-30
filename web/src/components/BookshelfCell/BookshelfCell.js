import { useContext } from 'react'
import { BookshelfContext } from 'src/providers/context/BookshelfContext'

export const QUERY = gql`
  query BookshelfQuery($userId: Int!) {
    bookshelf: books(userId: $userId) {
      id
      title
      image
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
  const category = bookshelfSettings[0].category

  // Filter books by category
  if (category !== 0) {
    bookshelf = bookshelf.filter(
      (book) => book.category.id == bookshelfSettings[0].category
    )
  }

  const thumbnail = (url) => {
    const parts = url.split('/')
    parts.splice(3, 0, 'resize=width:300')
    return parts.join('/')
  }

  return (
    <ul className="booklist">
      {bookshelf.map((book) => {
        return (
          <li key={book.id}>
            <a
              href={`https://libweb.cityofalbany.net/eg/opac/results?query=${book.title}&qtype=keyword&locg=2`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={thumbnail(book.image)} alt={book.title} width="100" />
              <br />
              {/* {book.title} */}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
