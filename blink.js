// // YOUR CODE GOES HERE
$.fn.blink = function(seconds) {
	var $this = this
	setInterval(function(){
		$this.toggle(); 
	},seconds);
};

// i don't understand how to do this using hide/show methods. :/ 

// $.fn.blink = function(seconds) {
// 	var $this = $(this)
// 	setInterval(function(){
// 		$this.style.display == "none" ? "block" : "none";
// 	},seconds);
// };

 
