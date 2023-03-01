const { Lyric, profile } = require('../models')

async function createLyric(req, res) {
  try {
    req.body.profileId = req.user.profile.id
    const lyric = await Lyric.create(req.body)
    res.status(200).json(lyric)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function index(req, res) {
  try {
    const lyrics = await Lyric.findAll()
    res.status(200).json(lyrics)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function show(req, res) {
  try {
    const lyric = await Lyric.findByPk(req.params.lyricId)
    res.status(200).json(lyric)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function update(req, res) {
  try {
    const lyric = await Lyric.findByPk(req.params.lyricId)
    lyric.lyric = req.body.lyric
    lyric.name = req.body.name
    await lyric.save()
    res.status(200).json(lyric)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function deleteLyric(req, res) {
  try {
    // const lyric = await Lyric.findByPk(req.params.lyricId)
    // await lyric.destroy()
    const rowsRemoved = await Lyric.destroy({ where: { name: req.params.lyricName}})
    res.status(200).json(rowsRemoved)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = {
  createLyric,
  index,
  show,
  update,
  deleteLyric
}