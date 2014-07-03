# Blink exercise

Write a jQuery plugin that makes an element act like a `<blink>` tag.  It should work for any arbitrary speed.

![blink demo](blink.gif)

http://learn.jquery.com/plugins/basic-plugin-creation/

## V1

Make plugin work for selectors that correspond to a single element.

```javascript
// show/hide every 1000ms
jQuery('.myDiv').blink(1000);
// twice as fast
jQuery('.otherDiv').blink(500);
```

## V2

Make plugin work for selectors that correspond to multiple elements.

```javascript
jQuery('div').blink(1000);
```
