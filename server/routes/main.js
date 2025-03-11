const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
const locals = {
    title: "Master Project",
    desc: "training for master project"
}

    res.render('index', {locals, layout: 'layouts/unauthorized'}); 
});

router.get('/about', (req, res) => {
    res.render('about');
})

router.get('/homepage', (req, res) => {
    const locals = {
        title: "Master Project",
        desc: "training for master project"
    }
    
        res.render('homepage', {locals});
    });

module.exports = router;