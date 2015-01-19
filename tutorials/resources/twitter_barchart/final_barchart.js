(function () {
  var data = d3.select('#top_20_hashtags').html().trim();
  data = d3.csv.parse(data, function (d) {
    return {
      hashtag: d.hashtag,
      num_convs: +d.num_convs,
      num_tweets: +d.num_tweets,
      num_users: +d.num_users
    };
  });

//Add an SVG element
  var width = 500;
  var height = 400;
  var svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);


//Determine data ranges
  var max_tweets = d3.max(data, function (d) {
    return d.num_tweets;
  });

  var min_tweets = d3.min(data, function (d) {
    return d.num_tweets;
  });

  var tag_names = data.map(function (d) {
    return d.hashtag;
  });

//Add margins
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


//Create scales
  var x = d3.scale.linear()
    .range([0, graphWidth])
    .domain([0, max_tweets]);

  var y = d3.scale.ordinal()
    .domain(tag_names)
    .rangeRoundBands([0, graphHeight], 0.1);

//Draw the axes
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

//Draw the bars
  var bars = chart.selectAll('rect.bar')
    .data(data);

  bars.enter()
    .append('rect')
    .attr('class', 'bar');


  bars.exit()
    .remove();

  bars.attr('x', 0)
    .attr('y', function (d) {
      return y(d.hashtag);
    })
    .attr('height', y.rangeBand())
    .attr('width', function (d) {
      return x(d.num_tweets);
    });
})();
