(function($) {
  $.fn.blink = function(interval) {
    var _this = this;
    setInterval(function() {
      // use css visibility instead of .toggle() so elements don't jump around
      if (_this.css('visibility') === 'visible') {
        _this.css('visibility', 'hidden');
      } else {
        _this.css('visibility', 'visible');
      }
    }, interval);
  };
}(jQuery));
