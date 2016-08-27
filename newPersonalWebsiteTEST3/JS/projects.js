/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~projects.html~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
$(document).ready(function () {
    projTileClick(false);
    mobileFriendlyNavBar();
    //    projTileClick();
    $('#nav-icon3').click(function () {
    $(this).toggleClass('open');
});
});

$(window).resize(function () {
    projTileClick(false);
    mobileFriendlyNavBar();
    //    projTileClick();
    $('#nav-icon3').click(function () {
        $(this).toggleClass('open');
    });
});

//$(function () {
//    FastClick.attach(document.body);
//});



function mobileFriendlyNavBar() {
    if ($(window).width() <= 767) { //767
        //        projTileClick(false);
        $("#navBar").empty();
        $("#navBar").removeClass("animated");
        $("#navBar").css("height", "0px");
        $("#navBar").html(navBarM);
        $("#projectsHeader h1").css("padding", "20% 0% 10% 0%");
        $(".tileFiller").remove();
        $(".projTextWrapper, .tileWrapper, .front, .back").css("width", $(window).width().toString());
        $(".projTextWrapper, .tileWrapper, .front, .back").css("height", $(window).width().toString());
        //        projTileClick(false);
    } else if ($(window).width() > 767) {
        //        projTileClick(false);
        $("#iconRowBox").html(projectTilesD);
        $("#navBar").empty();
        $("#navBar").addClass("animated");
        $("#navBar").css("height", "80px");
        $("#navBar").html(navBarD);
        $(".projTextWrapper, .tileWrapper, .front, .back").css("width", "300px");
        $(".projTextWrapper, .tileWrapper, .front, .back").css("height", "300px");
        //        projTileClick(false);
    }
};


var openedClosedNav = false;

function openNav() {
    $(".collapsingNav").clearQueue();
    console.log(openedClosedNav);
    if (openedClosedNav == false) {
        var windowHeight = window.innerHeight - 60;
        console.log(windowHeight);
        $(".collapsingNav").animate({
            height: windowHeight
        }, 300);
        //        $("body").animate({
        //            marginTop: windowHeight
        //        }, 800);

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
    }
}

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}

function projTileClick(bool) {
    console.log("HEY");
    //    tileClick = "true";
    $(".mainTile").click(function () {
        console.log("SSSSSSS");
        tileClick = bool;
        console.log(tileClick);
        if (tileClick == false) {
            $(this).toggleClass('hover');
            var tileClick = true;
            console.log("FLIP");
        } else if (tileClick == true) {
            $(this).toggleClass('hover');
            var tileClick = false;
            console.log("UNFLIP");
        }
    })
}




$(function () {
    $('#skills').hover(function () {
            $("#skills").css("color", "#0058f1");
            $("#projects").css("color", "black");
        },
        function () {
            $("#skills").css("color", "black");
            $("#projects").css("color", "#0058f1");
        });

    $('#logo').hover(function () {
            $("#logo").css("-webkit-filter", "grayscale(0%)");
            $("#logo").css("filter", "grayscale(0%)");
            $("#projects").css("color", "black");
        },
        function () {
            $("#logo").css("-webkit-filter", "grayscale(100%)");
            $("#logo").css("filter", "grayscale(100%)");
            $("#projects").css("color", "#0058f1");
        });

    $('#projects').hover(function () {
            $("#projects").css("color", "#0058f1");
            $("#projects").css("color", "black");
        },
        function () {
            $("#projects").css("color", "black");
            $("#projects").css("color", "#0058f1");
        });

    $('#contact').hover(function () {
            $("#contact").css("color", "#0058f1");
            $("#projects").css("color", "black");
        },
        function () {
            $("#contact").css("color", "black");
            $("#projects").css("color", "#0058f1");
        });
});


