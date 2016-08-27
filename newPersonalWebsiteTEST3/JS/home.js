$(document).ready(function () {
    // Check browser support
    if (typeof (Storage) !== "undefined") {
        // Store
        if (sessionStorage.getItem("Session") == "true") {
            console.log("got cookie");
            instRemoveLoader();
            $("#textChange").text("Ready.");
        } else {
            terminalTypeWriter();
            setTimeout(function () {
                textAnimate();
            }, 8000);
            console.log("no cookie:" + sessionStorage.getItem("Session"));
            sessionStorage.setItem("Session", true);
        }
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
});

function terminalTypeWriter() {
    $(function () {
        $(".typeWriter").typed({
            strings: ["Barts-MacBook-Pro:~ bart$ cd Desktop/personalWebsite/", "Barts-MacBook-Pro:~ bart$ cd Desktop/personalWebsite/<br>Barts-MacBook-Pro:personalWebsite bart$ open ../home.html", "Barts-MacBook-Pro:~ bart$ cd Desktop/personalWebsite/<br>Barts-MacBook-Pro:personalWebsite bart$ open ./home.html", "Barts-MacBook-Pro:~ bart$ cd Desktop/personalWebsite/<br>Barts-MacBook-Pro:personalWebsite bart$ open ./home.html<br>>Launching...", "Barts-MacBook-Pro:~ bart$ cd Desktop/personalWebsite/<br>Barts-MacBook-Pro:personalWebsite bart$ open ./home.html<br>>Launching...<br>"],
            typeSpeed: 0,
            contentType: "html",
        });
        console.log($(".typeWriter").val().length);
    });
};



function removeLoader() {
    //    $("#coverLeft").removeAttr("class");
    //    $("#coverRight").removeAttr("class");
    //    console.log($(".typeWriter").val().length);
    $("#coverLeft").fadeOut(1000);
    $("#coverRight").fadeOut(1000);
    $(".shell-wrap").fadeOut(1000).remove();
    $(".shell-top-bar").fadeOut(1000).remove();
    $(".shell-body").fadeOut(1000).remove();
    $(".fixedShellText").fadeOut(1000).remove();
    $(".typeWriter").fadeOut(1000).remove();
}

function instRemoveLoader() {
    $("#coverLeft").remove()
    $("#coverRight").remove()
    $(".shell-wrap").remove();
    $(".shell-top-bar").remove();
    $(".shell-body").remove();
    $(".fixedShellText").remove();
    $(".typeWriter").remove();
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