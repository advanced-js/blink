setInterval(function(){blink()}, 1000);
          
    function blink() {
        $("#blinkOne").fadeTo(100).fadeTo(200);
          $("#blinkTwo").fadeTo(1000, 0.1).fadeTo(2000, 1.0);
    }