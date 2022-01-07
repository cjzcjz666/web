var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

module.exports = router;

router.post('/login', (req, res) => {
    try {
        //console.log(req.body);
        var msg = req.body;
        if (msg.username == 'cjz' && msg.password == 'cjz121720') {
            res.json({
                status: 200,
                token: true
            });
        } else {
            res.json({
                status: 400,
                token: false
            })
        }
        res.json(comments);
    } catch (err) {
        console.log(err);
        res.json({
            error: err.message || err.toString()
        });
    }
});