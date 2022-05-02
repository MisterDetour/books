import { db } from 'src/lib/db'

// https://community.redwoodjs.com/t/prisma-beta-2-and-rwjs-limited-generator-support-for-relations-with-workarounds/361
const foreignKeyReplacement = (input) => {
  let output = input
  const foreignKeys = Object.keys(input).filter((k) => k.match(/Id$/))
  foreignKeys.forEach((key) => {
    const modelName = key.replace(/Id$/, '')
    const value = input[key]
    delete output[key]
    output = Object.assign(output, {
      [modelName]: { connect: { id: value } },
    })
  })
  return output
}

export const books = () => {
  return db.book.findMany()
}

export const book = ({ id }) => {
  return db.book.findUnique({
    where: { id },
  })
}

export const createBook = ({ input }) => {
  return db.book.create({
    data: foreignKeyReplacement(input),
  })
}

export const updateBook = ({ id, input }) => {
  return db.book.update({
    data: foreignKeyReplacement(input),
    where: { id },
  })
}

export const deleteBook = ({ id }) => {
  return db.book.delete({
    where: { id },
  })
}

export const Book = {
  category: (_obj, { root }) =>
    db.book.findUnique({ where: { id: root.id } }).category(),
}
