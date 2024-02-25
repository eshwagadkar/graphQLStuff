const graphql = require('graphql')
const { GraphQLObjectType,
        GraphQLID,
        GraphQLString,
        GraphQLList
    } = graphql
const LyricType = require('./lyric_type')
const Song = require('../models/song')

const SongType = new GraphQLObjectType({
    name: 'SongType',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        lyrics: {
            type: new GraphQLList(LyricType),
            resolve(parentValue) {
                return Song.findLyrics(parentValue.id)
            }
        }
    })
})

module.exports = SongType

