import { MetaTags } from '@redwoodjs/web'
import BookshelfCell from 'src/components/BookshelfCell'
import AdminNav from 'src/components/AdminNav/AdminNav'
import CategoryNavCell from 'src/components/CategoryNavCell'

// !!!!!!!!!!!!!!!!!! currently at: https://community.redwoodjs.com/t/prisma-beta-2-and-rwjs-limited-generator-support-for-relations-with-workarounds/361 - https://learn.redwoodjs.com/docs/tutorial2/adding-comments-to-the-schema
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
      <CategoryNavCell />
      <BookshelfCell />
      <AdminNav />
    </>
  )
}

export default HomePage
