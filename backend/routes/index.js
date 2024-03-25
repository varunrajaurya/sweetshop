const express = require('express');
const router = express.Router();
const auth = require('../middleware/jwt');

// Define routes here
router.get('/protected', auth, (req, res) => {
    res.send('Protected route accessed');
});

module.exports = router;
