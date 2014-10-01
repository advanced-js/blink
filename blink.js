(function( $ ) {
 
    $.fn.blink = function( pause ) {
        that = this;      
        setInterval(function(){
          pause = pause + 1000;
          if(pause % 2000 ===0){
            $(that).css( "visibility", "none" );
            // console.log('pause-1');
          }
          else{
             $(that).css( "visibility", "hidden" );
             // console.log('pause-2');
          }
          
        }, pause);                 
    return this;
    };
 
}( jQuery ));


$( ".myDiv" ).blink(1000);