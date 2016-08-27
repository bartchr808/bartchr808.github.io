$(window).load(function () {
    $('#gallery').jqcarousel();
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




var HTMLText = "<div style='width: 100%; text-align: center'><p style='font-size: 150%'>Advanced.</p></div><p class='skillDesc'>Can use HTML to build the front end of websites. Learned using Stack OverFlow forums and <a class='skillLink' href='https://www.freecodecamp.com/'>freeCodeCamp</a>, reverse engineering CodePens, and doing my own tests and experiments. </p>"

var CSSText = "<div style='width: 100%; text-align: center'><p style='font-size: 150%'>Advanced.</p></div><p class='skillDesc'>Can stylize HTML elements, animations, creating icons/images. Learned using Stack OverFlow forums and <a class='skillLink' href='https://www.freecodecamp.com/'>freeCodeCamp</a>, reverse engineering CodePens, and doing my own tests and experiments.</p>"

var JSText = "<div style='width: 100%; text-align: center'><p style='font-size: 150%'>Advanced.</p></div><p class='skillDesc'>Can use numerous of the built in functions, APIs, Ajax, JQuery, animations, and get geolocations. Learned using Stack OverFlow forums and <a class='skillLink' href='https://www.freecodecamp.com/'>freeCodeCamp</a>, reverse engineering CodePens, and doing my own tests and experiments.</p>"

var PythonText = "<div style='width: 100%; text-align: center'><p style='font-size: 150%'>Novice/Advanced.</p></div><p class='skillDesc'>Can use many of the built in functions. Used Python to create my Raspberry Pi projects. Learned using different Raspberry Pi tutorials and <a class='skillLink' href='http://learnpythonthehardway.org/'>Learn Python The Hard Way</a>.</p>"

var JQueryText = "<div style='width: 100%; text-align: center'><p style='font-size: 150%'>Advanced.</p></div><p class='skillDesc'>Can use many of the built in functions to manipulate HTML elements such as animations, style changes depending on screen size, actions started by scroll amount, and change text based on data recieved from API or button. "





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