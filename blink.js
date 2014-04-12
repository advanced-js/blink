// YOUR CODE GOES HERE
$.fn.blink = function(interval){
    var $div = $(this);
    setInterval(function(){
        $div.css({display:($div.css("display") == "none" ? "block" : "none")});
    }, interval);
}