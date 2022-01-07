var express = require('express');
var router = express.Router();
const res = require('express/lib/response');

var book = {
    "content": [{
            "price": "￥38.6",
            "name": "高等数学第七版 上册",
            "comment": "140+条评论",
            "item": ["北京交通大学出版社", "放心购", "查看详情", "加入购物车"]
        },
        {
            "price": "￥36.9",
            "name": "概率论与数理统计(第4版)",
            "comment": "240+条评论",
            "item": ["北京交通大学出版社", "放心购", "查看详情", "加入购物车"]
        },
        {
            "price": "￥22.9",
            "name": "线性代数附册",
            "comment": "60+条评论",
            "item": ["北京交通大学出版社", "放心购", "查看详情", "加入购物车"]
        },
        {
            "price": "￥100.03",
            "name": "内科学（第9版/本科临床）",
            "comment": "80+条评论",
            "item": ["北京交通大学出版社", "放心购", "查看详情", "加入购物车"]
        },
        {
            "price": "￥69.9",
            "name": "罩袍之刺",
            "comment": "140+条评论",
            "item": ["北京交通大学出版社", "放心购", "查看详情", "加入购物车"]
        },
        {
            "price": "￥59.9",
            "name": "坚守战地1200天",
            "comment": "140+条评论",
            "item": ["北京交通大学出版社", "放心购", "查看详情", "加入购物车"]
        },
        {
            "price": "￥79.9",
            "name": "有本事",
            "comment": "240+条评论",
            "item": ["北京交通大学出版社", "放心购", "查看详情", "加入购物车"]
        },
        {
            "price": "￥139.9",
            "name": "或者就是冲天一喊",
            "comment": "70+条评论",
            "item": ["北京交通大学出版社", "放心购", "查看详情", "加入购物车"]
        },
    ]
}

/* GET home page. */
router.get('/books', function (req, res) {
    res.json(book);
});

module.exports = router;