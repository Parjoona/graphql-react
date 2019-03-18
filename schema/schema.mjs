import graphql from 'graphql'

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql

const users = [
  {
    id: '23',
    firstName: 'Bill',
    age: 20
  },
  {
    id: '43',
    firstName: 'Billy',
    age: 22
  },
]

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLString
    },
    firstName: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    }
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args) {
        return users.find(user => user.id === args.id)
      }
    }
  }
})

export default new GraphQLSchema({
  query: RootQuery
})