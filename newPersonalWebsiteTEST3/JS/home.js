$(document).ready(function () {
    //    terminalTypeWriter();
    //    setTimeout(function () {
    //        textAnimate();
    //    }, 8000);
    //     Check browser support
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
    mobileFriendlyNavBar();
    //    projTileClick();
    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
    });
    navColorChange();
});

$(window).resize(function () {
    //    $('#gallery').jqcarousel();
    mobileFriendlyNavBar();
    //    projTileClick();
    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
    });
    navColorChange();
});

//$(function () {
//    FastClick.attach(document.body);
//});



function mobileFriendlyNavBar() {
    if ($(window).width() <= 767) { //767
        $("#navBar").empty();
        $("#navBar").removeClass("animated");
        $("#navBar").css("height", "0px");
        $("#navBar").html(navBarM);
        $("#skillsHeader h1").css("padding", "20% 0% 10% 0%");
        $(".tileFiller").remove();
        $(".projTextWrapper, .tileWrapper, .front, .back").css("width", $(window).width().toString());
        $(".projTextWrapper, .tileWrapper, .front, .back").css("height", $(window).width().toString());
        $(".skillText p").css("text-align", "left");
        $(".skillText div p").css("font-size", "160%");
        $("#galleryWrapper").css("margin-left", ($(window).width() / 27) + "px");
    } else if ($(window).width() > 767) {
        //        $("#iconRowBox").html(projectTilesD);
        $("#navBar").empty();
        $("#navBar").addClass("animated");
        $("#navBar").css("height", "80px");
        $("#navBar").html(navBarD);
        $("#skillsHeader h1").css("padding", "10% 0% 10% 0%");
        $(".projTextWrapper, .tileWrapper, .front, .back").css("width", "300px");
        $(".projTextWrapper, .tileWrapper, .front, .back").css("height", "300px");
        $(".skillText p").css("text-align", "justify");
        $("#skillText").css("text-align", "justify");
        $(".skillText div p").css("font-size", "200%");
        $("#galleryWrapper").css("margin-left", "0px");
    }
};


var openedClosedNav = false;

function openNav() {
    $(".collapsingNav").clearQueue();
    console.log(openedClosedNav);
    if (openedClosedNav == false) {
        var windowHeight = window.innerHeight - 60;
        $(".nav li").css("margin-top", windowHeight / 10);
        console.log(windowHeight);
        $(".collapsingNav").animate({
            height: windowHeight
        }, 300);
        $("#homeButton, #bioButton, #skillsButton, #projectsButton, #contactButton").css("opacity", "0");
        $("#homeButton, #bioButton, #skillsButton, #projectsButton, #contactButton").removeClass("fadeOutRight");
        setTimeout(function () {
            $("#homeButton").addClass("fadeInRight")
        }, 100);
        setTimeout(function () {
            $("#bioButton").addClass("fadeInRight")
        }, 200);
        setTimeout(function () {
            $("#skillsButton").addClass("fadeInRight")
        }, 300);
        setTimeout(function () {
            $("#projectsButton").addClass("fadeInRight")
        }, 400);
        setTimeout(function () {
            $("#contactButton").addClass("fadeInRight")
        }, 500);

        openedClosedNav = true;
        console.log(openedClosedNav);
    } else if (openedClosedNav == true) {
        $(".collapsingNav").animate({
            height: "0px"
        }, 300);
        //        $("body").animate({
        //            marginTop: "0px"
        //        }, 800);
        openedClosedNav = false;
        console.log(openedClosedNav);
        $("#homeButton, #bioButton, #skillsButton, #projectsButton, #contactButton").css("opacity", "1");
        $("#homeButton, #bioButton, #skillsButton, #projectsButton, #contactButton").removeClass("fadeInRight");
        setTimeout(function () {
            $("#homeButton").addClass("fadeOutRight")
        }, 80);
        setTimeout(function () {
            $("#bioButton").addClass("fadeOutRight")
        }, 60);
        setTimeout(function () {
            $("#skillsButton").addClass("fadeOutRight")
        }, 40);
        setTimeout(function () {
            $("#projectsButton").addClass("fadeOutRight")
        }, 20);
        setTimeout(function () {
            $("#contactButton").addClass("fadeOutRight")
        }, 0);
    }
}

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}

