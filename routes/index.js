const express = require('express');
const posts = require('../routes/post');
const tags = require('../routes/tags');

const router = express.Router();

router.use('/posts', posts);
router.use('/tags', tags);
module.exports = router;
