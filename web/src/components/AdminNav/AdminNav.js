import { Link, routes } from '@redwoodjs/router'

const AdminNav = () => {
  return (
    <nav className="admin-nav">
      <ul>
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
