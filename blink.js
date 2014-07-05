/*
Shows a blinking display forever since clearInterval function has not be implemented.
*/
$( document ).ready(function() // runs once the page Document Object Model (DOM) is ready for JavaScript code to execute.
{
    //Extends jquery with the blink function
    $.fn.blink = function(options)
    {
    	//default object with 1 property
        var defaults =
        {
            delay: 750   	//Sets default delay to 750 milliseconds
        };

		// Merges the contents of two or more objects together into the first object
        options = $.extend(defaults, options);

		//On each return, calls an anonymous function that would set the interval to toggle between hiding the object and making it visible
        return this.each(function()
        {
            var obj = $(this);

            //Executes the setInterval function with the delay of 750 milliseconds
            setInterval(function()
            {
                if ($(obj).css("visibility") == "visible")
                {//If display is visible, hide the display
                    $(obj).css('visibility', 'hidden');
                }
                else
                {//If display is hidden, show the display
                    $(obj).css('visibility', 'visible');
                }
            }, options.delay);
        });
    };
}(jQuery));