/*NavBar Disappear*/
var lastScrollTop = 0;
$(window).scroll(function (event) {
    var scrollNum = $(this).scrollTop();
    //    console.log($(".collapsingNav").css("height"));
    //    console.log((window.innerHeight - 60).toString() + "px");
    if ($(".collapsingNav").css("height") == (window.innerHeight - 60).toString() + "px") {
        $("#navBarM").removeClass("animated");
    } else {
        $("#navBarM").addClass("animated");
    }

    if (scrollNum > lastScrollTop) {
        $("#navBar").removeClass("slideInDown");
        $("#navBar").addClass("slideOutUp");
        $("#navBarM").removeClass("slideInDown");
        $("#navBarM").addClass("slideOutUp");
    } else {
        $("#navBar").removeClass("slideOutUp");
        $("#navBar").addClass("slideInDown");
        $("#navBarM").removeClass("slideOutUp");
        $("#navBarM").addClass("slideInDown");
    }
    lastScrollTop = scrollNum;
});

//$(".collapsingNav").css("height") == (window.innerHeight - 60).toString() + "px"

/*Contact Window*/
function openContactWindow() {
    $("#windShad").addClass("contactWindowShader");
    $("#contWind").addClass("contactWindow");
    $("#contWind").css("margin-top", "15%");
    $("#contWind").html(contactWindow);
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



/*HTML*/
var projectTilesD = '<div id="center">' +
    '            <!--Window Opener-->' +
    '            <!--        <div class="col-sm-2">-->' +
    '            <div class="tileWrapper mainTile" style="margin: 0.2% 0% 0.1% 0%" ontouchstart="this.classList.toggle(\'hover\');">' +
    '                <div class="tile">' +
    '                    <div class="front">' +
    '                        <img src="../Pictures/piWindowCrop.jpg" style="height: 100%; width: 100%">' +
    '                    </div>' +
    '                    <div class="back">' +
    '                        <div class="projTextWrapper">' +
    '                            <p class="projText">' +
    '                                <h4 style="text-align: center; padding-top: 2%">Raspberry Pi Window Opener</h4>' +
    '                                <ul>' +
    '                                    <li>API to gather weather info.</li>' +
    '                                    <li>depending on temperatures and whether it is raining, window is kept closed/opened or the motor closes/opens the window.</li>' +
    '                                    <li>Had to understand the way stepper motor works and how to program stepper motors due to the lack of documentation included with the stepper motor.</li>' +
    '                                </ul>' +
    '                            </p>' +
    '                        </div>' +
    '                    </div>' +
    '                </div>' +
    '            </div>' +
    '            <!--        </div>-->' +
    '            <!--Window Opener-->' +
    '            <!--        <div class="col-sm-2">-->' +
    '            <div class="tileWrapper tileFiller" style="margin: 0.2% 0% 0.1% 0.2%">' +
    '                <div class="front">' +
    '                    <div id="projBack1">' +
    '                        <img src="../Pictures/phoneIcon.png" style="height: 300px; width; 300px; opacity: 0.7">' +
    '                    </div>' +
    '                </div>' +
    '            </div>' +
    '            <!--        </div>-->' +
    '' +
    '            <!--Window Opener-->' +
    '            <!--        <div class="col-sm-2">-->' +
    '            <div class="tileWrapper tileFiller" style="margin: 0.2% 0% 0.1% 0.2%">' +
    '                <div class="front">' +
    '                    <div id="projBack2">' +
    '                        <img src="../Pictures/desktopIcon.png" style="height: 300px; width; 300px; opacity: 0.7">' +
    '                    </div>' +
    '                </div>' +
    '            </div>' +
    '            <!--        </div>-->' +
    '' +
    '            <!--Window Opener-->' +
    '            <!--        <div class="col-sm-2">-->' +
    '            <div class="tileWrapper mainTile" style="margin: 0.2% 0% 0.1% 0.2%" ontouchstart="this.classList.toggle(\'hover\');">' +
    '                <div class="tile">' +
    '                    <div class="front">' +
    '                        <img src="../Pictures/iconAnimationsFusedCrop.jpg" style="height: 100%; width: 100%">' +
    '                    </div>' +
    '                    <div class="back">' +
    '                        <div class="projTextWrapper">' +
    '                            <p class="projText">' +
    '                                <h4 style="text-align: center; padding-top: 2%">Icon Animations <u>(IN PROGRESS)</u>' +
    '                                        <a class="projLinks" href="https://github.com/bartchr808/Icon-Animations"><i style="font-size: 30px" class="fa fa-github"></i></a>' +
    '                                </h4>' +
    '                                <ul>' +
    '                                    <li>Use CSS to create shapes and colours of clouds, sun, etc.</li>' +
    '                                    <li>JS Jquery to animate parts of icons (e.g. fade out and shift left).</li>' +
    '                                </ul>' +
    '                            </p>' +
    '                        </div>' +
    '                    </div>' +
    '                </div>' +
    '            </div>' +
    '            <!--        </div>-->' +
    '' +
    '            <!--Window Opener-->' +
    '            <!--        <div class="col-sm-2">-->' +
    '            <div class="tileWrapper tileFiller" style="margin: 0.2% 0% 0.1% 0.2%">' +
    '                <div class="front">' +
    '                    <div id="projBack3">' +
    '                        <img src="../Pictures/gameIcon.png" style="height: 300px; width; 300px; opacity: 0.7">' +
    '                    </div>' +
    '                </div>' +
    '            </div>' +
    '            <!--        </div>-->' +
    '' +
    '            <!--Window Opener-->' +
    '            <!--        <div class="col-sm-2">-->' +
    '            <div class="tileWrapper mainTile" style="margin: 0.2% 0% 0.1% 0.2%" ontouchstart="this.classList.toggle(\'hover\');">' +
    '                <div class="tile">' +
    '                    <div class="front">' +
    '                        <img src="../Pictures/quoteScreenShotCrop.png" style="height: 100%; width: 100%">' +
    '                    </div>' +
    '                    <div class="back">' +
    '                        <div class="projTextWrapper">' +
    '                            <p class="projText">' +
    '                                <h4 style="text-align: center; padding-top: 2%">Random Quote Machine' +
    '                                        <a class="projLinks" href="https://github.com/bartchr808/Random-Quote-Machine"><i style="font-size: 30px" class="fa fa-github"></i></a>' +
    '                                        <a class="projLinks" href="http://codepen.io/bartchr808/pen/PzJOJY"><i style="font-size:30px" class="fa fa-codepen"></i></a>' +
    '                                </h4>' +
    '                                <ul>' +
    '                                    <li>API as a Quote/Author Library.</li>' +
    '                                    <li>JS Jquery to randomly select background and title colour.</li>' +
    '                                    <li>No Twitter button API in order to create custom encoded URL everytime new quote is displayed.</li>' +
    '                                </ul>' +
    '                            </p>' +
    '                        </div>' +
    '                    </div>' +
    '                </div>' +
    '            </div>' +
    '            <!--        </div>-->' +
    '' +
    '            <!--Window Opener-->' +
    '            <!--        <div class="col-sm-2">-->' +
    '            <div class="tileWrapper tileFiller" style="margin: 0.2% 0% 0.1% 0.2%">' +
    '                <div class="front">' +
    '                    <div id="projBack4">' +
    '                        <img src="../Pictures/cogWheel.png" style="height: 300px; width; 300px; opacity: 0.7">' +
    '                    </div>' +
    '                </div>' +
    '            </div>' +
    '' +
    '' +
    '            <!--Window Opener-->' +
    '            <!--        <div class="col-sm-2">-->' +
    '            <div class="tileWrapper mainTile" style="margin: 0.2% 0% 0.1% 0.2%" ontouchstart="this.classList.toggle(\'hover\');">' +
    '                <div class="tile">' +
    '                    <div class="front">' +
    '                        <img src="../Pictures/localWeather1Crop.png" style="height: 100%; width: 100%">' +
    '                    </div>' +
    '                    <div class="back">' +
    '                        <div class="projTextWrapper">' +
    '                            <p class="projText">' +
    '                                <h4 style="text-align: center; padding-top: 2%">Local Weather <u>(IN PROGRESS)</u>' +
    '                                        <a class="projLinks" href="https://github.com/bartchr808/Show-The-Local-Weather"><i style="font-size: 30px" class="fa fa-github"></i></a>    ' +
    '                                </h4>' +
    '                                <ul>' +
    '                                    <li>Loading screen while data gathered.</li>' +
    '                                    <li>User geolocation.</li>' +
    '                                    <li>Long/Lat values into APIs using Ajax; get address & weather data.</li>' +
    '                                    <li>Use callback function in Ajax to distribute weather data to other functions.</li>' +
    '                                    <li>Weather data modifies HTML fields using JQuery.</li>' +
    '                                    <li>Use code ID in weather data to display icon from 3rd partyGithub repository.</li>' +
    '                                    <li>Modify units between metric and imperial.</li>' +
    '                                    <li><b>TO DO:</b> add custom icon animations and polish the UI.</li>' +
    '                                </ul>' +
    '                            </p>' +
    '                        </div>' +
    '                    </div>' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</body>';

var contactWindow = '<div style="padding:0% 2% 2% 2%"><h1 style="font-family: Quatro Slab; font-weight: bold; font-size: 3em">Hi There!<a onclick="closeContactWindow()"><span class="crossClose"> </span></a></h1><p style="font-size: 0.90em; line-height: 1.2em">Interested in working with me on a project? Or take me with you into any of your business ventures? Or just curious? Whatever it is, lets get in touch!</p><p style="margin-top: 3%; font-weight: 600; font-size:1.5em">bart.chr@gmail.com</p><p style="font-weight: 600; font-size:1.5em">bchrzasz@edu.uwaterloo.ca</p><div style="margin-top: 5%; font-size: 1.5em"><span><a style="padding-right: 5%" class="contactLinks" href="https://github.com/bartchr808"><i class="fa fa-github"></i></a></span><span><a style="padding-right: 5%" class="contactLinks" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=bart.chr@gmail.com&tf=1"><i class="fa fa-envelope"></i></a></span><span><a style="padding-right: 5%" class="contactLinks" href="https://codepen.io/bartchr808/pens/public/"><i class="fa fa-codepen"></i></a></span><span><a style="padding-right: 5%" class="contactLinks" href="https://www.linkedin.com/in/bartlomiej-c-1222a010a?trk=hp-identity-name"><i class="fa fa-linkedin"></i></a></span></div></div>'

var navBarD = '<div class="row"><div class="col-sm-2 col-sm-offset-1"><p id="navBarText"><a id="bio" class="navLinks" href="../HTML/biography.html">Biography</a></p></div><div class="col-sm-2"><p id="navBarText"><a id="skills" class="navLinks" href="../HTML/skills.html">Skills</a></p></div><div class="col-sm-2"><a href="home.html"><img class="activeTab" id="logo" src="../Pictures/bartLogo.png"></a></div><div class="col-sm-2"><p id="navBarText"><a id="projects" style="color: #0058f1" class="navLinks" href="../HTML/projects.html">Projects</a></p></div><div class="col-sm-2"><p id="navBarText"><a id="contact" class="navLinks" onclick="openContactWindow()">Contact</a></p></div><div class="col-sm-1"></div></div>'
var navBarM = '<div class="row"><div class="col-sm-4"><div class="sidebar-nav"><div id="navBarM" style="padding: 0 0 0 0; margin: 0 0 0 0" class="animated navbar navbar-default navbar-fixed-top" role="navigation"><div class="navbar-header"><img style="margin: 0% 0 0 2%; height: 60px; width: auto; float:left" src="../Pictures/bartLogo.png"><div onclick="openNav()" id="nav-icon3"><span></span><span></span><span></span><span></span></div></div><div class="collapsingNav"><ul class="nav navbar-nav"><li class="active"><a href="../HTML/home.html">Home</a></li><li><a href="../HTML/biography.html">Bio</a></li><li><a href="../HTML/skills.html">Skills</a></li><li><a href="../HTML/projects.html">Projects</a></li><li><a href="#">Contact</a></li></ul></div></div></div></div></div>'