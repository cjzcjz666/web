$(document).ready(function () {
    init1();
    init2();
});

var myObj = {
    "title": "图书商城",
    "nav_title": "首页",
    "nav_name": ["我的订单", "个人中心", "商城会员"],
    "right_name": ["登录", "注册", "购物车"]
}

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

function init1() {
    $(".navbar-brand").text(myObj.title);
    $(".active").children('a').text(myObj.nav_title);
    for (i = 0; i < myObj.nav_name.length; i++) {
        $("#active_content" + i).children('a').text(myObj.nav_name[i]);
    }
    for (i = 0; i < myObj.right_name.length; i++) {
        $("#right" + i).text(myObj.right_name[i]);
    }
}

function init2() {
    var thumbnail = $(".thumbnail");

    for (i = 0; i < book.content.length; i++) {
        thumbnail.children('#caption_num' + i).children("#item_num" + i).text(book.content[i].price);
        thumbnail.children('#caption_num' + i).children("#book" + i).text(book.content[i].name);
        thumbnail.children('#caption_num' + i).children("#comments_num" + i).children('a').text(book.content[i].comment);
        for (j = 0; j < book.content[0].item.length - 1; j++) {
            // console.log(thumbnail.children("#caption_num" + i).children("#num" + j));
            if (j < 2) {
                thumbnail.children("#caption_num" + i).children("#num" + j).text(book.content[i].item[j]);
            } else {
                thumbnail.children("#caption_num" + i).children("#num" + j).children('a').text(book.content[i].item[j]);
            }
        }
    }

    $(".shoppingcar").text(book.content[0].item[3]);
}