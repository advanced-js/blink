// YOUR CODE GOES HERE
$.fn.blink = function(speed) {
	var self = this;
	$(this).css('visibility','hidden');
	setTimeout(function(){
		$(self).css('visibility','visible');
	},speed / 2);
	setTimeout(function(){
		$(self).blink(speed);
	},speed);
};