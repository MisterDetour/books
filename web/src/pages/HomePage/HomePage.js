import { MetaTags } from '@redwoodjs/web'
import BookshelfCell from 'src/components/BookshelfCell'
import AdminNav from 'src/components/AdminNav/AdminNav'
import CategoryNavCell from 'src/components/CategoryNavCell'
import NewBookCell from 'src/components/Book/NewBookCell'
import { BookshelfContext } from 'src/providers/context/BookshelfContext'
import { useContext } from 'react'
import { Toaster } from '@redwoodjs/web/toast'

const HomePage = () => {
  const [context] = useContext(BookshelfContext)
  const newBookForm = context.newBookForm

  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>Reading List</h1>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <CategoryNavCell />
      <BookshelfCell />
      {newBookForm && <NewBookCell />}
      <AdminNav />
    </>
  )
}

export default HomePage
