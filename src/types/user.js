export default `
type User {
  id: Int!
  email: String!
  avatar: String!
  status: String!
  username: String!
  createdAt: String!
  online: Boolean!
  lastSeen: String!
}

type LoginResponse {
  user: User
  accessToken: String
  refreshToken: String
}

type TokensResponse {
  accessToken: String
  refreshToken: String
}

type Subscription {
  onlineUser: User!
}

type Query {
  self: User!
  user(id: Int!): User!
  users(username: String): [User!]
  onlineUsers: [User!]
  refreshTokens(refreshToken: String!): TokensResponse
}

type Mutation {
  logout: Boolean
  verifyUser(secret: String!): LoginResponse!
  login(username: String!, password: String!): LoginResponse!
  register(username: String!, email: String!, password: String!): Boolean!
}
`;
