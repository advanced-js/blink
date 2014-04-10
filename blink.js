;(function( $, window, undefined ) {

    $.fn.blink = function( speed ) {
        var element = this;

        // Set a default speed incase the argument passed is not valid
        speed = ( typeof speed === "number" && speed > 0 ) ? speed : 500;

        function toggleElementVisibility() {
            element.css( "visibility", function( index, value ) {
                return ( value === "visible" ) ? "hidden" : "visible";
            });
        }

        window.setInterval( toggleElementVisibility, speed );
        
        return this; // Enable chaining
    };
}( jQuery, window ));