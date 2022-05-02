export const schema = gql`
  type Category {
    id: Int!
    name: String!
    books: [Book]!
  }

  type Query {
    categories: [Category!]! @skipAuth
  }

  input CreateCategoryInput {
    name: String!
  }

  input UpdateCategoryInput {
    name: String
  }
`
