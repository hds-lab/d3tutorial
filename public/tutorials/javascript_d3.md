Introduction to Javascript and D3
=================================

This is an incredibly brief introduction to JavaScript and D3. We'll walk you some of the basics of JavaScript and then introduce some of the core concepts of D3. This is by no means a complete tutorial on either JavaScript or D3, but should be enough to get you started. There are plenty of great resources on the web for learning JavaScript. 

We'll start by showing you a very brief introduction to JavaScript features. Then we'll introduce how to JavaScript can interact with HTML. Lastly, we'll introduce some of the basics of D3. 


JavaScript Console
------------------

First, let's introduce the javascript console in the browser. This is a special window that allows you to type in JavaScript and see results immediately. 

<table class="table">
	<thead>
		<tr>
			<td></td>
			<td>Windows</td>
			<td>MacOS</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Chrome</td>
			<td>`F12`</td>
			<td>`Opt` + `Alt` + `J`</td>
		</tr>
		<tr>
			<td>Firefox</td>
			<td>`Ctrl` + `Shift` + `K`</td>
			<td>`Opt` + `Cmd` + `K`</td>
		</tr>
		<tr>
			<td>IE</td>
			<td>`F12`; click console</td>
			<td></td>
		</tr>
		<tr>
			<td>Safari</td>
			<td></td>
			<td>`Ctrl` + `Shift` + `C`</td>
		</tr>
	</tbody>
</table>



Next we'll move onto some core functionality in JavaScript. We'll introduce a few very basic features of the JavaScript language. These include comments, variables, type conversion, functions, and arrays.

Comments
--------

One of the most important aspects of any programming language is a comment. We put them everywhere to help explain what the source code is supposed to do. They're extremely helpful if you ever have to modify the code later, or if you have to modify someone else's code. Otherwise, you can spend a lot of time trying to understand what the programmers intention was. Below is an example:

```javascript
// This is a single line comment
```

the `//` tells the browser to ignore everything to the right of it. We can use this to describe what's going on, or we can also use it to disable a line of code. However, sometimes we need to have multi-line comments. You can do this in JavaScript like this:

```javascript
/*
	This is a multi-line comment
	You can have several lines

	here and they are all ignored.
*/
```

Types & Conversion
------------------

In JavaScript, there are a few different types of data. The simplest ones that we'll deal with are _numbers_ and _strings_ . 

```javascript
43
5.23 
"This is a string!"
".42 is also a string"
'strings can also appear inside single quotes'
```

The reason these are different are in terms of how you can manipulate them. For example, if you try to add two numbers, like 3 + 5, you'll get a mathmatical result (8). If you add two strings, it appends one to the other.

If you run this in your JavaScript Console
```javascript
5 + 3
```
The answer will be '8'. However, if you try to add two strings like this:
```javascript
"5" + "3"
```
then you'll get "53". This can get pretty confusing, but remember that strings are meant for text. This example makes a little more sense:

```javascript
"Javascript is pretty" + " easy"
```

<div style="background: yellow">TODO: Move this to an example?</div>
<div style="background: yellow">TODO: Conversion</div>


See Also: [JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)


Variables
---------

In the simplest sense, variables are like cups. They can hold a lot of different things. These can be numbers, strings, or some other things we won't cover. In the number sense, they're sort of like algebraic expressions. 

```javascript
var mystr = "this is a string!";
var mynum = 5;
```

Let's explore the above addition example but with variables. 
<div style="background: yellow">TODO: Example</div>


Functions
---------

Functions in JavaScript are used to hold one or more of operations. We use them largely to help organize our code, make it easier to understand, and most importantly reduce typing! Often times, we'll use them when a series of operations are performed multiple times. For example, maybe we want to make the computer say hello to many people. We could do this like this:

```javascript
function sayHello(name) {
	console.log('hello ' + name);
}
```

Now, we can call this function as many times as we like.

```javascript
sayHello('Michael');
sayHello('John');
```

Sometimes, though, we need the result of some operation. So variables can hand back a value to the caller. We call this _returning_. Here's an example:

```javascript
function doMaths(x,y) {
	// pretend we're doing some important math!
	var z = (x+1) * (y-1);

	// here's the important part where we pass back the result!
	return z;
}

// print result
var result1 = doMaths(2,1);
var result2 = doMaths(2,2);
var result3 = doMaths(result1, result2)

// print result
console.log(result1);
console.log(result2);
console.log(result3);
```

So in that example, we have a function that does some math operation and `return`s the result. We can then store that in a variables and do other things with them later, or just print them out and move to the next example.


Arrays
------

So an array is a collection of datapoints. It can be a series of numbers, a series of strings, or it could be a series of HTML Elements. In the last example, we were creating multiple result variables for each result. However, since they are related, we could also store them in a single variable.

```javascript
var primes = [ 2, 3, 5, 7, 9];
```

Ok... So what does that get us? This alone saves us a little bit of space since all the numbers are related. Sure,  but how can I access the numbers? We use the square brackets and a number. That will get us the Nth number. 

