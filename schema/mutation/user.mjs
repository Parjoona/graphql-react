import graphql from 'graphql'
import axios from 'axios'

import UserType from '../query/user'

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = graphql


export default new GraphQLObjectType({
  name: 'Mutation', 
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstName: {
          type: new GraphQLNonNull(GraphQLString)
        },
        age: {
          type: new GraphQLNonNull(GraphQLInt)
        },
        companyId: {
          type: GraphQLString
        }
      },
      resolve(parentValue, { firstName, age }) {
        return axios.post('http://localhost:3000/users', { firstName, age })
          .then(res => res.data)
      }
    },
    deleteUser: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parentValue, { id }) {
        return axios.delete(`http://localhost:3000/users/${id}`)
          .then(res => res.data)
      }
    },
    editUser: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        },
        firstName: {
          type: GraphQLString
        },
        age: {
          type: GraphQLInt
        },
        companyId: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args) {
        return axios.patch(`http://localhost:3000/users/${args.id}`, args)
          .then(res => res.data)
      }
    }
  }
})
