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

```js
// This is a single line comment
```

the `//` tells the browser to ignore everything to the right of it. We can use this to describe what's going on, or we can also use it to disable a line of code. However, sometimes we need to have multi-line comments. You can do this in JavaScript like this:

```js
/*
	This is a multi-line comment
	You can have several lines

	here and they are all ignored.
*/
```

Types & Conversion
------------------

In JavaScript, there are a few different types of data. The simplest ones that we'll deal with are _numbers_ and _strings_ . 

```js
43
5.23 
"This is a string!"
".42 is also a string"
'strings can also appear inside single quotes'
```

The reason these are different are in terms of how you can manipulate them. For example, if you try to add two numbers, like 3 + 5, you'll get a mathmatical result (8). If you add two strings, it appends one to the other.

If you run this in your JavaScript Console
```js
5 + 3
```
The answer will be '8'. However, if you try to add two strings like this:
```js
"5" + "3"
```
then you'll get "53". This can get pretty confusing, but remember that strings are meant for text. This example makes a little more sense:

```js
"Javascript is pretty" + " easy"
```

<div style="background: yellow">TODO: Move this to an example?</div>
<div style="background: yellow">TODO: Conversion</div>


See Also: [JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)


Variables
---------

In the simplest sense, variables are like cups. They can hold a lot of different things. These can be numbers, strings, or some other things we won't cover. In the number sense, they're sort of like algebraic expressions. 

```js
var mystr = "this is a string!";
var mynum = 5;
```

Let's explore the above addition example but with variables. 
<div style="background: yellow">TODO: Example</div>


Functions
---------

Functions in JavaScript are used to hold one or more of operations. We use them largely to help organize our code and make it easier to understand. Often times, we'll use them when a series of operations are performed multiple times. For example, maybe we want to make the computer say hello to many people. We could do this like this:

```js
function sayHello(name) {
	console.log('hello ' + name);
}
```


HTML Element IDs
---------------------------------

On every HTML element, you can add an _id attribute_. These IDs **must be unique**, so they can only be used once per page. 

```markup
<p id="my_fav">This is my favorite!</p>
```

The purpose of using these IDs is to enable you to link this element to JavaScript and CSS. There are other ways to do this, but for simplicity, we're going to use the IDs for the rest of this document. The more complicated ones are referenced using CSS Selectors and you can read more about them [on MDN's CSS Selector page](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors). 


