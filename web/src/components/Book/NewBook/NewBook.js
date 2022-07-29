import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import BookForm from 'src/components/Book/BookForm'
import { useContext } from 'react'
import { BookshelfContext } from 'src/providers/context/BookshelfContext'
import { QUERY as BookshelfQuery } from 'src/components/BookshelfCell'
import { useAuth } from '@redwoodjs/auth'

const CREATE_BOOK_MUTATION = gql`
  mutation CreateBookMutation($input: CreateBookInput!) {
    createBook(input: $input) {
      id
      title
      image
      categoryId
    }
  }
`

const NewBook = (props) => {
  const { currentUser } = useAuth()

  const [createBook, { loading, error }] = useMutation(CREATE_BOOK_MUTATION, {
    update: (proxy, response) => {
      const previousData = proxy.readQuery({
        query: BookshelfQuery,
        variables: { userId: currentUser.id },
      })

      proxy.writeQuery({
        query: BookshelfQuery,
        variables: { userId: currentUser.id },
        data: {
          ...previousData,
          bookshelf: [response.data.createBook, ...previousData.bookshelf],
        },
      })
    },
    refetchQueries: [
      {
        query: BookshelfQuery,
        variables: { userId: currentUser.id },
      },
    ],
    awaitRefetchQueries: true,
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
      userId: currentUser.id,
    })
    createBook({
      variables: { input: castInput },
      optimisticResponse: {
        createBook: {
          __typename: 'Book',
          id: 0,
          title: input.title,
          image: input.image,
          categoryId: input.categoryId,
        },
      },
    })
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
