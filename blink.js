(function ( $ ) {
 
    $.fn.blink = function( speed ) {

        // Make the element blink
        function toggleVisibility( element ) {
            function isVisible( element ) {
                return element.css( "visibility" ) === "visible";
            }
            return function () {
                element.css({
                    visibility: isVisible( element ) ? "hidden" : "visible"
                });
            };
        }

        window.setInterval( toggleVisibility( this ), speed);

        return this; // Enable chaining
 
    };
 
}( jQuery ));