// stEft.js
(function($) {
    $.fn.stEft = function(opt){
        var animateSpd = opt.animateSpd;
        var randomStroke = opt.randomStroke;
        var randomFill = opt.randomFill;
        if(!animateSpd) { animateSpd = 5000; }
        if(!randomStroke) { randomStroke = 0 }
        if(!randomFill) { randomFill = 0 }
        function randomColor() {
            var letters = "0123456789ABCDEF".split("");
            var color = "#";
            for(var i = 0; i < 6; i++)
                color += letters[Math.round(Math.random() * 15)];
            return color;
        }
        $(this).find("path").each(function(index, path) {
            var totalLength = path.getTotalLength();
            path.style.strokeDasharray = totalLength + " " + totalLength;
            path.style.strokeDashoffset = totalLength;
            if(randomStroke == 1) {
                path.setAttribute("stroke", randomColor());
            }
            if(randomFill == 1) {
                path.setAttribute("fill", randomColor());
            }
            $(this).animate({
                "stroke-dashoffset" : 0
            }, animateSpd);
        });
    };
}) (jQuery);