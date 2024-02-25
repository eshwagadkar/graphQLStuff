const mongoose = require('mongoose')
const Lyric = require('../models/lyric')

const SongSchema = new mongoose.Schema({
    title: { type: String },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        // ref: 'user'
    },
    lyrics: [{
            type:  mongoose.Schema.Types.ObjectId,
            ref: 'Lyric'
        }]
});

SongSchema.statics.addLyric = function(id, content) {
    // const Lyric = mongoose.model('Lyric')

    return this.findById(id)
        .then(song => {
            const lyric = new Lyric({ song, content })
            song.lyrics.push(lyric)
            return Promise.all([lyric.save(), song.save()])
              .then(([lyric, song]) => song)
        })
}

SongSchema.statics.findLyrics = function(id) {
    return this.findById(id)
      .populate('lyrics')
      .then(song => song.lyrics)
}

module.exports = mongoose.model('Song', SongSchema)