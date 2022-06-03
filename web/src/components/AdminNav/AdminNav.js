import { Link, routes } from '@redwoodjs/router'
import { useContext } from 'react'
import { BookshelfContext } from 'src/providers/context/BookshelfContext'

const AdminNav = () => {
  const [context, setContext] = useContext(BookshelfContext)

  const showForm = () => {
    setContext({ ...context, newBookForm: true })
  }

  return (
    <nav className="admin-nav">
      <ul>
        <li>
          <button onClick={() => showForm()}>Add Book +</button>
        </li>
        <li>
          <Link to={routes.books()}>Admin Books</Link>
        </li>
        <li>
          <Link to={routes.categories()}>Admin Categories</Link>
        </li>
      </ul>
    </nav>
  )
}

export default AdminNav
