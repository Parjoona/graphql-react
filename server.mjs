import express from 'express'
import expressGraphQL from 'express-graphql'
import schema from './schema/schema.mjs'

const PORT = 8080
const app = express()

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`RUNNING ON PORT ${PORT}`)
})