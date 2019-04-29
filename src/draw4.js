const d3 = require("d3");

var datapoints = [10, 70, 30, 40, 90];

d3.select("#draw4")
  .select("svg")
  .selectAll("rect")
  .data(datapoints)
  .enter()
  .append("rect")
  .attr("x", 0) // Begin setting attributes
  .attr("y", function(d, i) {
    // i is an index, 0, 1, 2, 3
    return i * 20; // this spaces them out evenly
  })
  .attr("height", 10)
  .attr("width", function(d) {
    return d * 2; // data point * 2 pixels wide
  });
