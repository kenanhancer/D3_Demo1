const d3 = require("d3");

const draw2Selection = d3.select("#draw2");

const svgSelection = draw2Selection
  .append("svg")
  .attr("width", 50)
  .attr("height", 50);

const circleSelection = svgSelection
  .append("circle")
  .attr("cx", 25)
  .attr("cy", 25)
  .attr("r", 25)
  .style("fill", "purple");
