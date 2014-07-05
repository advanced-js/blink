//Specifies the function to run after the document is loaded
(function ($)
{
	//Sets default to delay at half a second
    $.fn.blink = function(options)
    {
        var defaults =
        {
            delay: 500
        };

		// Merges the contents of two or more objects together into the first object
        options = $.extend(defaults, options);

		//On each return, calls an anonymous function that would set the interval to toggle between hiding the object and making it visible
        return this.each(function()
        {
            var obj = $(this);
            setInterval(function()
            {
                if ($(obj).css("visibility") == "visible")
                {
                    $(obj).css('visibility', 'hidden');
                }
                else
                {
                    $(obj).css('visibility', 'visible');
                }
            }, options.delay);
        });
    };
}(jQuery));

$(document).ready(function()
{
    $('.blink').blink({
        delay: 1000
    }); // causes a 1000ms blink interval.
});
