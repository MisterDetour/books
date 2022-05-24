import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import BookForm from 'src/components/Book/BookForm'

export const QUERY = gql`
  query EditBookById($id: Int!) {
    book: book(id: $id) {
      id
      title
      categoryId
      category {
        name
      }
    }
    categories {
      name
      id
    }
  }
`
const UPDATE_BOOK_MUTATION = gql`
  mutation UpdateBookMutation($id: Int!, $input: UpdateBookInput!) {
    updateBook(id: $id, input: $input) {
      id
      title
      categoryId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ book, categories }) => {
  const [updateBook, { loading, error }] = useMutation(UPDATE_BOOK_MUTATION, {
    onCompleted: () => {
      toast.success('Book updated')
      navigate(routes.books())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      categoryId: parseInt(input.categoryId),
    })
    updateBook({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Book {book.id}</h2>
      </header>
      <div className="rw-segment-main">
        <BookForm
          book={book}
          categories={categories}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
