const express = require('express');
const router = express.Router();


router.get("/thapa", (req,res) => {
    res.send("Hello Whats up");
});

module.exports = router;