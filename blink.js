$.fn.blink = function(blink_interval) {

    var blink_state = true;

    var selected_element = this;

    setInterval(function(){

        //console.log('blink');

        if ( blink_state === true ) {

            //console.log('hide element');

            selected_element.css('visibility', 'hidden');

            blink_state = false;

        }

        else {

            //console.log('show element');

            selected_element.css('visibility', 'visible');

            blink_state = true;
        }

    }, blink_interval);

};
