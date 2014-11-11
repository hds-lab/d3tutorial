(function() {
  //Import the data
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

  var range = {};

//Get the min and max of all of the quantitative variables
  range.year = d3.extent(data, function (d) {
    return d.year;
  });
  range.cylinders = d3.extent(data, function (d) {
    return d.cylinders;
  });
  range.horsepower = d3.extent(data, function (d) {
    return d.horsepower;
  });
  range.mpg = d3.extent(data, function (d) {
    return d.mpg;
  });
  range.weight = d3.extent(data, function (d) {
    return d.weight;
  });

//Get the model names
  range.model = d3.set(data.map(function (d) {
    return d.model;
  })).values();

//Get the origin names
  range.origin = d3.set(data.map(function (d) {
    return d.origin;
  })).values();


//Create the SVG element
  var width = 500;
  var height = 400;
  var svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

//Add insets for the axes
  var margins = {
    top: 20,
    right: 20,
    bottom: 50,
    left: 30
  };
  var graphWidth = width - margins.right - margins.left;
  var graphHeight = height - margins.top - margins.bottom;

  var chart = svg.append('g')
    .attr('transform',
    'translate(' + margins.left + ',' + margins.top + ')');


//A helper function to extend the axes by a percentage
  var autoextend = function (minmax) {
    var r = minmax[1] - minmax[0];
    var buffer = r * 0.08;
    return [minmax[0] - buffer, minmax[1] + buffer];
  };


//Create the axis scales
  var y = d3.scale.linear()
    .range([graphHeight, 0])
    .domain(autoextend(range.mpg));

  var x = d3.scale.linear()
    .range([0, graphWidth])
    .domain(autoextend(range.horsepower));

  var radius = d3.scale.log()
    .range([5, 10])
    .domain(range.weight);

  var color = d3.scale.category10();

//Create the axis renderers
  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

//Draw the axes
  var yAxisG = chart.append("g")
    .classed("y axis", true)
    .call(yAxis);

  var xAxisG = chart.append("g")
    .attr("transform", "translate(0, " + graphHeight + ")")
    .classed("x axis", true)
    .call(xAxis);

//Add axis labels
  xAxisG.append("text")
    .attr("class", "label")
    .attr("x", graphWidth)
    .attr("y", -5)
    .style("text-anchor", "end")
    .text("Horsepower");

  yAxisG.append("text")
    .attr("class", "label")
    .attr("y", 6)
    .attr("x", 6)
    .attr("dy", ".5em")
    .text("MPG");


//Find all the dots
  var dots = chart.selectAll('.dot')
    .data(data);

//Add dots
  dots.enter()
    .append("circle")
    .attr("class", "dot")
    .append("title");

//Remove dots
  dots.exit().remove();

//Map data to visual attributes
  dots.attr("r", function (d) {
    return radius(d.weight);
  })
    .attr("cx", function (d) {
      return x(d.horsepower);
    })
    .attr("cy", function (d) {
      return y(d.mpg);
    })
    .style("fill", function (d) {
      return color(d.origin);
    });

//Set the title text
  dots.select("title")
    .text(function (d) {
      return d.model +
        " (" + d.origin +
        "): " + d.horsepower + " hp, " +
        d.mpg + " mpg, " +
        d.weight + " lbs";
    });


//Add a legend for color/origin
  var origins = chart.selectAll(".legend.origin")
    .data(color.domain())
    .enter().append("g")
    .attr("class", "legend origin")
    .attr("transform",
    function (d, i) {
      return "translate(0," + i * 20 + ")";
    });

  origins.append("rect")
    .attr("x", graphWidth - 18)
    .attr("width", 18)
    .attr("height", 18)
    .style("fill", color);

  origins.append("text")
    .attr("x", graphWidth - 24)
    .attr("y", 9)
    .attr("dy", ".35em")
    .style("text-anchor", "end")
    .text(function (d) {
      return d;
    });


  var legendOffset = origins.size() * 20 + 5;

//Add a legend for radius/weight
  var weights = chart.selectAll('.legend.weight')
    .data(range.weight)
    .enter().append('g')
    .attr('class', 'legend weight')
    .attr('transform', function (d, i) {
      return "translate(0, " + (legendOffset + i * 20) + ")";
    });

  weights.append("circle")
    .attr("cx", graphWidth - 9)
    .attr("cy", 10)
    .attr("r", radius)
    .style("fill", 'gray');

  weights.append("text")
    .attr("x", graphWidth - 24)
    .attr("y", 9)
    .attr("dy", ".35em")
    .style("text-anchor", "end")
    .text(function (d) {
      return d + " lbs";
    });

//Link the legend to the dots
  origins.on('mouseover', function (origin) {
    dots.classed('brushed', function (d) {
      return d.origin == origin;
    });
  })
    .on('mouseout', function (origin) {
      dots.classed('brushed', false);
    });

  dots.on('mouseover', function (d) {
    origins.classed("brushed", function (origin) {
      return d.origin == origin;
    });
  })
    .on('mouseout', function (d) {
      origins.classed("brushed", false);
    });
})();
