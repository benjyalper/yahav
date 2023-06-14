$("input").on("click", function () {
    $(".thumb").css("transition", "height 1s").css("height", "150").css("width", "150");
    setTimeout(
        function () {
            $(".thumb").css("transition", "height 1s").css("height", "15");
        }, 700);
});

$(".danceBtn").on("click", function () {
    $(".heart").css("transition", "height 1s").css("height", "150").css("width", "150");
    setTimeout(
        function () {
            $(".heart").css("transition", "height 1s").css("height", "15");
        }, 700);
});


