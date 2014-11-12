Introduction to Javascript and D3
=================================

This is an incredibly brief introduction to JavaScript and D3. We'll walk you some of the basics of JavaScript and then introduce some of the core concepts of D3. This is by no means a complete tutorial on either JavaScript or D3, but should be enough to get you started. There are plenty of great resources on the web for learning JavaScript. 

We'll start by showing you a very brief introduction to JavaScript features. Then we'll introduce how to JavaScript can interact with HTML. Lastly, we'll introduce some of the basics of D3. 


Extremely Minimal Javascript Basics
-----------------

First

```js
var mystr = "this is a string!";
var mynum = 5;
var 
```



HTML Element IDs
---------------------------------

On every HTML element, you can add an _id attribute_. These IDs **must be unique**, so they can only be used once per page. 

```markup
<p id="my_fav">This is my favorite!</p>
```

The purpose of using these IDs is to enable you to link this element to JavaScript and CSS. There are other ways to do this, but for simplicity, we're going to use the IDs for the rest of this document. The more complicated ones are referenced using CSS Selectors and you can read more about them [on MDN's CSS Selector page](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors). 


