export const schema = gql`
  type Book {
    id: Int!
    title: String!
    category: Category!
    categoryId: Int!
    userId: Int!
    image: String
  }

  type Query {
    books(userId: Int!): [Book!]! @requireAuth
    book(id: Int!): Book @requireAuth
  }

  input CreateBookInput {
    title: String!
    categoryId: Int
    userId: Int!
    image: String
  }

  input UpdateBookInput {
    title: String
    categoryId: Int
    userId: Int
    image: String
  }

  type Mutation {
    createBook(input: CreateBookInput!): Book! @requireAuth
    updateBook(id: Int!, input: UpdateBookInput!): Book! @requireAuth
    deleteBook(id: Int!): Book! @requireAuth
  }
`
