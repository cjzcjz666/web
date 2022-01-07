jQuery(document).ready(function () {

    jQuery(".play-1, .play-2").yu2fvl();

    jQuery(".owl-carousel4").owlCarousel(
        {
            loop: true,
            center: true,
            margin: 20,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 2,

                },
                600: {
                    items: 3,

                },
                1000: {
                    items: 5,
                    nav: true,
                    loop: true
                }
            }
        }
    );

    jQuery(".owl-carousel5").owlCarousel(
        {
            loop: false,
            center: false,
            margin: 10,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 2,

                },
                600: {
                    items: 3,

                },
                1000: {
                    items: 6,
                    nav: false,
                    loop: true
                }
            }
        }
    );

});

function myFunction(x) {
    x.classList.toggle("change");
}



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