function navColorChange() {
    $(function () {
        $('#projects, #projectsButton').hover(function () {
                $("#projects, #projectsButton").css("color", "#0058f1");
                $("#skills, #skillsButton").css("color", "black");
            },
            function () {
                $("#projects, #projectsButton").css("color", "black");
                $("#skills, #skillsButton").css("color", "#0058f1");
            });

        $('#logo, #homeButton').hover(function () {
                $("#logo").css("-webkit-filter", "grayscale(0%)");
                $("#logo").css("filter", "grayscale(0%)");
                $("#homeButton").css("color", "#0058f1");
                $("#skills, #skillsButton").css("color", "black");
            },
            function () {
                $("#logo").css("-webkit-filter", "grayscale(100%)");
                $("#logo").css("filter", "grayscale(100%)");
                $("#homeButton").css("color", "black");
                $("#skills, #skillsButton").css("color", "#0058f1");
            });

        $('#bio, #bioButton').hover(function () {
                $("#bio, #bioButton").css("color", "#0058f1");
                $("#skills, #skillsButton").css("color", "black");
            },
            function () {
                $("#bio, #bioButton").css("color", "black");
                $("#skills, #skillsButton").css("color", "#0058f1");
            });

        $('#contact, #contactButton').hover(function () {
                $("#contact, #contactButton").css("color", "#0058f1");
                $("#skills, #skillsButton").css("color", "black");
            },
            function () {
                $("#contact, #contactButton").css("color", "black");
                $("#skills, #skillsButton").css("color", "#0058f1");
            });
        //    $('#skillsButton').hover(function () {
        //            $("#skillsButton").css("color", "#0058f1");
        //            $("#projectsButton").css("color", "black");
        //        },
        //        function () {
        //            $("#skillsButton").css("color", "black");
        //            $("#projectsButton").css("color", "#0058f1");
        //        });
        //
        //    $('#homeButton').hover(function () {
        //            $("#homeButton").css("color", "#0058f1");
        //            $("#projectsButton").css("color", "black");
        //        },
        //        function () {
        //            $("#homeButton").css("color", "black");
        //            $("#projectsButton").css("color", "#0058f1");
        //        });
        //
        //    $('#bioButton').hover(function () {
        //            $("#bioButton").css("color", "#0058f1");
        //            $("#projectsButton").css("color", "black");
        //        },
        //        function () {
        //            $("#bioButton").css("color", "black");
        //            $("#projectsButton").css("color", "#0058f1");
        //        });
        //
        //    $('#contactButton').hover(function () {
        //            $("#contactButton").css("color", "#0058f1");
        //            $("#projectsButton").css("color", "black");
        //        },
        //        function () {
        //            $("#contactButton").css("color", "black");
        //            $("#projectsButton").css("color", "#0058f1");
        //        });
    });
};


/*NavBar Disappear*/
var lastScrollTop = 0;
$(window).scroll(function (event) {

    var windowHeight = ((window.innerHeight - 60) + "px").toString();
    var navHeight = $(".collapsingNav").css("height");

    if (windowHeight != navHeight) {
        var scrollNum = $(this).scrollTop();
        //    console.log($(".collapsingNav").css("height"));
        //    console.log((window.innerHeight - 60).toString() + "px");
        //        if ($(".collapsingNav").css("height") == (window.innerHeight - 60).toString() + "px") {
        //            $("#navBarM").removeClass("animated");
        //        } else {
        //            $("#navBarM").addClass("animated");
        //        }

        if (scrollNum > lastScrollTop) {
            $("#navBar").removeClass("slideInDown");
            $("#navBar").addClass("slideOutUp");
            //            $("#navBarM").removeClass("slideInDown");
            //            $("#navBarM").addClass("slideOutUp");
        } else {
            $("#navBar").removeClass("slideOutUp");
            $("#navBar").addClass("slideInDown");
            //            $("#navBarM").removeClass("slideOutUp");
            //            $("#navBarM").addClass("slideInDown");
        }
        lastScrollTop = scrollNum;
    }
});

