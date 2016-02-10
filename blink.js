// YOUR CODE GOES HERE
$.fn.blink = function(seconds) {
	var $this = this
	setInterval(function(){
		$this.toggle(); 
	},seconds);
};

 
