//by mroyt

$.fn.blink=function(speed){
	/*Why do we need to use the "$" to make this a jQuery element? 
	I'm having trouble understanding some of the logical flow 
	of the $ function combined with "this."*/

	/*ALso, I originally tried using "this" with the fadeOut and fadeIn, 
	but it didn't work until I pulled it out and put it into the el
	variable. WHy is that?*/
	var el = $(this);
	var isVisible = true;
	setInterval(function(){
		if (isVisible){
			el.fadeOut(0);
		}
		else{
			el.fadeIn(0);
		}
		isVisible = !isVisible;
	},speed);
};

jQuery('.myDiv').blink(1000);
// twice as fast
jQuery('.otherDiv').blink(500);
