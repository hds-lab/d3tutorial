(function () {
  var data = d3.select('#cars').html().trim();
  data = d3.csv.parse(data, function (d) {
    return {
      model: d.Model,
      origin: d.Origin,
      year: +d.Year,
      cylinders: +d.Cylinders,
      horsepower: +d.Horsepower,
      mpg: +d.MPG,
      weight: +d.Weight
    };
  });

// Create the SVG element
  var width = 500;
  var height = 400;

  var svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

// Calculate the max weight and car model names
  var max_weight = d3.max(data, function(d) {
    return d.weight;
  });

  var model_names = data.map(function(d){
    return d.model;
  });

// Define the margins
  var margins = {
    top: 20,
    right: 20,
    bottom: 50,
    left: 110
  };
  var graphWidth = width - margins.right - margins.left;
  var graphHeight = height - margins.top - margins.bottom;

// Make a group for drawing the chart
  var chart = svg.append('g')
    .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');

// Create the scales
  var x = d3.scale.linear()
    .range([0, graphWidth])
    .domain([0, max_weight]);

  var y = d3.scale.ordinal()
    .domain(model_names)
    .rangeRoundBands([ 0, graphHeight], 0.1);

// Draw the axes
  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("top");

  chart.append("g")
    .classed("x axis", true)
    .call(xAxis);

  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

  chart.append("g")
    .classed("y axis", true)
    .call(yAxis);

// Draw the bars
  var bars = chart.selectAll('rect.bar')
    .data(data);

  bars.enter()
    .append('rect')
    .attr('class', 'bar');

  bars.exit()
    .remove();

  bars.attr('x', 0)
    .attr('y', function(d) {
      return y(d.model);
    })
    .attr('height', y.rangeBand())
    .attr('width', function(d) {
      return x(d.weight);
    });
})();
