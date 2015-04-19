//Note to self. More info on plugin creation at https://learn.jquery.com/plugins/basic-plugin-creation/
(function($)
{
  $.fn.blink = function(options) {
    return this.each(function() {
      var obj = $(this);
      setInterval(function() {
        if($(obj).css("visibility") == "visible")
        {
          $(obj).css('visibility','hidden');
        }
        else
        {
          $(obj).css('visibility','visible');
        }
      }, options);
    });
  }
}(jQuery))