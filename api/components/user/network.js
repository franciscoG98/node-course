const express = require('express');

const response = require('../../../network/response');

const router = express.Router();

router.get('/', (req, res) => {
    // res.send('Todo funciona');
    response.success(req, res, 'Todo piola guacho', 200);
})

module.exports = router;
