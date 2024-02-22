const graphql = require('graphql')
const _ = require('lodash')

const { GraphQLObjectType,
        GraphQLString,
        GraphQLInt,
        GraphQLSchema
} = graphql

// List Users
const users = [
    { id: '11', firstName: 'Eshwa', age: 27 },
    { id: '12', firstName: 'Nehal', age: 20 },
    { id: '13', firstName: 'Sumit', age: 25 },
]

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString }, 
        age: { type: GraphQLInt },
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString }},
            resolve(parentValue, args) {
                return _.find(users, { id: args.id })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})




