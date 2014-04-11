
	$.fn.blink=function(blinkRate){
			var t = setInterval(function () {
    		var ele = document.getElementById('myDiv');
    		ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
    			}, blinkRate);
			}

