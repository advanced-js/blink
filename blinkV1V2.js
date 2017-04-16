// JavaScript Document
$( document ).ready(function() {

 
    $.fn.blink = function(interval) {
		var thisid = this;
        setInterval(function(){
        	if($(thisid).css("visibility") == "visible")
				{
				$(thisid).css('visibility','hidden');
				}
				else
				{
				$(thisid).css('visibility','visible');
				}
    	}, interval);
    };
 

//test blinking 1 object	
jQuery('#myDiv1').blink(1000);

//test blinking 1 class
jQuery('.myDiv').blink(1000); 

//test blinking other class at double speed
jQuery('.otherDiv').blink(500);

//test blinking all divs
jQuery('div').blink(1000);


});
