var express = require('express');
var router = express.Router();
var newses = [
    {
        id: 101,
        msgtype: "国际新闻",
        issuedate: "2021年11月30日",
        title: "西班牙拉帕尔马岛火山喷发10周不停歇",
        abstract:"自今年9月19日以来，拉帕尔马岛火山已经持续喷发了10周，当地居民的生活受到严重影响。据估计，火山喷发造成经济损失超过9亿欧元。",
        paragraphs:[
            {p:"[环球网报道]“拜登最后一刻取消关于供应链危机的演讲，”美国福克斯新闻商业频道以此为题报道称，美国总统拜登原计划当地时间29日发表关于解决供应链问题的演讲，但白宫在演讲开始前15分钟突然宣布将其取消。拜登政府官员表示，取消的原因是拜登希望有时间会见当时到访白宫的商界领袖。这引起一些网友的议论，有网友讽刺说，他需要更多时间，以为“经济遭破坏不是他的错”编造一个新理由。"},
            {p:"报道称，根据白宫公布的日程安排，拜登原定于29日发表演讲，主题为“政府为巩固国家供应链、减少家庭日常花销，并确保货架在这个假期期间备货充足而开展工作”有关。\n" +
                    "\n" +
                    "然而，就在演讲开始前15分钟，白宫宣布将其取消，并称演讲将延期至12月1日举行。至于取消原因，有官员解释说，拜登当时希望有时间会见到访白宫的商界领袖。"},
            {p:"近期，美国供应链受阻问题愈发突出，疫情形势下港口超负荷、卡车司机短缺等，令美供应链受阻问题雪上加霜。有分析认为，解决供应链问题，需要对供给侧和需求侧做重新评估，找到相对固定的平衡点，但这一过程会受到新冠疫情不断反复等因素干扰。更令人担忧的是，美国经济政策不稳定，特别是其不断试图操纵贸易政策，重构全球产业链。这将造成供应链供需数据经常和长期处于异常状态。在此情况下，美国的供应链负荷异常恐将成为新常态。"}
            ],
        img:"assets/images/volcano.jpg"
    },
    {
        id: 102,
        msgtype: "体育新闻",
        issuedate: "2021年12月01日",
        title: "",
        paragraphs: [],
        img:"assets/images/sanxia.jpg"
    }
];

var related = [
    {
        id:101,
        type:"国内新闻",
        date:"2021年10月31日",
        author:"新华社",
        title:"巫峡两岸层林尽染，迎来红叶最佳观赏季",
        abstract:"初冬时节，长江三峡之一的巫峡两岸层林尽染，迎来红叶最佳观赏季，满山红叶美如画卷。三峡红叶是长江三峡中独具特色的自然生态美景。其中巫山县境内巫峡段的景色尤为壮观，集中连片的红叶有20余万亩。",
        img:"assets/images/sanxia.jpg"
    },
    {
        id:101,
        type:"体育新闻",
        date:"2021年11月30日",
        author:"新浪体育",
        title:"樊振东首次问鼎世乒赛男单",
        abstract:"北京时间11月30日消息，2021年休斯顿世乒赛男子单打决赛落幕，樊振东夺取冠军。在与瑞典小将莫尔加德的决赛里，樊振东完全占优以4比0横扫获胜，他首次拿到世乒赛男单冠军，中国队实现了男单9连冠。",
        img:"assets/images/pingpong.jpeg"

    }
];

var comments = [
    {
        id:101,
        date:"2021年9月30日",
        author:"小红",
        comment:"太感人辣，坐在山下看着喷发的火山发呆。据说，喷发有利促进了当地的旅游业，真为西班牙感到高兴。",
        userimg:"assets/images/comment-user1.png"
    },
    {
        id:102,
        date:"2021年9月31日",
        author:"小强",
        comment:"BBC说要是火山导致山体滑坡引发的海啸能淹了一半英格兰岛 BBC到底能不能说真话",
        userimg:"assets/images/comment-user2.png"
    },
    {
        id:103,
        date:"2021年11月31日",
        author:"小宝",
        comment:"要是有直达班机去那个小岛该多好，估计隔离酒店里也能看到火山。",
        userimg:"assets/images/comment-user3.png"
    }
];

router.get('/related', function(req,res){
   res.json(related);
});

router.get('/comments', function(req,res){
    res.json(comments);
});

router.get('/:id([0-9]{3,})', function(req, res){
    var currNews = newses.filter(function(news){
        if(news.id == req.params.id){
            return true;
        }
    });

    if(currNews.length == 1){
        res.json(currNews[0])
    } else {
        res.status(404);  //Set status to 404 as movie was not found
        res.json({message: "Not Found"});
    }
});

router.post('/comments', (req, res) => {
    try {
        //console.log(req.body);
        comments.push(req.body);
        res.json(comments);
    } catch (err) {
        console.log(err);
        res.json({ error: err.message || err.toString() });
    }
});

module.exports = router;
