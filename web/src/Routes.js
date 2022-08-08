// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'
import CategoriesLayout from 'src/layouts/CategoriesLayout'
import BooksLayout from 'src/layouts/BooksLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="login">
        <Set wrap={CategoriesLayout}>
          <Route path="/categories/new" page={CategoryNewCategoryPage} name="newCategory" />
          <Route path="/categories/{id:Int}/edit" page={CategoryEditCategoryPage} name="editCategory" />
          <Route path="/categories/{id:Int}" page={CategoryCategoryPage} name="category" />
          <Route path="/categories" page={CategoryCategoriesPage} name="categories" />
        </Set>
        <Set wrap={BooksLayout}>
          <Route path="/books/new" page={BookNewBookPage} name="newBook" />
          <Route path="/books/{id:Int}/edit" page={BookEditBookPage} name="editBook" />
          <Route path="/books/{id:Int}" page={BookBookPage} name="book" />
          <Route path="/books" page={BookBooksPage} name="books" />
        </Set>
      </Private>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
