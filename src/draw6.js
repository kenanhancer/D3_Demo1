const d3 = require("d3");

const circleRadii = [40, 20, 10];

const draw6DivContainer = d3.select("#draw6");

const svgContainer = draw6DivContainer
  .append("svg")
  .attr("width", 600)
  .attr("height", 100);

const circles = svgContainer
  .selectAll("circle")
  .data(circleRadii)
  .enter()
  .append("circle");

const circleAttributes = circles
  .attr("cx", 50)
  .attr("cy", 50)
  .attr("r", function(d) {
    return d;
  })
  .style("fill", function(d) {
    let returnColor;
    if (d === 40) {
      returnColor = "green";
    } else if (d === 20) {
      returnColor = "purple";
    } else if (d === 10) {
      returnColor = "red";
    }
    return returnColor;
  });
