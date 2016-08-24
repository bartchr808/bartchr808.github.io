$(function () {
    $(".typeWriter").typed({
        strings: ["Barts-MacBook-Pro:~ bart$ cd Desktop/newPersonalWebsite/", "Barts-MacBook-Pro:~ bart$ cd Desktop/newPersonalWebsite/<br>Barts-MacBook-Pro:newPersonalWebsite bart$ open ../home.html", "Barts-MacBook-Pro:~ bart$ cd Desktop/newPersonalWebsite/<br>Barts-MacBook-Pro:newPersonalWebsite bart$ open ./home.html", "Barts-MacBook-Pro:~ bart$ cd Desktop/newPersonalWebsite/<br>Barts-MacBook-Pro:newPersonalWebsite bart$ open ./home.html<br>>Launching...", "Barts-MacBook-Pro:~ bart$ cd Desktop/newPersonalWebsite/<br>Barts-MacBook-Pro:newPersonalWebsite bart$ open ./home.html<br>>Launching...<br>"],
        typeSpeed: 0,
        contentType: "html",
    });
    console.log($(".typeWriter").val().length);
});


function removeLoader() {
    //    $("#coverLeft").removeAttr("class");
    //    $("#coverRight").removeAttr("class");
    console.log($(".typeWriter").val().length);
    $("#coverLeft").fadeOut(1000);
    $("#coverRight").fadeOut(1000);
    $(".shell-wrap").fadeOut(1000).remove();
    $(".shell-top-bar").fadeOut(1000).remove();
    $(".shell-body").fadeOut(1000).remove();
    $(".fixedShellText").fadeOut(1000).remove();
    $(".typeWriter").fadeOut(1000).remove();
}



$(function () {
    $('#bio').hover(function () {
            $("#bio").css("color", "#0058f1");
            $("#logo").css("-webkit-filter", "grayscale(100%)");
            $("#logo").css("filter", "grayscale(100%)");
        },
        function () {
            $("#bio").css("color", "black");
            $("#logo").css("-webkit-filter", "grayscale(0%)");
            $("#logo").css("filter", "grayscale(0%)");
        });

    $('#skills').hover(function () {
            $("#skills").css("color", "#0058f1");
            $("#logo").css("-webkit-filter", "grayscale(100%)");
            $("#logo").css("filter", "grayscale(100%)");
        },
        function () {
            $("#skills").css("color", "black");
            $("#logo").css("-webkit-filter", "grayscale(0%)");
            $("#logo").css("filter", "grayscale(0%)");
        });

    $('#projects').hover(function () {
            $("#projects").css("color", "#0058f1");
            $("#logo").css("-webkit-filter", "grayscale(100%)");
            $("#logo").css("filter", "grayscale(100%)");
        },
        function () {
            $("#projects").css("color", "black");
            $("#logo").css("-webkit-filter", "grayscale(0%)");
            $("#logo").css("filter", "grayscale(0%)");
        });

    $('#contact').hover(function () {
            $("#contact").css("color", "#0058f1");
            $("#logo").css("-webkit-filter", "grayscale(100%)");
            $("#logo").css("filter", "grayscale(100%)");
        },
        function () {
            $("#contact").css("color", "black");
            $("#logo").css("-webkit-filter", "grayscale(0%)");
            $("#logo").css("filter", "grayscale(0%)");
        });
});




$(document).ready(function () {

    $("#logo").css("-webkit-filter", "grayscale(0%)");
    $("#logo").css("filter", "grayscale(0%)");


    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("#home").mousemove(function (e) {
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $('#home').css("background-position", newvalueX + "px     " + newvalueY + "px");
    });



    setTimeout(function () {
        textAnimate();
    }, 8000);
});



/*Text Animation*/

function textAnimate() {
    //    setTimeout(function () {
    //        $("#textChange").addClass("bounceInDown");
    //        $("#textFixed").addClass("bounceInDown");
    //    }, 800);
    setTimeout(function () {
        $("#textChange").addClass("fadeOutUp");
    }, 2400);
    setTimeout(function () {
        $("#textChange").removeClass("fadeOutUp"); //#1
    }, 3200); //+0.8seconds
    setTimeout(function () {
        $("#textChange").addClass("fadeInUp").text("Hardworking."); //#2 TEXT CHANGE
    }, 3201);
    setTimeout(function () {
        $("#textChange").removeClass("fadeInUp").addClass("fadeOutUp"); //#3
    }, 4600); //+1.4seconds
    setTimeout(function () {
        $("#textChange").removeClass("fadeOutUp"); //#1
    }, 5400); //+0.8seconds
    setTimeout(function () {
        $("#textChange").addClass("fadeInUp").text("Sociable."); //#2 TEXT CHANGE
    }, 5401);
    setTimeout(function () {
        $("#textChange").removeClass("fadeInUp").addClass("fadeOutUp"); //#3
    }, 6800); //+1.4seconds
    setTimeout(function () {
        $("#textChange").removeClass("fadeOutUp"); //#1
    }, 7600); //+0.8seconds
    setTimeout(function () {
        $("#textChange").addClass("fadeInUp").text("Ready."); //#2 TEXT CHANGE
    }, 7601);
}