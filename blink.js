;(function( $, window, undefined ) {
 
    $.fn.blink = function( speed ) {

        // Set a default speed incase the argument passed is not valid
        speed = ( typeof speed === "number" && speed > 0 ) ? speed : 500;

        function visibilityToggler( element ) {
            // A function which takes as its argument a jQuery-wrapped element
            // and returns a function which toggles that element's visibility

            function toggleVisibility( index, visibility ) {
                return ( visibility === "visible" ) ? "hidden" : "visible";
            }

            return function() {
                element.css( "visibility", toggleVisibility );
            };
        }

        window.setInterval( visibilityToggler( this ), speed );

        return this; // Enable chaining
 
    };
 
}( jQuery, window ));