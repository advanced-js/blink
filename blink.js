(function ( $ ) {
 
    $.fn.blink = function( speed ) {

        // Set a default speed incase the argument passed is not valid
        speed = ( typeof speed === "number" && speed > 0 ) ? speed : 500;

        function toggleVisibility( element ) {
            function toggle( index, visibility ) {
                return ( visibility === "visible" ) ? "hidden" : "visible";
            }
            return function () {
                element.css( "visibility", toggle );
            };
        }

        window.setInterval( toggleVisibility( this ), speed);

        return this; // Enable chaining
 
    };
 
}( jQuery ));