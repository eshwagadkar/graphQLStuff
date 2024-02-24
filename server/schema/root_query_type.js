const mongoose = require('mongoose')
const graphql = require('graphql')
const { 
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} = graphql
const SongType = require('./song_type')
const LyricType = require('./lyric_type')
const Song = mongoose.model('song')
const Lyric = mongoose.model('lyric')

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        // List all the songs
        songs: {
            // type
        },
        // List a particular song by id 
        song: {

        },
        // List lyrics 
        lyric: {

        }

    })
})

module.exports = RootQuery