```javascript
var primes = [ 2, 3, 5, 7, 9];

console.log( primes[0] );	// prints the first number (2)
console.log( primes[3] );	// prints the fourth number (7)
```

There are a lot of other operations you can do with arrays, but we're going to skip them or now. If you're interested, you can read about them [on MDN's excellent Array page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

HTML Element IDs
----------------

So back to HTML for a few minutes.  Have you started to wonder about how you connect JavaScript to the HTML? Thankfully, there's quite a few ways to do this, but we'll take the simplest one here. 

On every HTML element, you can add an _id attribute_. These IDs **must be unique**, so they can only be used once per page. 

```markup
<p id="fav">This is my favorite!</p>
```

The purpose of using these IDs is to enable you to link this element to JavaScript and CSS. There are other ways to do this, but for simplicity, we're going to use the IDs for the rest of this document. The more complicated ones are referenced using CSS Selectors and you can read more about them [on MDN's CSS Selector page](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors). 


Modifying HTML from JavaScript
------------------------------

Let's extend that piece of HTML code to show how we can do some changes of HTML from JavaScript. We'll start with the basics. Let's change the paragraph's text. The first thing you need to know is that HTML elements with an ID, can be accessed from JavaScript by name. So if the ID of the paragraph is `fav`, then in JavaScript we already have a variable named `fav` that is that HTML Element. In JavaScript, each HTML Element has a series of properties that we can change. Here's an example of one of those:

```javascript
fav.innerHTML = "My new favorite!"
```

Let's see how this would work in practice.

<a class="btn btn-default jsbin-button" href="http://jsbin.com/pohoxi/2/edit?html,js,output">Open in JS Bin</a>


Modifying SVG styles from JavaScript
------------------------------------

Another thing you might want to do is change some colors. Here's a quick activity for you. Here are the details:

* The Element's id is `myCircle`
* Instead of `innerHTML` you'll be changing `style.fill`
* `style.fill` takes a color name _as a string_ like `"red"` or `"blue"`.

<a class="btn btn-default jsbin-button" href="http://jsbin.com/gaguca/3/edit?html,js,output">Open in JS Bin</a>



Finally, D3!
------------

One of the main reasons to use D3 is the adding new elements to the HTML page. It's a first step at creating dynamic and interactive visualizations. Remember adding the SVG element to the HTML page from the HTML tutorial? The HTML should look like this: 

```markup
<svg width="100" height="100">
	... SVG elements ...
<svg>
```


To do this in D3, we use a combination of functions. We can do this:

```javascript
	var mysvg = d3.select("body").append("svg")
		.attr("width", "100")
		.attr("height", "100")
```

Programmatically adding a circle
---------------------------------

So let's break that down. So the "d3." means that this is function from the d3 library. The `select` call finds and returns the specified element. In this case, we're asking for the body element. We then `append` a new element with the tag name "svg". Then on that SVG element we set 2 attributes, the width and the height -- both to 100 pixels. The resulting SVG element is stored in the `mysvg` variable. In this case, it's important that we store this because then we can use it to append elements to that element.


So now it's your turn. Using this basic framework. Add a circle at (25,25) with a radius of 10 to the svg element in JavaScript. This JSBin has created the SVG element already and stored it in the `svg` variable. 

<a class="btn btn-default jsbin-button" href="http://jsbin.com/tohiqu/2/edit?html,js,output">Open in JS Bin</a>


Events
------

So now we can programmatically add elements, but how do we make this interactive? In JavaScript, we have the notion of events. They are certain types of interactions that occur that you can attach functions. When the event occurs on the specified element, your function will be called, and you can perform some action to change it. You can also read more about the types of events at [MDN's list of events](https://developer.mozilla.org/en-US/docs/Web/Events)

You can attach a piece of code like this:

```javascript

	function onClickFn(ev) {
		d3.select(this).style("background", "red");
	}

	var svg = d3.select("svg");

	svg.on("click", onClickFn);
```

This code assumes you have already created an SVG element. It then finds the SVG element within the page. It then makes a call to `on` which is the d3 function to attach a function for an event. The first argument you pass is the type of event, in this case it's the "click" handler. When the user clicks on the SVG element the onClickFn function is called. In the function, there is something special happening. Notice the `d3.select(this)`. When a function is called as an event, the element that triggered the event is passed in the variable `this`. So we select that object with d3 and then set the background color to red. 

So now it's your turn. This is a continuation of the last example, add a function that changes the `fill` color to be "orange" when the circle is clicked. 

<a class="btn btn-default jsbin-button" href="http://jsbin.com/tohiqu/6/edit?html,js,output">Open in JS Bin</a>

So now you've touched on creating element in D3 and doing some basic forms of interaction. If you got stuck on the last example, here's the final version for you to see what might have went wrong:

<a class="btn btn-default jsbin-button" href="http://jsbin.com/tohiqu/12/edit?html,js,output">Open in JS Bin</a>




