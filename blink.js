;(function( $, window, undefined ) {
 
    $.fn.blink = function( speed ) {

        var blinker; // Get element's blinker or intialize a new blinker

        function isValid( speed ) {
            // Logic to see if the argument passed is a valid speed
        }

        function initializeBlinker( element ) {
            // Do stuff to create a blinker and attach it to the element
            // Return the blinker
        }
 
        if ( isValid( speed ) ) {

            // blinker.stop();

            if ( speed > 0 ) {
                // blinker.start( speed );
            }
        }

        return this; // Enable chaining
 
    };
 
}( jQuery, window ));