// bring in d3 if its not globaly available (e.g. browser side usage)
const d3 = require("d3");

const data = [3, 5, 8, 4, 7];

// create the outer svg
const svg = d3
  .select("#myGraphic")
  .append("svg")
  .attr("height", 100)
  .attr("width", 500);

// append circles for each data point sized relative to the value
svg
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", function(d, i) {
    return (i + 1) * 100 - 50;
  })
  .attr("cy", svg.attr("height") / 2)
  .attr("r", function(d) {
    return d * 5;
  });

// Export it
if (typeof module !== "undefined" && module.exports) {
  module.exports = svg;
}
