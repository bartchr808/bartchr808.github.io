$(window).load(function () {
    $('#gallery').jqcarousel();
});





//$(".bio").hover(function () {
//    $(this).css("color", "#0058f1");
//    $("#skills").css("color", "black");
//    console.log("success");
//}, function () {
//    $(this).css("color", "black");
//    $("#skills").css("color", "#0058f1");
//});

$(function () {
    $('#bio').hover(function () {
            $("#bio").css("color", "#0058f1");
            $("#skills").css("color", "black");
        },
        function () {
            $("#bio").css("color", "black");
            $("#skills").css("color", "#0058f1");
        });

    $('#logo').hover(function () {
            $("#skills").css("color", "black");
            $("#logo").css("-webkit-filter", "grayscale(0%)");
            $("#logo").css("filter", "grayscale(0%)");
        },
        function () {
            $("#skills").css("color", "#0058f1");
            $("#logo").css("-webkit-filter", "grayscale(100%)");
            $("#logo").css("filter", "grayscale(100%)");
        });

    $('#projects').hover(function () {
            $("#projects").css("color", "#0058f1");
            $("#skills").css("color", "black");
        },
        function () {
            $("#projects").css("color", "black");
            $("#skills").css("color", "#0058f1");
        });

    $('#contact').hover(function () {
            $("#contact").css("color", "#0058f1");
            $("#skills").css("color", "black");
        },
        function () {
            $("#contact").css("color", "black");
            $("#skills").css("color", "#0058f1");
        });
});




var HTMLText = "<div style='width: 100%; text-align: center'><p style='font-size: 150%'>Novice.</p></div><p class='skillDesc'>Can use HTML to build the front end of websites. Learned using Stack OverFlow forums and <a class='skillLink' href='https://www.freecodecamp.com/'>freeCodeCamp</a>, reverse engineering CodePens, and doing my own tests and experiments. </p>"

var CSSText = "<div style='width: 100%; text-align: center'><p style='font-size: 150%'>Novice.</p></div><p class='skillDesc'>Can stylize HTML elements, animations, creating icons/images. Learned using Stack OverFlow forums and <a class='skillLink' href='https://www.freecodecamp.com/'>freeCodeCamp</a>, reverse engineering CodePens, and doing my own tests and experiments.</p>"

var JSText = "<div style='width: 100%; text-align: center'><p style='font-size: 150%'>Novice.</p></div><p class='skillDesc'>Can use numerous of the built in functions, APIs, Ajax, JQuery, animations, and get geolocations. Learned using Stack OverFlow forums and <a class='skillLink' href='https://www.freecodecamp.com/'>freeCodeCamp</a>, reverse engineering CodePens, and doing my own tests and experiments.</p>"

var PythonText = "<div style='width: 100%; text-align: center'><p style='font-size: 150%'>Beginner/Novice.</p></div><p class='skillDesc'>Can use many of the built in functions. Used Python to create my Raspberry Pi projects. Learned using different Raspberry Pi tutorials and <a class='skillLink' href='http://learnpythonthehardway.org/'>Learn Python The Hard Way</a>.</p>"

var JQueryText = "<div style='width: 100%; text-align: center'><p style='font-size: 150%'>Novice.</p></div><p class='skillDesc'>Can use many of the built in functions to manipulate HTML elements such as animations, style changes depending on screen size, actions started by scroll amount, and change text based on data recieved from API or button. "





//setTimeout(function () {
//    $("#textChange").addClass("fadeOutUp");
//}, 2400);
//setTimeout(function () {
//    $("#textChange").removeClass("fadeOutUp"); //#1
//}, 3200); //+0.8seconds
//setTimeout(function () {
//    $("#textChange").addClass("fadeInUp").text("Hardworking."); //#2 TEXT CHANGE
//}, 3201);
//setTimeout(function () {
//    $("#textChange").removeClass("fadeInUp").addClass("fadeOutUp"); //#3
//}, 4600); //+1.4seconds

$(document).ready(function () {
    //
    //    var movementStrength = 25;
    //    var height = movementStrength / $(window).height();
    //    var width = movementStrength / $(window).width();
    //    $(document).mousemove(function (e) {
    //        var pageX = e.pageX - ($(window).width() / 2);
    //        var pageY = e.pageY - ($(window).height() / 2);
    //        var newvalueX = width * pageX * -1 - 25;
    //        var newvalueY = height * pageY * -1 - 50;
    //        $('#skillsHeader').css("background-position", newvalueX + "px     " + newvalueY + "px");
    //    });
    //
    $("#skillDesc").html(JQueryText);

    $("#logoHTML").click(function () {
        setTimeout(function () {
            $("#skillDesc").addClass("animated fadeOut");
        }, 0);
        setTimeout(function () {
            $("#skillDesc").removeClass("animated fadeOut"); //#1
            $("#skillDesc").html(HTMLText);
            $("#skillDesc").addClass("animated fadeIn");
        }, 330);
        console.log("HTML");
    });
    $("#logoJQuery").click(function () {
        setTimeout(function () {
            $("#skillDesc").addClass("animated fadeOut");
        }, 0);
        setTimeout(function () {
            $("#skillDesc").removeClass("animated fadeOut"); //#1
            $("#skillDesc").html(JQueryText);
            $("#skillDesc").addClass("animated fadeIn");
        }, 330);
        console.log("JQuery");
    });
    $("#logoCSS").click(function () {
        setTimeout(function () {
            $("#skillDesc").addClass("animated fadeOut");
        }, 0);
        setTimeout(function () {
            $("#skillDesc").removeClass("animated fadeOut"); //#1
            $("#skillDesc").html(CSSText);
            $("#skillDesc").addClass("animated fadeIn");
        }, 330);
        console.log("CSS");
    });
    $("#logoPython").click(function () {
        setTimeout(function () {
            $("#skillDesc").addClass("animated fadeOut");
        }, 0);
        setTimeout(function () {
            $("#skillDesc").removeClass("animated fadeOut"); //#1
            $("#skillDesc").html(PythonText);
            $("#skillDesc").addClass("animated fadeIn");
        }, 330);
        console.log("Python");
    });
    $("#logoJS").click(function () {
        setTimeout(function () {
            $("#skillDesc").addClass("animated fadeOut");
        }, 0);
        setTimeout(function () {
            $("#skillDesc").removeClass("animated fadeOut"); //#1
            $("#skillDesc").html(JSText);
            $("#skillDesc").addClass("animated fadeIn");
        }, 330);
        console.log("JS");
    });
});