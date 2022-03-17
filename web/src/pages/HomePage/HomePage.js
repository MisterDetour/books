import { MetaTags } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import BookshelfCell from 'src/components/BookshelfCell'

// !!!!!!!!!!!!!!!!!! currently at: https://redwoodjs.com/docs/schema-relations - https://learn.redwoodjs.com/docs/tutorial2/adding-comments-to-the-schema
const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>Reading List</h1>
      <BookshelfCell />
      <Link to={routes.books()}>Admin</Link>
    </>
  )
}

export default HomePage
