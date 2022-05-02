import { db } from 'src/lib/db'

export const categories = () => {
  return db.category.findMany()
}

export const category = ({ id }) => {
  return db.category.findUnique({
    where: { id },
  })
}

export const Category = {
  books: (_obj, { root }) =>
    db.category.findUnique({ where: { id: root.id } }).books(),
}
