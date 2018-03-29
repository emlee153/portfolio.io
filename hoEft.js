// hoEft.js
(function($) {
    $.fn.hoEft = function(opt){
        var intvTime = opt.intervalTime;
        var slideSpd = opt.slideSpeed;
        if(!intvTime) { intvTime = 5000; }
        if(!slideSpd) { slideSpd = 1000; }
        
        var wrapWd = $("#eft-wrap").width();
        var wrapHt = $("#eft-wrap").height();
        var targetLength = $("#eft-wrap ul li").length;
        var ulHt = targetLength * wrapHt;
        $("#eft-wrap").css({
            "overflow" : "hidden"
        });
        $("#eft-wrap ul").css({
            "width" : wrapWd + "px",
            "height" : ulHt + "px"
        });
        $("#eft-wrap ul li").css({
            "position" : "relative",
            "overflow" : "hidden",
            "width" : wrapWd + "px",
            "height" : wrapHt + "px"
        });
        $(this).find("img").css({
            "position" : "absolute",
            "z-index" : "10",
            "display" : "block",
            "width" : "auto",
            "height" : wrapHt + 100 + "px",
        });
        var imgWd = $(this).find("img").width();
        var imgHt = $(this).find("img").height();
        var defaultPositionX = (imgWd - wrapWd) / 2 * -1;
        $(this).find("img").css("left",defaultPositionX + "px")
        var defaultPositionY = (imgHt - wrapHt) / 2 * -1;
        $(this).find("img").css("top",defaultPositionY + "px")
        var intv = setInterval(function() {hSlide()}, intvTime);
        function hSlide() {
            $("#eft-wrap ul").not(":animated").animate({
                "margin-top" : (wrapHt* -1) + "px"}, slideSpd,
                function(){
                    $(this).find("li").eq(0).appendTo($(this));
                    $(this).css("margin-top", 0 + "px");
                }
            );
        };
        $(this).mouseover(function() {
            $(this).mousemove(function(event){ 
                var moveX = event.clientX;
                var conMoveX = ((wrapWd / 2) - moveX) / 10;
                $(this).find("img").clearQueue().animate({"left" : defaultPositionX + conMoveX + "px"}, 1);
            });
        });
        $(this).mouseover(function() {  
            $(this).mousemove(function(event){ 
                var moveY = event.clientY;
                var conMoveY = ((wrapHt/ 2) - moveY) / 10;
                $(this).find("img").clearQueue().animate({"top" : defaultPositionY + conMoveY + "px"}, 1);
            });
        });
    };
}) (jQuery);