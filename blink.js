

$.fn.blink = function (speed) {

var plzBlink = this;

setInterval(function (){
	plzBlink.css('color', 'white'); 

	setTimeout(function(){
		plzBlink.css('color', 'black'); 
	},speed); //end setTimeout

}, speed*2); //end setInterval

}; //end $.fn.blink
