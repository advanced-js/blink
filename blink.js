jQuery.fn.blink = function( color, duration )
{
    var current = this.css( 'color' );
    this.animate( { color: 'rgb(' + color + ')' }, duration / 2 );
    this.animate( { color: current }, duration / 2 );
}

$( '.myDiv' ).blink( '0,0,0', 1000 );
$( '.myDiv' ).blink( '0,0,0', 500 );
