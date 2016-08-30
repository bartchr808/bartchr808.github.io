/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~biography.html~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
$(document).ready(function () {
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
        $("body").empty();
        $("body").html(bioTextM);
        //                $("#bioTitle").css("margin-left", "5.4381%"); //37.625
        $("#navBar").empty();
        $("#navBar").removeClass("animated");
        $("#navBar").css("height", "0px");
        $("#navBar").html(navBarM);
        $("#bioHeader h1").css("padding", "20% 0% 10% 0%");
        $(".tileFiller").remove();
        $(".projTextWrapper, .tileWrapper, .front, .back").css("width", $(window).width().toString());
        $(".projTextWrapper, .tileWrapper, .front, .back").css("height", $(window).width().toString());
        $(".skillText p").css("text-align", "left");
        $(".skillText div p").css("font-size", "160%");
        $("#galleryWrapper").css("margin-left", ($(window).width() / 27) + "px");
        //        $("#stockBack, #stockMiddle, #stockFront").css("width", ($(window).width() / 2) + "px");
        $(".wrapper").css("width", ($(window).width()) + "px");
    } else if ($(window).width() > 767) {
        $("body").empty();
        $("body").html(bioTextD);
        //        $("#iconRowBox").html(projectTilesD);
        $("#navBar").empty();
        $("#navBar").addClass("animated");
        $("#navBar").css("height", "80px");
        $("#navBar").html(navBarD);
        $("#bioHeader h1").css("padding", "10% 0% 10% 0%");
        $(".projTextWrapper, .tileWrapper, .front, .back").css("width", "300px");
        $(".projTextWrapper, .tileWrapper, .front, .back").css("height", "300px");
        $(".skillText p").css("text-align", "justify");
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
    $("#logo").css("-webkit-filter", "grayscale(100%)");
    $("#logo").css("filter", "grayscale(100%)");
    $("#homeButton").css("color", "black");
    $(function () {
        $('#projects, #projectsButton').hover(function () {
                $("#projects, #projectsButton").css("color", "#0058f1");
                $("#bio, #bioButton").css("color", "black");
            },
            function () {
                $("#projects, #projectsButton").css("color", "black");
                $("#bio, #bioButton").css("color", "#0058f1");
            });

        $('#logo, #homeButton').hover(function () {
                $("#logo").css("-webkit-filter", "grayscale(0%)");
                $("#logo").css("filter", "grayscale(0%)");
                $("#homeButton").css("color", "#0058f1");
                $("#bio, #bioButton").css("color", "black");
            },
            function () {
                $("#logo").css("-webkit-filter", "grayscale(100%)");
                $("#logo").css("filter", "grayscale(100%)");
                $("#homeButton").css("color", "black");
                $("#bio, #bioButton").css("color", "#0058f1");
            });

        $('#skills, #skillsButton').hover(function () {
                $("#skills, #skillsButton").css("color", "#0058f1");
                $("#bio, #bioButton").css("color", "black");
            },
            function () {
                $("#skills, #skillsButton").css("color", "black");
                $("#bio, #bioButton").css("color", "#0058f1");
            });

        $('#contact, #contactButton').hover(function () {
                $("#contact, #contactButton").css("color", "#0058f1");
                $("#bio, #bioButton").css("color", "black");
            },
            function () {
                $("#contact, #contactButton").css("color", "black");
                $("#bio, #bioButton").css("color", "#0058f1");
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





function openContactWindow() {
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


$(document).ready(function () {
    $("#bioTitle").css("opacity", 0);
    $("#bioPara1").css("opacity", 0);
    $("#profilePic").css("opacity", 0);
    //    $("#bioPara2").css("opacity", 0);
    //    $("#stockPic").css("opacity", 0);
    $("#bioPara3").css("opacity", 0);
    //    $("#bioPara4").css("opacity", 0);
    //    $("#bioTitle").css("margin-left", "5.4381%"); //37.625
    if ($(window).width() <= 767) {
        $("#bioTitle").css("opacity", 1);
        $("#actualBioPara1").css("margin-right", "0%"); //9.4375
        $("#bioPara1").css("opacity", 1);
        $("#bioPara3").css("opacity", 1);
        //            $("#actualBioPara1").css("margin-right", "10%"); //9.4375
        //            $("#bioPara1").css("opacity", 1);
        $("#profilePic").css("margin-top", "5.35%");
        $("#profilePic").css("opacity", 1);
    }
});

///*NavBar Disappear*/
//var lastScrollTop = 0;
//$(window).scroll(function (event) {
//    var scrollNum = $(this).scrollTop();
//    if (scrollNum > lastScrollTop) {
//        $("#navBar").removeClass("slideInDown");
//        $("#navBar").addClass("slideOutUp");
//    } else {
//        $("#navBar").removeClass("slideOutUp");
//        $("#navBar").addClass("slideInDown");
//    }
//    lastScrollTop = scrollNum;
//});

$(document).ready(function () {




    $(window).scroll(function () {
        if ($(window).width() > 767) {
            $("#bioHeader").css("opacity", 1 - $(window).scrollTop() / 300);
        }
        //        console.log($(window).scrollTop());

        //Desktop Bio
        if ($(window).scrollTop() < 316 && $(window).width() > 767) {
            $("#bioPara1").css("opacity", 0 + $(window).scrollTop() / 300);
            $("#bioTitle").css("margin-right", (70 - $(window).scrollTop() / 5.25).toString() + "%");
            $("#bioTitle").css("opacity", 0 + $(window).scrollTop() / 300);
            $("#actualBioPara1").css("margin-right", (45 - $(window).scrollTop() / 9).toString() + "%");
            $("#actualBioPara1").css("opacity", 0 + $(window).scrollTop() / 200);
            $("#profilePic").css("margin-top", (21 - $(window).scrollTop() / 20).toString() + "%");
            $("#profilePic").css("opacity", 0 + $(window).scrollTop() / 300);

        } else if ($(window).scrollTop() > 315 && $(window).width() > 767) {
            $("#bioTitle").css("margin-right", "10%"); //48.5
            $("#bioTitle").css("opacity", 1);
            $("#actualBioPara1").css("margin-right", "10%"); //9.4375
            $("#bioPara1").css("opacity", 1);
            $("#profilePic").css("margin-top", "5.35%");
            $("#profilePic").css("opacity", 1);
        };
        if ($(window).scrollTop() > 1000 && $(window).width() > 767) {
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
        } else if ($(window).scrollTop() < 1000 && $(window).width() > 767) {
            //            $("#stockPic").removeClass("animated fadeInLeftBig");
            //            $("#stockPic").addClass("animated fadeOutLeftBig");
            //            $("#stockPic").fadeOut();
            //            $("#bioPara2").removeClass("animated slideInRight");
            //            $("#bioPara2").addClass("animated slideOutRight");
            $(".wrapper").removeClass("expand");
            //            $("#bioPara2").fadeOut();
            //            $("#bioPara3").css("padding-top", "35%");
        };
        if ($(window).scrollTop() < 1600 && $(window).scrollTop() > 1200 && $(window).width() > 767) {
            $("#bioPara3").css("margin-top", (-90 + $(window).scrollTop() / 20).toString() + "%");
            $("#bioPara3").css("opacity", -8 + $(window).scrollTop() / 180);
            $("#bioPara3").css("margin-bottom", (0 + $(window).scrollTop() / 200).toString() + "%");
        } else if ($(window).scrollTop() > 1600 && $(window).width() > 767) {
            $("#bioPara3").css("margin-top", "-10.05%");
            $("#bioPara3").css("margin-bottom", "8.745%");
            $("#bioPara3").css("opacity", 1);
        }

        //Mobile Bio
        if ($(window).scrollTop() < 316 && $(window).width() <= 767) {
            //            $("#bioTitle").css("margin-left", "5.4381%"); //5.4381
            //            $("#bioTitle").css("margin-left", (-54.7 + $(window).scrollTop() / 5.25).toString() + "%"); //37.625
            //            $("#bioTitle").css("opacity", 0 + $(window).scrollTop() / 300);
            //            $("#bioPara1").css("opacity", 0 + $(window).scrollTop() / 300);
            //            $("#actualBioPara1").css("margin-right", (35 - $(window).scrollTop() / 9).toString() + "%");
            //            $("#actualBioPara1").css("opacity", 0 + $(window).scrollTop() / 200);
            //            $("#profilePic").css("margin-top", (21 - $(window).scrollTop() / 20).toString() + "%");
            //            $("#profilePic").css("opacity", 0 + $(window).scrollTop() / 300);

        } else if ($(window).scrollTop() > 315 && $(window).width() <= 767) {
            //            $("#bioTitle").css("margin-left", "5.4381%"); //5.4381
            //            $("#bioTitle").css("margin-left", "5.4381%"); //37.625
            //            $("#bioTitle").css("opacity", 1);
            //            $("#actualBioPara1").css("margin-right", "0%"); //9.4375
            //            $("#bioPara1").css("opacity", 1);
            //            //            $("#actualBioPara1").css("margin-right", "10%"); //9.4375
            //            //            $("#bioPara1").css("opacity", 1);
            //            $("#profilePic").css("margin-top", "5.35%");
            //            $("#profilePic").css("opacity", 1);

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


        if ($(window).scrollTop() > 1500 && $(window).width() <= 767) {
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
        } else if ($(window).scrollTop() < 1500 && $(window).width() <= 767) {
            //            $("#stockPic").removeClass("animated fadeInLeftBig");
            //            $("#stockPic").addClass("animated fadeOutLeftBig");
            //            $("#stockPic").fadeOut();
            //            $("#bioPara2").removeClass("animated slideInRight");
            //            $("#bioPara2").addClass("animated slideOutRight");
            $(".wrapper").removeClass("expand");
            //            $("#bioPara2").fadeOut();
            //            $("#bioPara3").css("padding-top", "35%");
        };

        //        if ($(window).scrollTop() < 1600 && $(window).scrollTop() > 1200) {
        //            $("#bioPara3").css("margin-top", (-115 + $(window).scrollTop() / 23).toString() + "%");
        //            $("#bioPara3").css("opacity", -8 + $(window).scrollTop() / 180);
        //            $("#bioPara3").css("margin-bottom", (0 + $(window).scrollTop() / 200).toString() + "%");
        //        } else if ($(window).scrollTop() > 1600) {
        //            $("#bioPara3").css("margin-top", "-45.4783%");
        //            $("#bioPara3").css("margin-bottom", "8.745%");
        //            $("#bioPara3").css("opacity", 1);
        //        };



        //        if ($(window).scrollTop() > 2100) {
        //            $("#bioPara4").removeClass("slideOutDown");
        //            $("#bioPara4").addClass("slideInUp");
        //            $("#bioPara4").fadeIn();
        //            $("#bioPara4").css("opacity", 1);
        //        };
        //        if ($(window).scrollTop() < 2100) {
        //            $("#bioPara4").removeClass("slideInUp");
        //            $("#bioPara4").addClass("slideOutDown");
        //        }
    });
});

/*HTML*/
var contactWindowD = '<div style="padding:0% 2% 2% 2%"><h1 style="font-family: Quatro Slab; font-weight: bold; font-size: 3em">Hi There!<a onclick="closeContactWindow()"><span class="crossClose"> </span></a></h1><p style="font-size: 0.90em; line-height: 1.2em">Interested in working with me on a project? Or take me with you into any of your business ventures? Or just curious? Whatever it is, lets get in touch!</p><p style="margin-top: 3%; font-weight: 600; font-size:1.5em">bart.chr@gmail.com</p><p style="font-weight: 600; font-size:1.5em">bchrzasz@edu.uwaterloo.ca</p><div style="margin-top: 5%; font-size: 1.5em"><span><a style="padding-right: 5%" class="contactLinks" href="https://github.com/bartchr808"><i class="fa fa-github"></i></a></span><span><a style="padding-right: 5%" class="contactLinks" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=bart.chr@gmail.com&tf=1"><i class="fa fa-envelope"></i></a></span><span><a style="padding-right: 5%" class="contactLinks" href="https://codepen.io/bartchr808/pens/public/"><i class="fa fa-codepen"></i></a></span><span><a style="padding-right: 5%" class="contactLinks" href="https://www.linkedin.com/in/bartlomiej-c-1222a010a?trk=hp-identity-name"><i class="fa fa-linkedin"></i></a></span></div></div>'

var contactWindowM = '<div style="padding: 12% 2% 0% 2%"><h1 style="font-family: Quatro Slab; font-weight: bold; font-size: 2.5em; margin-bottom: 10%">Hi There!<a onclick="closeContactWindow()"><span class="crossClose"> </span></a></h1><p style="font-size: 0.90em; line-height: 1.2em; margin-top: -8%">Interested in working with me on a project? Or take me with you into any of your business ventures? Or just curious? Whatever it is, lets get in touch!</p><p style="margin-top: 5%; font-weight: 800; font-size:0.8em">bart.chr@gmail.com</p><p style="font-size: 0.8em; font-weight: 800">bchrzasz@edu.uwaterloo.ca</p><div style="margin-top: 5%; font-size: 1.5em"><div style="margin-top: 5%; margin: auto; text-align: center"><span><a style="padding-right: 5%" class="contactLinks" href="https://github.com/bartchr808"><i class="fa fa-github"></i></a></span><span><a style="padding-right: 5%" class="contactLinks" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=bart.chr@gmail.com&tf=1"><i class="fa fa-envelope"></i></a></span><span><a style="padding-right: 5%" class="contactLinks" href="https://codepen.io/bartchr808/pens/public/"><i class="fa fa-codepen"></i></a></span><span><a style="padding-right: 5%" class="contactLinks" href="https://www.linkedin.com/in/bartlomiej-c-1222a010a?trk=hp-identity-name"><i class="fa fa-linkedin"></i></a></span></div></div></div>'

var navBarD = '<div class="row"><div class="col-sm-2 col-sm-offset-1"><p id="navBarText"><a style="color: #0058f1" id="bio" class="navLinks" href="../HTML/biography.html">Biography</a></p></div><div class="col-sm-2"><p id="navBarText"><a id="skills" class="navLinks" href="../HTML/skills.html">Skills</a></p></div><div class="col-sm-2"><a href="home.html"><img class="activeTab" id="logo" src="../Pictures/bartLogo.png"></a></div><div class="col-sm-2"><p id="navBarText"><a id="projects" class="navLinks" href="../HTML/projects.html">Projects</a></p></div><div class="col-sm-2"><p id="navBarText"><a id="contact" class="navLinks" onclick="openContactWindow()">Contact</a></p></div><div class="col-sm-1"></div></div>'
var navBarM = '<div class="row"><div class="col-sm-4"><div class="sidebar-nav"><div id="navBarM" style="padding: 0 0 0 0; margin: 0 0 0 0" class="animated navbar navbar-default navbar-fixed-top" role="navigation"><div class="navbar-header"><img style="margin: 0% 0 0 2%; height: 60px; width: auto; float:left" src="../Pictures/bartLogo.png"><div onclick="openNav()" id="nav-icon"><span></span><span></span><span></span><span></span></div></div><div class="collapsingNav"><ul class="nav navbar-nav"><li><a id="homeButton" class="navLinks animated" href="../HTML/home.html">Home</a></li><li><a style="color: #0058f1" id="bioButton" class="animated" href="../HTML/biography.html">Biography</a></li><li><a id="skillsButton" class="animated" href="../HTML/skills.html">Skills</a></li><li><a id="projectsButton" class="animated" href="../HTML/projects.html">Projects</a></li><li><a id="contactButton" class="animated" onclick="openContactWindow()">Contact</a></li></ul></div></div></div></div></div>'
    //var navBarM = '<div class="row"><div class="col-sm-4"><div class="sidebar-nav"><div id="navBarM" style="padding: 0 0 0 0; margin: 0 0 0 0" class="animated navbar navbar-default navbar-fixed-top" role="navigation"><div class="navbar-header"><img style="margin: 0% 0 0 2%; height: 60px; width: auto; float:left" src="../Pictures/bartLogo.png"><div onclick="openNav()" id="nav-icon"><span></span><span></span><span></span><span></span></div></div><div class="collapsingNav"><ul class="nav navbar-nav"><li><a id="homeButton" class="navLinks animated" href="../HTML/home.html">Home</a></li><li><a id="bioButton" class="animated" href="../HTML/biography.html">Biography</a></li><li><a id="skillsButton" class="animated" href="../HTML/skills.html">Skills</a></li><li><a style="color: #0058f1" id="projectsButton" class="animated" href="../HTML/projects.html">Projects</a></li><li><a id="contactButton" class="animated" onclick="openContactWindow()">Contact</a></li></ul></div></div></div></div></div>'


var bioTextD = '    <!--Header-->' +
    '    <div id="navBar" class="animated">' +
    '        <div class="row">' +
    '            <div class="col-sm-2 col-sm-offset-1">' +
    '                <p id="navBarText"><a id="bio" style="color: #0058f1" class="navLinks" href="../HTML/biography.html">Biography</a></p>' +
    '            </div>' +
    '            <div class="col-sm-2">' +
    '                <p id="navBarText"><a id="skills" class="navLinks" href="../HTML/skills.html">Skills</a></p>' +
    '            </div>' +
    '            <div class="col-sm-2">' +
    '                <a href="home.html"><img class="activeTab" id="logo" src="../Pictures/bartLogo.png"></a>' +
    '            </div>' +
    '            <div class="col-sm-2">' +
    '                <p id="navBarText"><a id="projects" class="navLinks" href="../HTML/projects.html">Projects</a></p>' +
    '            </div>' +
    '            <div class="col-sm-2">' +
    '                <p id="navBarText"><a id="contact" class="navLinks" onclick="openContactWindow()">Contact</a></p>' +
    '            </div>' +
    '            <div class="col-sm-1">' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '' +
    '' +
    '    <div id="windShad" class=""></div>' +
    '    <div id="contWind" class="skillText"></div>' +
    '' +
    '' +
    '    <!--Heading-->' +
    '    <div id="bioHeader">' +
    '        <h1 style="color: white; padding: 10% 0 0 0; text-align: center; font-size: 60px">Biography</h1>' +
    '    </div>' +
    '' +
    '' +
    '    <div style="margin: 10% 0 0 0" class="row">' +
    '        <div id="bioPara1" class="col-sm-7" style="padding: 0% 0 0 13%">' +
    '            <p style="float:right" class="textPara">' +
    '                <h1 id="bioTitle" style="padding: 20% 0 0 0%; float:right; margin-right: 10%">About Myself</h1>' +
    '                <span class="textPara" id="actualBioPara1" style="float:right; margin-right: 10%">My (full) name is <b>Bartlomiej Jozef Chrzaszcz</b>. Before I was born, my family decided to move to the US. I was born in Chicago Illinois and then moved to Burlington Ontario. Currently I am a First Year CS student and the University of Waterloo with an intention of joint majoring in Mathematical Finance.</span></p>' +
    '        </div>' +
    '' +
    '' +
    '        <!--' +
    '    <div style="margin: 10% 0 0 0" class="row">' +
    '        <div id="bioPara1" class="col-sm-7">' +
    '            <div id="bioTitle" style="padding: 14% 0 0 0%; margin-right: 10%">' +
    '                <h1>About Myself</h1>' +
    '            </div>' +
    '            <p style="float:right" class="textPara" id="actualBioPara1" style="margin-right: 10%">My (full) name is <b>Bartlomiej Jozef Chrzaszcz</b>. Before I was born, my family decided to move to the US. I was born in Chicago Illinois and then moved to Burlington Ontario. Currently I am a First Year CS student and the University of Waterloo with an intention of joint majoring in Mathematical Finance.</p>' +
    '            </span>' +
    '        </div>' +
    '-->' +
    '' +
    '        <div class="col-sm-5" id="profilePic" style="margin: 5.35% 0px 0px; padding: 0 35% 0 0%">' +
    '            <img id="actualProfilePic" src="../Pictures/bodyShot.png" class="imgCenter">' +
    '        </div>' +
    '' +
    '    </div>' +
    '    <br>' +
    '    <div class="row" style="margin: 10% 0% 0 0">' +
    '        <div id="stockPic" class="col-sm-6" style="margin: 0 0% 0 0">' +
    '            <div class="wrapper">' +
    '                <div class="inner">' +
    '                    <figure> <img id="stockBack" src="../Pictures/stockBack.png" style="z-index:-1">' +
    '                    </figure>' +
    '                    <figure> <img id="stockMiddle" style="margin-top:-268px; z-index: 5000" src="../Pictures/stockMiddle.png">' +
    '                    </figure>' +
    '                    <figure> <img id="stockFront" style="margin-top:-268px" src="../Pictures/stockFront.png">' +
    '                    </figure>' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '        <div id="bioPara2" class="col-sm-6">' +
    '            <p class="textPara" style="background-color: white; width: 400px; box-sizing: border-box; padding: 0 5% 0% 0%; margin: 0 0% 0 0%">One of my "not so secret" hobbies of mine is stock trading! I\'ve been trading for the past six years and using technical analysis. However, very recently I have been aggressively fiddling with statistical arbitrage strategies and their algorithms like Pair Trading. When I Realized the majority of daily trades are done by computer algorithms, I was baffled and mezmorized; this was what sparked my interest in persuing Computer Science.</p>' +
    '        </div>' +
    '    </div>' +
    '    <br>' +
    '    <br>' +
    '    <br>' +
    '    <br>' +
    '    <br>' +
    '    <br>' +
    '    <br>' +
    '    <br>' +
    '    <br>' +
    '    <br>' +
    '    <br>' +
    '' +
    '' +
    '    <div id="bioPara3" style="margin-top: -28.89%">' +
    '        <p class="textPara" style="padding: 0 2% 0 2%">I have been teaching myself CS since the Winter of 2015/2016. I started out with Python during which I built small text-based adventure games, and then moved on to HTML5, CSS, and JS for web development using <a class="textLink" href="https://www.freecodecamp.com/">freeCodeCamp</a>. Also, I used Python in building some of my Raspberry Pi projects. After completing my undergrad, I hope to get a Masters or PhD in a field in math or CS and go on and either work in software development or become a quant in New York.' +
    '        </p>' +
    '        <p class="textPara" style="font-size: 30px; color: #0058f1"><i>And the biggest thing I\'ve discovered so far is that there\'s more to being a programmer than just coding. The self-discovery, self-motivation, outside of the box thinking, and perseverance that a good programmer is required to have is what keeps bringing me back to the keyboard.</i></p>' +
    '    </div>' +
    '' +
    '' +
    '    <div id="bioSplitter" style="height: 500px; margin-top: -0.8%">' +
    '        <div id="bioPara4Wrapper">' +
    '            <p class="textPara" id="bioPara4" style="max-width: 1000px; font-size: 160%"><i>Whether it be working on front-end, back-end, mobile, security, data engineering, or just having a conversation about what\'s going on in the global economic and political environment, the best thing I can do for myself is to work hard and progress with my colleagues!</i>' +
    '            </p>' +
    '        </div>' +
    '    </div>' +
    '</body>';


var bioTextM = '    <!--Header-->' +
    '    <div id="navBar" class="animated">' +
    '        <div class="row">' +
    '            <div class="col-sm-2 col-sm-offset-1">' +
    '                <p id="navBarText"><a id="bio" style="color: #0058f1" class="navLinks" href="../HTML/biography.html">Biography</a></p>' +
    '            </div>' +
    '            <div class="col-sm-2">' +
    '                <p id="navBarText"><a id="skills" class="navLinks" href="../HTML/skills.html">Skills</a></p>' +
    '            </div>' +
    '            <div class="col-sm-2">' +
    '                <a href="home.html"><img class="activeTab" id="logo" src="../Pictures/bartLogo.png"></a>' +
    '            </div>' +
    '            <div class="col-sm-2">' +
    '                <p id="navBarText"><a id="projects" class="navLinks" href="../HTML/projects.html">Projects</a></p>' +
    '            </div>' +
    '            <div class="col-sm-2">' +
    '                <p id="navBarText"><a id="contact" class="navLinks" onclick="openContactWindow()">Contact</a></p>' +
    '            </div>' +
    '            <div class="col-sm-1">' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '' +
    '' +
    '    <div id="windShad" style="z-index: 1000" class=""></div>' +
    '    <div style="top: 10px; width: 100%; z-index: 1000" id="contWind" class="skillText"></div>' +
    '' +
    '' +
    '    <!--Heading-->' +
    '' +
    '' +
    '    <div id="bioHeader">' +
    '        <h1 style="color: white; padding: 10% 0 0 0; text-align: center; font-size: 60px">Biography</h1>' +
    '    </div>' +
    '' +
    '' +
    '' +
    '    <!--' +
    '    <div id="projectsHeader">' +
    '<h1 style="padding: 10% 0 10% 0; text-align: center; font-size: 60px">Projects</h1>' +
    '</div>' +
    '-->' +
    '' +
    '' +
    '' +
    '    <div style="margin: -10% 0 0 0" class="row">' +
    '        <div id="bioPara1" class="col-sm-7">' +
    '            <p style="float:right" class="textPara">' +
    '                <h1 id="bioTitle" style="padding: 20% 0 0 11%; text-align: center; float:left">About Myself</h1><span class="textPara" id="actualBioPara1" style="float:left">My (full) name is <b>Bartlomiej Jozef Chrzaszcz</b>. Before I was born, my family decided to move to the US. I was born in Chicago Illinois and then moved to Burlington Ontario. Currently I am a First Year CS student and the University of Waterloo with an intention of joint majoring in Mathematical Finance.</span></p>' +
    '        </div>' +
    '' +
    '' +
    '        <!--' +
    '    <div style="margin: 10% 0 0 0" class="row">' +
    '        <div id="bioPara1" class="col-sm-7">' +
    '            <div id="bioTitle" style="padding: 14% 0 0 0%">' +
    '                <h1>About Myself</h1>' +
    '            </div>' +
    '            <p style="float:right" class="textPara" id="actualBioPara1">My (full) name is <b>Bartlomiej Jozef Chrzaszcz</b>. Before I was born, my family decided to move to the US. I was born in Chicago Illinois and then moved to Burlington Ontario. Currently I am a First Year CS student and the University of Waterloo with an intention of joint majoring in Mathematical Finance.</p>' +
    '            </span>' +
    '        </div>' +
    '-->' +
    '' +
    '        <div class="col-sm-5" id="profilePic" style="margin: 0% 0 0 0">' +
    '            <img id="actualProfilePic" src="../Pictures/bodyShot.png" class="imgCenter">' +
    '        </div>' +
    '' +
    '    </div>' +
    '    <br>' +
    '' +
    '' +
    '    <div class="row" style="margin: 10% 0% 0 0; overflow: hidden;">' +
    '        <div id="bioPara2" class="col-sm-6">' +
    '            <p class="textPara" style="background-color: white; box-sizing: border-box">One of my "not so secret" hobbies of mine is stock trading! I\'ve been trading for the past six years and using technical analysis. However, very recently I have been aggressively fiddling with statistical arbitrage strategies and their algorithms like Pair Trading. When I Realized the majority of daily trades are done by computer algorithms, I was baffled and mezmorized; this was what sparked my interest in persuing Computer Science.</p>' +
    '        </div>' +
    '' +
    '        <div id="stockPic" class="col-sm-6" style="margin: 30% 0% 0% -4%">' +
    '            <div class="wrapper">' +
    '                <div class="inner">' +
    '                    <figure> <img id="stockBack" src="../Pictures/stockBack.png" style="z-index:-1">' +
    '                    </figure>' +
    '                    <figure> <img id="stockMiddle" style="margin-top:-52%; z-index: 5000" src="../Pictures/stockMiddle.png">' +
    '                    </figure>' +
    '                    <figure> <img id="stockFront" style="margin-top:-52%" src="../Pictures/stockFront.png">' +
    '                    </figure>' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '    <br>' +
    '    <br>' +
    '    <br>' +
    '    <br>' +
    '    <br>' +
    '    <br>' +
    '    <br>' +
    '    <br>' +
    '    <br>' +
    '    <br>' +
    '    <br>' +
    '' +
    '' +
    '' +
    '' +
    '' +
    '    <div id="bioPara3" style="margin-top: -45%; padding: 0 1em 0 1em;">' +
    '        <p class="textPara">I have been teaching myself CS since the Winter of 2015/2016. I started out with Python during which I built small text-based adventure games, and then moved on to HTML5, CSS, and JS for web development using <a class="textLink" href="https://www.freecodecamp.com/">freeCodeCamp</a>. Also, I used Python in building some of my Raspberry Pi projects. After completing my undergrad, I hope to get a Masters or PhD in a field in math or CS and go on and either work in software development or become a quant in New York.' +
    '        </p>' +
    '        <p class="textPara" style="margin: 20% 0 25% 0; font-size: 1.5em; line-height: 1.2em; color: #0058f1; text-align: left"><i>And the biggest thing I\'ve discovered so far is that there\'s more to being a programmer than just coding. The self-discovery, self-motivation, outside of the box thinking, and perseverance that a good programmer is required to have is what keeps bringing me back to the keyboard.</i></p>' +
    '    </div>' +
    '' +
    '' +
    '' +
    '    <div id="bioSplitter" style="height: auto; margin-top: 0.8%">' +
    '        <div id="bioPara4Wrapper">' +
    '            <p class="textPara" id="bioPara4" style="font-size: 1.5em; line-height: 1.2em; max-width: 1000px"><i>Whether it be working on front-end, back-end, mobile, security, data engineering, or just having a conversation about what\'s going on in the global economic and political environment, the best thing I can do for myself is to work hard and progress with my colleagues!</i>' +
    '            </p>' +
    '        </div>' +
    '    </div>' +
    '</body>';