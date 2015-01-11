Beginning with HTML
===================

So you're interested in learning HTML? Great! 
This guide is designed to help you get started. It is intended for people with little or no HTML experience.


What is HTML?
-------------

HTML stands for Hyper-text Markup Language. It is the foundation for every webpage you've ever visited and provides the structure and content of every page. 

HTML is a way of writing text that enables rich documents to be made. Typically, HTML documents provide a deeper level of information to be included through the use of this special formatting. A common example of this is the links on a webpage. Each link can have a lot of information that you may not see in some contexts. Every actual link should have at least a destination URL. This additional information is called **meta-data**. Links can also contain information about how the browser should respond when the link is clicked. This might tell the browser to open the link in a new window.

To specify this additional information in an HTML document, we use a combination of elements, tags, and attributes to communicate this information to the browser. 


Elements, Tags, and Attributes Oh, My!
--------------------------------------

![Element components](resources/html/element_breakdown.png)

Meet the paragraph element:

```markup
<p>Hello! I'm a paragraph element.</p>
```

### Elements
This sentence combined with the `<p>` and the `</p>` is an **element**. In this case, the element type is a `p`, which is a paragraph. This element tells a webbrowser that everything between the opening and closing tag is a paragraph, so the browser can apply the necessary style. By default, this typically means there's vertical spacing before and after.

### Tags
So let's break that down. There's clearly a sentence there: "Hello! I'm a paragraph element." But that sentence is wrapped in a `<p>...</p>`. Both of these are **tags**. The `<p>` is the _opening tag_, and the `</p>` is the _closing tag_ (the slash makes it a closing tag.)


### Attributes
Inside the _opening tag_ of any element can be an ***attribute***. These look like this:
```markup
<a href="http://www.google.com">This link goes to google</a>
```
First, this `<a>` tag is an anchor tag. This tag is used to create links in the document. 

See the `href="http://www.google.com"`? That is an attribute. It is used to give the element some special properties, which are aptly named attributes. In this case, href contains the links destination. 


These are the basic building blocks of HTML. 



Hierarchies
-----------

![Element Hierarchy](resources/html/html_hierarchy.png)

One fundamental property of HTML is that an element can contain another element. For example, we might want to create to italicize a word in our paragraph.

```markup
<p>This is my <i>favorite</i> paragraph!</p>
```

In this example, the `<i>` is used _inside_ the `<p>` to italicize the word favorite. 


Common Elements
---------------

Paragraphs are just one of the many elements in HTML. We will now cover some of the more common elements. If you're interested, you can see a [full list of elements here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). Here's an empty JSBin to explore with as you read this.

<a class="btn btn-default jsbin-button" href="http://jsbin.com/pehuwe/1/edit?html,output">Open in JS Bin</a>

### Core Page Elements

So every current webpage will have at least 5 key elements in them. Here's an example:

```markup
<!DOCTYPE html>
<html>
	<head>
		<title>This is my favorite page</title>
	</head>
	<body>
		<p>This is the body of our page!</p>
	</body>
</html>
```

The key elements are the `<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, and `<body>`. 

* `<!DOCTYPE html>` is always the first element on a page, and tells the browser that this page is HTML5. **Notice that it does not have a closing tag!** This is the first element we have seen like this, but there are several more.
* `<html>` is the wrapper around an html document.
* `<head>` is a special section that is used for key properties of the document.
* `<title>` is the title of the document. Since it does not change the page structure, it appears only in the `<head>`. 
* `<body>` is the core of the document itself. All of the visible HTML you see will appear within the `<body>` tag. 



### Text Formatting

So far we've explored, a few of the key elements in HTML, but there are many more. Some of the more common ones are simple stylistic ones. We used the italic element (`<i>`) in an earlier example, but there are a couple of more.

* `<p>` - **paragraph** is used to denote paragraphs. 
* `<i>` - **italicize** is used to _italicize some text_. 
* `<b>` - **bold** is used to make it's contents **bold**.
* `<u>` - **underline** is used for <u>underlining</u>. 
* `<s>` - **strikethrough** is used for <s>striking out text</s>.
* `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, and `<h6>` are used to define 6 levels of headings in the document. `<h1>` is highest level heading and is often used for page titles that appear on the page. 

