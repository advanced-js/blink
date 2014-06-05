// YOUR CODE GOES HERE

jQuery.fn.blink=function(speed){
	var color = this.css("color");
	setInterval(function(){
		this.css("color","none")
	},speed/2)
	setInterval(function(){
		this.css("color",color)
	},(3*speed)/2)
}

jQuery('.myDiv').blink(1000);
// twice as fast
jQuery('.otherDiv').blink(500);
