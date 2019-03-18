import graphql from 'graphql'
import axios from 'axios'

// Query
import UserType from './query/user'
import CompanyType from './query/company'

// Mutation
import mutation from './mutation/user'

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLNonNull } = graphql

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
        return axios.get(`http://localhost:3000/users/${args.id}`)
          .then(res => res.data)
      }
    },
    company: {
      type: CompanyType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${args.id}`)
          .then(res => res.data)
      }
    }
  }
})

export default new GraphQLSchema({
  query: RootQuery,
  mutation
})