import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import BookForm from 'src/components/Book/BookForm'
import { useContext } from 'react'
import { BookshelfContext } from 'src/providers/context/BookshelfContext'
import { QUERY as BookshelfQuery } from 'src/components/BookshelfCell'

const CREATE_BOOK_MUTATION = gql`
  mutation CreateBookMutation($input: CreateBookInput!) {
    createBook(input: $input) {
      id
    }
  }
`

const NewBook = (props) => {
  const [createBook, { loading, error }] = useMutation(CREATE_BOOK_MUTATION, {
    refetchQueries: [{ query: BookshelfQuery }],
    onCompleted: () => {
      toast.success('Book added!')
      navigate(routes.home())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      categoryId: parseInt(input.categoryId),
    })
    createBook({ variables: { input: castInput } })
    hideForm()
  }

  const [context, setContext] = useContext(BookshelfContext)

  const hideForm = () => {
    setContext({ ...context, newBookForm: false })
  }

  return (
    <div className="rw-segment book-form">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Book</h2>
        <div>
          <button
            className="rw-button rw-button-shade"
            onClick={() => hideForm()}
          >
            Close
          </button>
        </div>
      </header>
      <div className="rw-segment-main">
        <BookForm
          onSave={onSave}
          loading={loading}
          error={error}
          categories={props.categories}
        />
      </div>
    </div>
  )
}

export default NewBook
