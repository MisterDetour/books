import * as Filestack from 'filestack-js'
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

export const books = ({ userId }) => {
  return db.book.findMany({
    where: { userId },
  })
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

export const deleteBook = async ({ id }) => {
  const client = Filestack.init(process.env.REDWOOD_ENV_FILESTACK_API_KEY)

  const book = await db.book.findUnique({ where: { id } })

  // The `security.handle` is the unique part of the Filestack file's url.
  const handle = book.image.split('/').pop()

  const security = Filestack.getSecurity(
    {
      // We set `expiry` at `now() + 5 minutes`.
      expiry: new Date().getTime() + 5 * 60 * 1000,
      handle,
      call: ['remove'],
    },
    process.env.REDWOOD_ENV_FILESTACK_SECRET
  )

  await client.remove(handle, security)

  return db.book.delete({
    where: { id },
  })
}

export const Book = {
  category: (_obj, { root }) =>
    db.book.findUnique({ where: { id: root.id } }).category(),
}
