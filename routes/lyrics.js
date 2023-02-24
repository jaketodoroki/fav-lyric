const router = require('express').Router()
const lyricsCtrl = require('../controllers/lyrics.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

//------------ Public Routes -------------


//------------ Protected Routes ----------
router.use(decodeUserFromToken)
router.post('/', checkAuth, lyricsCtrl.createLyric)

module.exports = router