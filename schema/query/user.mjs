import graphql from 'graphql'
import axios from 'axios'
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql

import CompanyType from './company'

export default new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    firstName: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    },
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`)
          .then(res => res.data)
      }
    }
  })
})