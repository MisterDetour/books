import { useAuth } from 'src/auth'
import BooksCell from 'src/components/Book/BooksCell'

const BooksPage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <BooksCell userId={currentUser.id} />
    </>
  )
}

export default BooksPage
