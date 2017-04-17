$.fn.blink = function(time) {
var thus = this;
  function blinker() {
    if (thus.is(':visible')) {
      thus.css("display", "none");
    } else {
      thus.css("display", "block");
    }
  }
  setInterval(blinker, time);
};
