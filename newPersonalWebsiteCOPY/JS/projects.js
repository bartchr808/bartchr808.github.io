/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~projects.html~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
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