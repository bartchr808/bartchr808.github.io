/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~biography.html~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
$(function () {
    $('#skills').hover(function () {
            $("#skills").css("color", "#0058f1");
            $("#bio").css("color", "black");
        },
        function () {
            $("#skills").css("color", "black");
            $("#bio").css("color", "#0058f1");
        });

    $('#logo').hover(function () {
            $("#logo").css("-webkit-filter", "grayscale(0%)");
            $("#logo").css("filter", "grayscale(0%)");
            $("#bio").css("color", "black");
        },
        function () {
            $("#logo").css("-webkit-filter", "grayscale(100%)");
            $("#logo").css("filter", "grayscale(100%)");
            $("#bio").css("color", "#0058f1");
        });

    $('#projects').hover(function () {
            $("#projects").css("color", "#0058f1");
            $("#bio").css("color", "black");
        },
        function () {
            $("#projects").css("color", "black");
            $("#bio").css("color", "#0058f1");
        });

    $('#contact').hover(function () {
            $("#contact").css("color", "#0058f1");
            $("#bio").css("color", "black");
        },
        function () {
            $("#contact").css("color", "black");
            $("#bio").css("color", "#0058f1");
        });
});




$(document).ready(function () {
    $("#bioTitle").css("opacity", 0);
    $("#bioPara1").css("opacity", 0);
    $("#profilePic").css("opacity", 0);
    $("#bioPara2").css("opacity", 0);
    $("#stockPic").css("opacity", 0);
    $("#bioPara3").css("opacity", 0);
    $("#bioPara4").css("opacity", 0);
});

/*NavBar Disappear*/
var lastScrollTop = 0;
$(window).scroll(function (event) {
    var scrollNum = $(this).scrollTop();
    if (scrollNum > lastScrollTop) {
        $("#navBar").removeClass("slideInDown");
        $("#navBar").addClass("slideOutUp");
    } else {
        $("#navBar").removeClass("slideOutUp");
        $("#navBar").addClass("slideInDown");
    }
    lastScrollTop = scrollNum;
});

$(document).ready(function () {



    $(window).scroll(function () {
        $("#bioHeader").css("opacity", 1 - $(window).scrollTop() / 300);

        //        console.log($(window).scrollTop());

        if ($(window).scrollTop() > 180) {
            $("#bioTitle").removeClass("animated slideOutLeft");
            $("#bioTitle").addClass("animated slideInLeft");
            $("#bioTitle").fadeIn();
            $("#bioTitle").css("opacity", 1);
            $("#bioPara1").removeClass("animated slideOutLeft");
            $("#bioPara1").addClass("animated slideInLeft");
            $("#bioPara1").fadeIn();
            $("#bioPara1").css("opacity", 1);
            $("#profilePic").removeClass("animated slideOutRight");
            $("#profilePic").addClass("animated slideInRight");
            $("#profilePic").fadeIn();
            $("#profilePic").css("opacity", 1);
        };
        if ($(window).scrollTop() < 180) {
            $("#bioTitle").removeClass("animated slideInLeft");
            $("#bioTitle").addClass("animated slideOutLeft");
            //            $("#bioTitle").fadeOut();
            $("#bioPara1").removeClass("animated slideInLeft");
            $("#bioPara1").addClass("animated slideOutLeft");
            //            $("#bioPara1").fadeOut();
            $("#profilePic").removeClass("animated slideInRight");
            $("#profilePic").addClass("animated slideOutRight");
            //            $("#profilePic").fadeOut();
            //            $("#bioPara3").css("padding-top", "35%");
        }



        if ($(window).scrollTop() > 900) {
            $("#stockPic").removeClass("animated fadeOutLeftBig");
            $("#stockPic").addClass("animated fadeInLeftBig");
            $("#stockPic").fadeIn();
            $("#stockPic").css("opacity", 1);
            $("#bioPara2").removeClass("animated slideOutRight");
            $("#bioPara2").addClass("animated slideInRight");
            $("#bioPara2").fadeIn();
            $("#bioPara2").css("opacity", 1);
            //            $("#bioPara3").css("padding-top", "0%");
        };
        if ($(window).scrollTop() < 900) {
            $("#stockPic").removeClass("animated fadeInLeftBig");
            $("#stockPic").addClass("animated fadeOutLeftBig");
            //            $("#stockPic").fadeOut();
            $("#bioPara2").removeClass("animated slideInRight");
            $("#bioPara2").addClass("animated slideOutRight");
            //            $("#bioPara2").fadeOut();
            //            $("#bioPara3").css("padding-top", "35%");
        };



        if ($(window).scrollTop() < 1750 && $(window).scrollTop() > 1098) {
            $("#bioPara3").css("margin-top", (-90 + $(window).scrollTop() / 18).toString() + "%");
            $("#bioPara3").css("opacity", -7.039 + $(window).scrollTop() / 200);
        } else if ($(window).scrollTop() > 1749) {
            $("#bioPara3").css("margin-top", "6.56%");
            $("#bioPara3").css("opacity", 1);
        };



        if ($(window).scrollTop() > 2100) {
            $("#bioPara4").removeClass("slideOutDown");
            $("#bioPara4").addClass("slideInUp");
            $("#bioPara4").fadeIn();
            $("#bioPara4").css("opacity", 1);
        };
        if ($(window).scrollTop() < 2100) {
            $("#bioPara4").removeClass("slideInUp");
            $("#bioPara4").addClass("slideOutDown");
        }
    });
});