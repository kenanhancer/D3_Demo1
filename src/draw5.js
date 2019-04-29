const d3 = require("d3");

const circleRadii = [40, 20, 10];

d3.select("#draw5")
  .append("svg")
  .attr("width", 200)
  .attr("height", 100)
  .selectAll("circle")
  .data(circleRadii)
  .enter()
  .append("circle")
  .attr("cx", 50)
  .attr("cy", 50)
  .attr("r", function(d) {
    return d;
  })
  .style("fill", function(d) {
    var returnColor;
    if (d === 40) {
      returnColor = "green";
    } else if (d === 20) {
      returnColor = "purple";
    } else if (d === 10) {
      returnColor = "red";
    }
    return returnColor;
  });
