jQuery(document).ready(function () {

    //jQuery(".owl-theme div:eq(2)").addClass("main-show");



    jQuery(".owl-carousel4").owlCarousel(
        {
            loop: true,
            center: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,

                },
                600: {
                    items: 1,

                },
                1000: {
                    items: 1,

                    loop: true
                }
            }
        }
    );

    jQuery(".owl-carousel5").owlCarousel(
        {
            loop: true,
            center: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,

                },
                600: {
                    items: 1,

                },
                1000: {
                    items: 1,

                    loop: true
                }
            }
        }
    );

    getMessage();
    getRelated();
    getComments();
});

function myFunction(x) {
    x.classList.toggle("change");
}

async function getMessage() {
    await fetch('/news/101')
        .then(response => response.json())
        .then(data => {
            // jQuery("#mcontent").text(data.name);
            // article = data;
            console.log(data); // Prints result from `response.json()` in getRequest
            renderMsg(data);
        })
        .catch(error => console.error(error))
}

function renderMsg(message) {
    var template = $('#hidden-template').html();
         //reset
    $('#msg-target').html("");
    var myTemplate = $(template).clone();

    $(myTemplate).find('#msg-type').text(message.msgtype);
    $(myTemplate).find('#msg-date').text(message.issuedate);
    $(myTemplate).find('#msg-img').attr("src",message.img);
    $(myTemplate).find('#msg-title').text(message.title);
    $(myTemplate).find('#msg-abstract').text(message.abstract);
    $.each(message.paragraphs, function (i,item) {
        if (i===0) {
            var p = item.p;
            $(myTemplate).find('#msg-content').text(p);
        }
        else {
            var txt2 = $("<p></p>").text(item.p);// Create with jQuery
            var p = item.p;
            $(myTemplate).find('#msg-content').append(txt2);
        }
    });
//    $(myTemplate).find('#msg-content').text(message.paragraphs);


    $('#msg-target').append(myTemplate);
    //load from json
    // $.each(results, function (i, item) {
    //     var box = item;
    //     var myTemplate = $(template).clone();
    //
    //     $(myTemplate).find('#box-name').text(box.boxName);
    //     $(myTemplate).find('#box-text').text(box.boxText);
    //     $(myTemplate).find('#box-image').attr("src",box.boxImage);
    //
    //     $('#target').append(myTemplate);
    // });
}

async function getRelated() {
    await fetch('/news/related')
        .then(response => response.json())
        .then(data => {
            // jQuery("#mcontent").text(data.name);
            // article = data;
            console.log(data); // Prints result from `response.json()` in getRequest
            renderRelated(data);
        })
        .catch(error => console.error(error))
}

function renderRelated(message) {
    var template = $('#related-template').html();
    //reset
    $('#related-target').html("");

    $.each(message, function(i, item){
            var box = item;
            var myTemplate = $(template).clone();

            $(myTemplate).find('#r-type').text(item.type);
            $(myTemplate).find('#r-date').text(item.date);
            $(myTemplate).find('#r-img').attr("src",item.img);
            $(myTemplate).find('#r-title').text(item.title);
            $(myTemplate).find('#r-abstract').text(item.abstract);
            $(myTemplate).find('#r-author').text(item.author);

            $('#related-target').append(myTemplate);
    });
}

async function getComments() {
    await fetch('/news/comments')
        .then(response => response.json())
        .then(data => {
            // jQuery("#mcontent").text(data.name);
            // article = data;
            console.log(data); // Prints result from `response.json()` in getRequest
            renderComments(data);
        })
        .catch(error => console.error(error))
}

async function postComments(comment) {
    await fetch('/news/comments',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)})
        .then(response => response.json())
        .then(data => {
            // jQuery("#mcontent").text(data.name);
            // article = data;
            console.log(data); // Prints result from `response.json()` in getRequest
            renderComments(data);
        })
        .catch(error => console.error(error))
}

function renderComments(message) {
    var template = $('#comment-template').html();
    //reset
    $('#comment-target').html("");

    $.each(message, function(i, item){
        //var box = item;
        var myTemplate = $(template).clone();

        $(myTemplate).find('#c-date').text(item.date);
        $(myTemplate).find('#c-usericon').attr("src",item.userimg);
        $(myTemplate).find('#c-comment').text(item.comment);
        $(myTemplate).find('#c-author').text(item.author);

        $('#comment-target').append(myTemplate);
    });
    $('#c-no').text(message.length + "条评论");
}

jQuery("#c-submit").click(function () {
    const today = new Date();
    var comment={
        id: "101",
        date:today.toLocaleDateString(),
        author: jQuery("#n-name").val(),
        comment:jQuery("#n-comment").val(),
        userimg:"assets/images/comment-user1.png"
    }
    postComments(comment);
});



jQuery(".link-img").click(function () {
    var link = jQuery(this).attr("data-link");
    //alert(link);
    jQuery("#screen").attr("src", link)
});



var count = 0;
jQuery("#toggle-search").click(function () {
    count++;
    //even odd click detect 
    var isEven = function (someNumber) {
        return (someNumber % 2 === 0) ? true : false;
    };
    // on odd clicks do this
    if (isEven(count) === false) {
        //jQuery("#nav-search").css({"display":"block"});
        jQuery("#nav-search").slideDown();
        jQuery("#toggle-search").attr("src", "assets/images/close.png");

    }
    // on even clicks do this
    else if (isEven(count) === true) {
        //jQuery("#nav-search").css({"display":"none"});
        jQuery("#nav-search").slideUp();

        jQuery("#toggle-search").attr("src", "assets/images/search-icon.png");
    }
});