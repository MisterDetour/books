import { useContext } from 'react'

import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import AdminNav from 'src/components/AdminNav/AdminNav'
import NewBookCell from 'src/components/Book/NewBookCell'
import BookshelfCell from 'src/components/BookshelfCell'
import CategoryNavCell from 'src/components/CategoryNavCell'
import { BookshelfContext } from 'src/providers/context/BookshelfContext'

const HomePage = () => {
  const [context] = useContext(BookshelfContext)
  const newBookForm = context.newBookForm
  const { currentUser } = useAuth()

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
      <CategoryNavCell userId={currentUser.id} />
      <BookshelfCell userId={currentUser.id} />
      {newBookForm && <NewBookCell userId={currentUser.id} />}
      <AdminNav />
    </>
  )
}

export default HomePage
