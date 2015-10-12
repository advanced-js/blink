$.fn.blink = function(timer) {
    var blinkObj = this; 

    setInterval(function() { 
        blinkObj.css('visibility', 'hidden'); 

        setTimeout(function() { 
            blinkObj.css('visibility', 'visible'); 
        }, timer); 
        
    }, timer*2); 
};