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

var contactString = '<div style="padding:0% 2% 2% 2%"><h1 style="font-family: Quatro Slab; font-weight: bold; font-size: 3em">Hi There!<a onclick="closeContactWindow()"><span class="crossClose"> </span></a></h1><p style="font-size: 0.90em; line-height: 1.2em">Interested in working with me on a project? Or take me with you into any of your business ventures? Or just curious? Whatever it is, lets get in touch!</p><p style="margin-top: 3%; font-weight: 600; font-size:1.5em">bart.chr@gmail.com</p><p style="font-weight: 600; font-size:1.5em">bchrzasz@edu.uwaterloo.ca</p><div style="margin-top: 5%; font-size: 1.5em"><span><a style="padding-right: 5%" class="contactLinks" href="https://github.com/bartchr808"><i class="fa fa-github"></i></a></span><span><a style="padding-right: 5%" class="contactLinks" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=bart.chr@gmail.com&tf=1"><i class="fa fa-envelope"></i></a></span><span><a style="padding-right: 5%" class="contactLinks" href="https://codepen.io/bartchr808/pens/public/"><i class="fa fa-codepen"></i></a></span><span><a style="padding-right: 5%" class="contactLinks" href="https://www.linkedin.com/in/bartlomiej-c-1222a010a?trk=hp-identity-name"><i class="fa fa-linkedin"></i></a></span></div></div>'



function openContactWindow() {
    $("#windShad").addClass("contactWindowShader");
    $("#contWind").addClass("contactWindow");
    $("#contWind").css("margin-top", "15%");
    $("#contWind").html(contactString);
    $(".contactWindow").animate({
        opacity: 1,
        height: "60%"
    }, 250);
    $(".contactWindowShader").animate({
        opacity: 0.7,
    }, 250);
};

function closeContactWindow() {
    $(".contactWindow").animate({
        opacity: 0,
        height: "0%"
    }, 250);
    $(".contactWindowShader").animate({
        opacity: 0,
    }, 250);
    setTimeout(function () {
        $("#windShad").removeClass("contactWindowShader")
        $("#contWind").removeClass("contactWindow");
        $("#contWind").css("margin-top", "0%");
        $("#contWind").html("");
        console.log("erfe");
    }, 300);
}


$(document).ready(function () {
    $("#bioTitle").css("opacity", 0);
    $("#bioPara1").css("opacity", 0);
    $("#profilePic").css("opacity", 0);
    //    $("#bioPara2").css("opacity", 0);
    //    $("#stockPic").css("opacity", 0);
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


        if ($(window).scrollTop() < 316) {
            $("#bioPara1").css("opacity", 0 + $(window).scrollTop() / 300);
            $("#bioTitle").css("margin-right", (89 - $(window).scrollTop() / 4).toString() + "%");
            $("#bioTitle").css("opacity", 0 + $(window).scrollTop() / 300);
            $("#actualBioPara1").css("margin-right", (45 - $(window).scrollTop() / 9).toString() + "%");
            $("#actualBioPara1").css("opacity", 0 + $(window).scrollTop() / 200);
            $("#profilePic").css("margin-top", (21 - $(window).scrollTop() / 20).toString() + "%");
            $("#profilePic").css("opacity", 0 + $(window).scrollTop() / 300);

        } else if ($(window).scrollTop() > 315) {
            $("#bioTitle").css("margin-right", "10%"); //48.5
            $("#bioTitle").css("opacity", 1);
            $("#actualBioPara1").css("margin-right", "10%"); //9.4375
            $("#bioPara1").css("opacity", 1);
            $("#profilePic").css("margin-top", "5.35%");
            $("#profilePic").css("opacity", 1);

        };


        //        if ($(window).scrollTop() < 316) {
        //            $("#bioPara1").css("opacity", 0 + $(window).scrollTop() / 300);
        //            $("#bioTitle").css("margin-left", (-30 + $(window).scrollTop() / 4).toString() + "%");
        //            $("#bioTitle").css("opacity", 0 + $(window).scrollTop() / 300);
        //            $("#actualBioPara1").css("margin-right", (45 - $(window).scrollTop() / 9).toString() + "%");
        //            $("#actualBioPara1").css("opacity", 0 + $(window).scrollTop() / 200);
        //            $("#profilePic").css("margin-top", (21 - $(window).scrollTop() / 20).toString() + "%");
        //            $("#profilePic").css("opacity", 0 + $(window).scrollTop() / 300);
        //
        //        } else if ($(window).scrollTop() > 315) {
        //            $("#bioTitle").css("margin-left", "48.5%"); //48.5
        //            $("#bioTitle").css("opacity", 1);
        //            $("#actualBioPara1").css("margin-right", "10%"); //9.4375
        //            $("#bioPara1").css("opacity", 1);
        //            $("#profilePic").css("margin-top", "5.35%");
        //            $("#profilePic").css("opacity", 1);
        //
        //        };


        if ($(window).scrollTop() > 1000) {
            //            $("#stockPic").removeClass("animated fadeOutLeftBig");
            //            $("#stockPic").addClass("animated fadeInLeftBig");
            //            $("#stockPic").fadeIn();
            //            $("#stockPic").css("opacity", 1);
            //            $("#bioPara2").removeClass("animated slideOutRight");
            //            $("#bioPara2").addClass("animated slideInRight");
            //            $("#bioPara2").fadeIn();
            //            $("#bioPara2").css("opacity", 1);
            $(".wrapper").addClass("expand");
            //            $("#bioPara3").css("padding-top", "0%");
        };
        if ($(window).scrollTop() < 1000) {
            //            $("#stockPic").removeClass("animated fadeInLeftBig");
            //            $("#stockPic").addClass("animated fadeOutLeftBig");
            //            $("#stockPic").fadeOut();
            //            $("#bioPara2").removeClass("animated slideInRight");
            //            $("#bioPara2").addClass("animated slideOutRight");
            $(".wrapper").removeClass("expand");
            //            $("#bioPara2").fadeOut();
            //            $("#bioPara3").css("padding-top", "35%");
        };



        if ($(window).scrollTop() < 1600 && $(window).scrollTop() > 1200) {
            $("#bioPara3").css("margin-top", (-90 + $(window).scrollTop() / 20).toString() + "%");
            $("#bioPara3").css("opacity", -8 + $(window).scrollTop() / 180);
            $("#bioPara3").css("margin-bottom", (0 + $(window).scrollTop() / 200).toString() + "%");
        } else if ($(window).scrollTop() > 1600) {
            $("#bioPara3").css("margin-top", "-10.05%");
            $("#bioPara3").css("margin-bottom", "8.745%");
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