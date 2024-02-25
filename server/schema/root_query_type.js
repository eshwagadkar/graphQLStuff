const graphql = require('graphql')
const { 
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} = graphql

const SongType = require('./song_type')
const LyricType = require('./lyric_type')
const Song = require('../models/song')
const Lyric = require('../models/lyric')

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        // List all the songs
        songs: {
            type: new GraphQLList(SongType),
            resolve() {
                return Song.find({})
            }
        },
        // List a particular song by id 
        song: {
            type: SongType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(parentValue, { id } ) {
                return Song.findById(id)
            }
        },
        // List lyrics by id
        lyric: {
            type: LyricType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(parentValue, { id } ) {
                return Lyric.findById(id)
            }
        }

    })
})

module.exports = RootQueryType
