# Blink exercise

Write a [jQuery plugin](http://docs.jquery.com/Plugins/Authoring) that makes an element act like a `<blink>` tag.  It should work for any arbitrary speed.

```javascript
// show/hide every 1000ms
jQuery('.myDiv').blink(1000);
// twice as fast
jQuery('.otherDiv').blink(500);
```

![blink demo](blink.gif)

## v0.1.0 notes

This first version satisfies the basic requirements of the assignment. However, there are some questions and concerns:

1. Is there anything inefficient about the way the functions are defined?
2. Can properties be attached to the object which calls `blink`? For example, it would be helpful to keep track of the ID returned by the call to `setInterval`. Can that value be assigned `this.blinkID`, or does jQuery have another means of accomplishing this?
3. What is the expected behavior when calling `blink` multiple times on an object? Currently, this keeps compounding the blinking. A more appropriate way to handle this is to stop the existing blinking, then start blinking at the new speed.
4. Should there be a way to stop blinking? For example `element.blink("stop")` or `element.blink(0)` could cancel existing blinking.
6. A blink effect can also be created using CSS3 animation. Is that an approach worth pursuing?