/*Contact Window*/
function openContactWindow() {
    console.log("tttt");
    $("#windShad").addClass("contactWindowShader");
    $("#contWind").addClass("contactWindow");
    $("#contWind").css("margin-top", "15%");
    if ($(window).width() <= 767) {
        $("#contWind").html(contactWindowM);
        $(".contactWindow").animate({
            opacity: 1,
            height: "80%"
        }, 250);
        $(".contactWindowShader").animate({
            opacity: 0.7,
        }, 250);
    } else if ($(window).width() > 767) {
        $("#contWind").html(contactWindowD);
        $(".contactWindow").animate({
            opacity: 1,
            height: "60%"
        }, 250);
        $(".contactWindowShader").animate({
            opacity: 0.7,
        }, 250);
    }
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


function terminalTypeWriter() {
    $(function () {
        $(".typeWriter").typed({
            strings: ["Barts-MacBook-Pro:~ bart$ cd Desktop/personalWebsite/", "Barts-MacBook-Pro:~ bart$ cd Desktop/personalWebsite/<br>Barts-MacBook-Pro:personalWebsite bart$ open ../home.html", "Barts-MacBook-Pro:~ bart$ cd Desktop/personalWebsite/<br>Barts-MacBook-Pro:personalWebsite bart$ open ./home.html", "Barts-MacBook-Pro:~ bart$ cd Desktop/personalWebsite/<br>Barts-MacBook-Pro:personalWebsite bart$ open ./home.html<br>>Launching...", "Barts-MacBook-Pro:~ bart$ cd Desktop/personalWebsite/<br>Barts-MacBook-Pro:personalWebsite bart$ open ./home.html<br>>Launching...<br>"],
            typeSpeed: 0,
            contentType: "html",
        });
        //        console.log($(".typeWriter").val().length);
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
        $("#textChange").addClass("fadeInUp").text("Intelligent."); //#2 TEXT CHANGE
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

/*Contact Window*/
function openContactWindow() {
    console.log("tttt");
    $("#windShad").addClass("contactWindowShader");
    $("#contWind").addClass("contactWindow");
    $("#contWind").css("margin-top", "15%");
    if ($(window).width() <= 767) {
        $("#contWind").html(contactWindowM);
        $(".contactWindow").animate({
            opacity: 1,
            height: "80%"
        }, 250);
        $(".contactWindowShader").animate({
            opacity: 0.7,
        }, 250);
    } else if ($(window).width() > 767) {
        $("#contWind").html(contactWindowD);
        $(".contactWindow").animate({
            opacity: 1,
            height: "60%"
        }, 250);
        $(".contactWindowShader").animate({
            opacity: 0.7,
        }, 250);
    }
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

/*HTML*/
var contactWindowD = '<div style="padding:0% 2% 2% 2%"><h1 style="font-family: Quatro Slab; font-weight: bold; font-size: 3em">Hi There!<a onclick="closeContactWindow()"><span class="crossClose"> </span></a></h1><p style="font-size: 0.90em; line-height: 1.2em">Interested in working with me on a project? Or take me with you into any of your business ventures? Or just curious? Whatever it is, lets get in touch!</p><p style="margin-top: 3%; font-weight: 600; font-size:1.5em">bart.chr@gmail.com</p><p style="font-weight: 600; font-size:1.5em">bchrzasz@edu.uwaterloo.ca</p><div style="margin-top: 5%; font-size: 1.5em"><span><a style="padding-right: 5%" class="contactLinks" href="https://github.com/bartchr808"><i class="fa fa-github"></i></a></span><span><a style="padding-right: 5%" class="contactLinks" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=bart.chr@gmail.com&tf=1"><i class="fa fa-envelope"></i></a></span><span><a style="padding-right: 5%" class="contactLinks" href="https://codepen.io/bartchr808/pens/public/"><i class="fa fa-codepen"></i></a></span><span><a style="padding-right: 5%" class="contactLinks" href="https://www.linkedin.com/in/bartlomiej-c-1222a010a?trk=hp-identity-name"><i class="fa fa-linkedin"></i></a></span></div></div>'

var contactWindowM = '<div style="padding: 12% 2% 0% 2%"><h1 style="font-family: Quatro Slab; font-weight: bold; font-size: 2.5em; margin-bottom: 10%">Hi There!<a onclick="closeContactWindow()"><span class="crossClose"> </span></a></h1><p style="font-size: 0.90em; line-height: 1.2em; margin-top: -8%">Interested in working with me on a project? Or take me with you into any of your business ventures? Or just curious? Whatever it is, lets get in touch!</p><p style="margin-top: 5%; font-weight: 800; font-size:0.8em">bart.chr@gmail.com</p><p style="font-size: 0.8em; font-weight: 800">bchrzasz@edu.uwaterloo.ca</p><div style="margin-top: 5%; font-size: 1.5em"><div style="margin-top: 5%; margin: auto; text-align: center"><span><a style="padding-right: 5%" class="contactLinks" href="https://github.com/bartchr808"><i class="fa fa-github"></i></a></span><span><a style="padding-right: 5%" class="contactLinks" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=bart.chr@gmail.com&tf=1"><i class="fa fa-envelope"></i></a></span><span><a style="padding-right: 5%" class="contactLinks" href="https://codepen.io/bartchr808/pens/public/"><i class="fa fa-codepen"></i></a></span><span><a style="padding-right: 5%" class="contactLinks" href="https://www.linkedin.com/in/bartlomiej-c-1222a010a?trk=hp-identity-name"><i class="fa fa-linkedin"></i></a></span></div></div></div>'

var navBarD = '<div class="row"><div class="col-sm-2 col-sm-offset-1"><p id="navBarText"><a id="bio" class="navLinks" href="../HTML/biography.html">Biography</a></p></div><div class="col-sm-2"><p id="navBarText"><a id="skills" class="navLinks" href="../HTML/skills.html" style="color: #0058f1">Skills</a></p></div><div class="col-sm-2"><a href="home.html"><img class="activeTab" id="logo" src="../Pictures/bartLogo.png"></a></div><div class="col-sm-2"><p id="navBarText"><a id="projects" class="navLinks" href="../HTML/projects.html">Projects</a></p></div><div class="col-sm-2"><p id="navBarText"><a id="contact" class="navLinks" onclick="openContactWindow()">Contact</a></p></div><div class="col-sm-1"></div></div>'
var navBarM = '<div class="row"><div class="col-sm-4"><div class="sidebar-nav"><div id="navBarM" style="padding: 0 0 0 0; margin: 0 0 0 0" class="animated navbar navbar-default navbar-fixed-top" role="navigation"><div class="navbar-header"><img style="margin: 0% 0 0 2%; height: 60px; width: auto; float:left" src="../Pictures/bartLogo.png"><div onclick="openNav()" id="nav-icon"><span></span><span></span><span></span><span></span></div></div><div class="collapsingNav"><ul class="nav navbar-nav"><li><a id="homeButton" class="navLinks animated" href="../HTML/home.html">Home</a></li><li><a id="bioButton" class="animated" href="../HTML/biography.html">Biography</a></li><li><a style="color: #0058f1" id="skillsButton" class="animated" href="../HTML/skills.html">Skills</a></li><li><a id="projectsButton" class="animated" href="../HTML/projects.html">Projects</a></li><li><a id="contactButton" class="animated" onclick="openContactWindow()">Contact</a></li></ul></div></div></div></div></div>'