// YOUR CODE GOES HERE

$.fn.blink = function(milliseconds) {
  alert(this.css("color"));
  alert(this.css("color") == 'rgb(0, 0, 0)');
  //alert(this.css("color"));
  //this.css( "color", "orange" );
  window.setInterval(
      function() { 
        if ( this.css("color") == 'rgb(0, 0, 0)' ) { this.css( "color", "orange" ); }
        //else { $(this).css( "color", "black"); }
        return this;
      }, 1000);

};
 
