const BookshelfContext = React.createContext()

const BookshelfContextProvider = ({ children }) => {
  const [state, setState] = React.useState({ category: 1 })
  return (
    <BookshelfContext.Provider value={[state, setState]}>
      {children}
    </BookshelfContext.Provider>
  )
}

export { BookshelfContext, BookshelfContextProvider }