<a class="btn btn-default jsbin-button" href="http://jsbin.com/ladiqu/2/edit?html,output">Open in JS Bin</a>

### Core Formatting Elements

The most common elements you'll see are the `<span>` and the `<div>`. These elements purpose are specifically to act as container elements, and they are very similar except for one key difference. The difference between these can initially be troublesome for people.

#### Div

In a sense, the `<div>` is like a paragraph element. By default, it will start on a new line and will take up the entire width of the line. 

#### Span

A `<span>` does not start a new line. By default, it behaves like many of the text formatting elements such as `<i>` in that it can appear in the middle of a line. The width of the `<span>` is only as large as the elements within it. 


To help explain this a little further, let's experiment with an example.

<a class="btn btn-default jsbin-button" href="http://jsbin.com/larafa/3/edit?html,output">Open in JS Bin</a>

Html Wrapup
------

So hopefully by now, we have learned how to construct a very basic HTML document. We have learned some of the most basic elements that can be used in HTML documents and how those can be structured. There are a lot of other elements in the HTML and you can explore some of them [at this website](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). 


SVG
---

SVG is a language very similar to HTML, but unlike HTML is specifically meant for creating graphics. Thankfully, it can live within HTML as a special element. The `SVG` element. This would look like this:

```markup
<svg width="100" height="100">
	... SVG elements ...
<svg>
```

Notice that this has two attributes for width and height. It is important to explicitly specify both of these attributes and give the SVG element a size. Unlike HTML elements, it will not auto-adjust the size with the content inside of it. In this case, it will be 100 pixels wide and 100 pixels tall. 

So two of the key elements in SVG that you'll use are the `circle` and the `rect`. 

Bar Attributes (The most important ones)
<table class="table">
	<thead>
		<tr><th>Attribute Name</th><th>Description</th></tr>
	</thead>
	<tbody>
		<tr><td>x</td><td>X coordinate</td></tr>
		<tr><td>y</td><td>Y coordinate</td></tr>
		<tr><td>width</td><td>Width of rectangle</td></tr>
		<tr><td>height</td><td>Height of rectangle</td></tr>
		<tr><td>fill</td><td>Fill color name or HTML RGB notation</td></tr>
	</tbody>
</table>

So to insert an SVG bar, the full code in HTML would look like this:
```markup
<svg width="50" height="50">
	<rect x="10" y="10" width="30" height="10" fill="blue" />
</svg>
```


Circle Attributes
<table class="table">
	<thead>
		<tr><th>Attribute Name</th><th>Description</th></tr>
	</thead>
	<tbody>
		<tr><td>cx</td><td>CX coordinate</td></tr>
		<tr><td>cy</td><td>CY coordinate</td></tr>
		<tr><td>r</td><td>Radius</td></tr>
		<tr><td>fill</td><td>Fill color name or HTML RGB notation</td></tr>
	</tbody>
</table>


So let's try this example. Here's a pre-prepared one with the rectangle. The SVG element is 100x100 pixels, so you should add a circle in the center at (50,50) with a radius of 25 and a red fill color. 

<a class="btn btn-default jsbin-button" href="http://jsbin.com/zosoki/2/edit?html,output">Open in JS Bin</a>


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



See Also: [JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)


Variables
---------

In the simplest sense, variables are like cups. They can hold a lot of different things. These can be numbers, strings, or some other things we won't cover. In the number sense, they're sort of like algebraic expressions.

```javascript
var mystr = "this is a string!";
var mynum = 5;
```

Let's explore the above addition example but with variables.



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




