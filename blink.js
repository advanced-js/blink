(function($){
  $.fn.showTag = function(speed){
    var that = this;
    setTimeout(function(){
      that.show();
      that.hideTag(speed);
    }, speed);
  };

  $.fn.hideTag = function(speed){
    var that = this;
    setTimeout(function(){
      that.hide();
      that.showTag(speed);
    }, speed);
  };

  $.fn.blink = function(speed){
    this.hideTag(speed);
  };

}(jQuery));

