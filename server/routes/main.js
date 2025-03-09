const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
const locals = {
    title: "Master Project",
    desc: "training for master project"
}

    res.render('index', {locals}); // to pass more obj pass them in {}
});

router.get('/about', (req, res) => {
    res.render('about');
})

module.exports = router;