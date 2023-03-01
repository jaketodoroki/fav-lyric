const router = require('express').Router()
const lyricsCtrl = require('../controllers/lyrics.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

//------------ Public Routes -------------


//------------ Protected Routes ----------
router.use(decodeUserFromToken)
router.post('/', checkAuth, lyricsCtrl.createLyric)
router.get('/', checkAuth, lyricsCtrl.index)
router.get('/:lyricId', checkAuth, lyricsCtrl.show)
router.put('/:lyricId', checkAuth, lyricsCtrl.update)
router.delete('/:lyricName', checkAuth, lyricsCtrl.deleteLyric)

module.exports = router