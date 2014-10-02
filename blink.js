(function( $ ) {
 
    $.fn.blink = function( pause ) {
        var that = this;      
        return this.each(setInterval(function(){
          pause = pause + 1000;
          if(pause % 2000 ===0){
            $(that).css( "visibility", "none" );
            // console.log('pause-1');
          }
          else{
             $(that).css( "visibility", "hidden" );
             // console.log('pause-2');
          }
          
        }, pause));                 
    // return this;
    };
 
}( jQuery ));

$( document ).ready(function() {
	// $('.myDiv').blink(1000);
    $( "div" ).blink(1000);
});
