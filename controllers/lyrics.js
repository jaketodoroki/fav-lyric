const { Lyric } = require('../models')

async function createLyric(req, res) {
  try {
    req.body.userId = req.user.profileId
    const lyric = await Lyric.create(req.body)
    res.status(200).json(lyric)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = {
  createLyric
}