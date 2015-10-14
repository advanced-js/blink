function blink(obj){
  obj.toggle();
}

$.fn.blink = function(interval) {
  window.setInterval(blink, interval, this);
  return this;
}
