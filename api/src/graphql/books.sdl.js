export const schema = gql`
  type Book {
    id: Int!
    title: String!
    category: Category!
    categoryId: Int!
  }

  type Query {
    books: [Book!]! @requireAuth
    book(id: Int!): Book @requireAuth
  }

  input CreateBookInput {
    title: String!
    categoryId: Int
  }

  input UpdateBookInput {
    title: String
    categoryId: Int
  }

  type Mutation {
    createBook(input: CreateBookInput!): Book! @requireAuth
    updateBook(id: Int!, input: UpdateBookInput!): Book! @requireAuth
    deleteBook(id: Int!): Book! @requireAuth
  }
`
