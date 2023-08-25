// https://community.redwoodjs.com/t/react-context-in-redwoodjs/2572

import { BookshelfContextProvider } from './BookshelfContext'

const AllContextProviders = ({ children }) => {
  // Add additional context providers here
  return <BookshelfContextProvider>{children}</BookshelfContextProvider>
}

export default AllContextProviders
