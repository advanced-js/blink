;(function( $, window, undefined ) {
 
    $.fn.blink = function( speed ) {

        var blinker = this.data( "blinker" ) || initializeBlinker( this );

        function isValid( speed ) {
            return ( typeof speed === "number" && speed >= 0 );
        }

        function initializeBlinker( element ) {

            var blinker = {},
                blinkID;

            function toggleVisibility( index, visibility ) {
                return ( visibility === "visible" ) ? "hidden" : "visible";
            }
            function visibilityToggler() {
                element.css( "visibility", toggleVisibility );
            }

            // Define required methods
            blinker.start = function( speed ) {
                blinkID = window.setInterval( visibilityToggler, speed );
            };
            blinker.stop = function() {
                window.clearInterval( blinkID );
            };

            // Attach the blinker object to the element which called blink
            element.data( "blinker", blinker );

            return blinker;
        }
 
        if ( isValid( speed ) ) {

            blinker.stop();

            if ( speed > 0 ) {
                blinker.start( speed );
            }
        }

        return this; // Enable chaining
 
    };
 
}( jQuery, window ));