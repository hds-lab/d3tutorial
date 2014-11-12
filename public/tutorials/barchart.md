Building a Nice Bar Chart
=========================

We've just learned some of the basic features of D3
for building HTML elements and processing data.
In this tutorial, we will use some data that we've loaded
about Twitter hashtags to build a simple bar chart:

![Final bar chart visualization](resources/barchart/barchart_visualization.png)

This visualization just shows the number of times each hashtag
was used over a given time interval.

1. Drawing a Visualization
--------------------------

How do we get from our hashtag data to a visualization?
Once we've loaded the data, we have to use D3 to draw a bunch of stuff
on the screen. Here are the basic steps we'll be following:

1. Read the data from CSV.
2. Create an SVG element to hold the visualization.
3. Define x and y scales.
4. Draw the x and y axes and labels.
5. For every hashtag in the data:
    1. Draw an SVG `<rect>` element
    2. Set the `y` position
    3. Set the width based on frequency

We already talked about loading data. You can review the code for
this in the JavaScript panel to the right, if you wish.
We have also already entered some CSS to make the bar chart look nice.

<a class="btn btn-primary jsbin-button" href="http://jsbin.com/rogab/64/edit?js,output" target="_blank">Open Initial Setup in JS Bin</a>

In the following sections, we will go through each of the steps above.


2. Create an SVG element
------------------------

Let's add an SVG element to the page.
We'll also decide at this point how big we want to draw our visualization.
Add the following to your JavaScript:

```javascript
var width = 500;
var height = 400;
var svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);
```

This code uses `d3.select` to locate the `<body>` HTML element
and adds an `<svg>` element to it.

It then sets the `<svg>` element's `width` and `height` attributes
using variables.

You should see a box with a thin gray border appear.

<a class="btn btn-primary jsbin-button" href="http://jsbin.com/rogab/65/edit?js,output" target="_blank">Open in JS Bin</a>


3. Define the x and y scales
----------------------------

How do we convert from numbers in the data to visual variables, like
color, position, or size?

D3 provides some [scaling functions ](https://github.com/mbostock/d3/wiki/Scales) to help us with this task.
It defines the following major kinds of "scales":

- [Quantitative Scales](https://github.com/mbostock/d3/wiki/Quantitative-Scales) for continuous values.
    - linear scales: `d3.scale.linear()`
    - log scales: `d3.scale.log()`
    - power scales: `d3.scale.power()`
- [Ordinal Scales](https://github.com/mbostock/d3/wiki/Ordinal-Scales) for discrete values.
    - basic ordinal scales: `d3.scale.ordinal()`
    - color scale shortcuts: `d3.scale.category10()`
- [Time Scales](https://github.com/mbostock/d3/wiki/Time-Scales) for mapping time values.
    - multi-level time scales: `d3.time.scale()`

In this tutorial, we'll use `d3.scale.linear()` to map from
hashtag frequencies onto bar width. We'll also use `d3.scale.ordinal()`
to map hashtags to their vertical position in the bar chart.


### Find the data ranges

Before we can figure out how to map hashtag frequency onto
bar width, we need to know the range of hashtag frequencies in the data.

We can do this easily in D3. The code below goes through
all of the rows (`d`) in the data, and finds the value
of the `num_tweets` field. D3 then returns the maximum value
from that field:

```javascript
var max_tweets = d3.max(data, function(d) {
  return d.num_tweets;
});
```

We can add similar code to find the smallest value of `num_tweets`:

```javascript
var min_tweets = d3.min(data, function(d) {
  return d.num_tweets;
});
```

Finally, we would like to have a list of all of the hashtags in the data,
so we will use the `map()` function to extract this field:

```javascript
var tag_names = data.map(function(d){
  return d.hashtag;
});
```

### Construct the scales

Now that we know the min and max of `num_tweets` and the
hashtags in our data, we are ready to create D3 scales.

Let's start with the x scale. The x scale should map
from the domain `[0, max_tweets]` onto the range
`[0, width]`.

Note that we are **not** using `min_tweets` here
because we want our bars to be based at zero.

Add this:

```javascript
var x = d3.scale.linear()
  .range([0, width])
  .domain([0, max_tweets]);
```

Next, we will create an ordinal scale that maps hashtag
names onto vertical positions. This will use
a special D3 function `rangeRoundBands()` that
is useful for ensuring your bars get spaced out correctly:

```javascript
var y = d3.scale.ordinal()
  .domain(tag_names)
  .rangeRoundBands([ 0, height], 0.1);
```

Now we're ready to move on to drawing the axes.

<a class="btn btn-primary jsbin-button" href="http://jsbin.com/rogab/66/edit?js,output" target="_blank">Open in JS Bin</a>





3. Add some margins
-------------------

```javascript
var margins = {
  top: 20,
  right: 20,
  bottom: 50,
  left: 110
};
var graphWidth = width - margins.right - margins.left;
var graphHeight = height - margins.top - margins.bottom;

var chart = svg.append('g')
  .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');
```



The bar chart visualization of is complete. Below is a live copy:

<iframe class="embed-visualization" height="430" width="530" src="resources/barchart/barchart.html"></iframe>

<a class="btn btn-primary jsbin-button" href="http://jsbin.com/rogab/63/edit?js,output" target="_blank">Open in JS Bin</a>
