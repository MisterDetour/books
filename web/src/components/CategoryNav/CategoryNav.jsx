import { BookshelfContext } from 'src/providers/context/BookshelfContext'

const CategoryNav = ({ categories }) => {
  const [context, setContext] = React.useContext(BookshelfContext)

  const filterBooks = (categoryId) => {
    setContext({ ...context, category: categoryId })
  }

  return (
    <div className="cat-nav">
      <div>
        <button onClick={() => filterBooks(0)}>All</button>
      </div>
      {categories.map((category) => (
        <div key={category.id} data-id={category.id}>
          <button onClick={() => filterBooks(category.id)}>
            {category.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default CategoryNav
