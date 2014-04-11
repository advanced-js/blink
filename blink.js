(function($){
  $.fn.blink = function(speed){
    var that = this;
    setTimeout(function(){
      that.hide();
    }, speed);

    setInterval(function(){
      that.show();
      setTimeout(function(){
        that.hide();
      }, speed);
    }, 2*speed);
  };

}(jQuery));

