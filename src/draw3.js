const d3 = require("d3");

var datapoints = [
  { name: "New York", population: 19 },
  { name: "Texas", population: 26 },
  { name: "California", population: 38 },
  { name: "Florida", population: 20 },
  { name: "Illinois", population: 12 }
];

const svg = d3.select("#draw3").append("svg");

const rectangles = svg
  .selectAll("rect")
  .data(datapoints)
  .enter()
  .append("rect")
  .attr("x", 75)
  .attr("y", function(d, i) {
    return i * 30;
  })
  .attr("height", 20)
  .attr("width", function(d) {
    return d["population"] * 3;
  });

var annotations = svg
  .selectAll("text")
  .data(datapoints)
  .enter()
  .append("text")
  .attr("x", 65)
  .attr("y", function(d, i) {
    return i * 30 + 15;
  })
  .text(function(d) {
    return d["name"];
  })
  .attr("font-size", 12)
  .attr("text-anchor", "end");
