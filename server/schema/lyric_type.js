const mongoose = require('mongoose')
const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString
} = graphql
const SongType = require('./song_type')
const Lyric = mongoose.model('lyric')

const LyricType = new GraphQLObjectType({
    name: 'LyricType',
    fields: () => ({
        id: { type: GraphQLID },
        likes: { type: GraphQLInt },
        content: { type: GraphQLString },
        song: {
            type: SongType,
            async resolve(parentValue) {
                const lyric = await Lyric.findById(parentValue).populate('song')
                console.log(lyric)
                return lyric.song
            }
        }
    })
})

module.exports = LyricType