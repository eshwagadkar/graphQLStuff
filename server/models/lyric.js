const mongoose = require('mongoose')

const LyricSchema = new mongoose.Schema({
    song: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song'
    },
    likes: { type: Number, default: 0 },
    content: { type: String }
})


LyricSchema.statics.like = async function(id) {
    const Lyric = mongoose.model('Lyric', LyricSchema) 
    
    const lyric = await Lyric.findById(id)
    ++lyric.likes
    return lyric.save()
}

module.exports = mongoose.model('Lyric', LyricSchema);