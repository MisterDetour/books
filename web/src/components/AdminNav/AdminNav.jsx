import { useContext } from 'react'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { BookshelfContext } from 'src/providers/context/BookshelfContext'

const AdminNav = () => {
  const [context, setContext] = useContext(BookshelfContext)
  const { isAuthenticated, currentUser, logOut } = useAuth()

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
        {isAuthenticated && (
          <li>
            <button type="button" onClick={logOut}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default AdminNav
