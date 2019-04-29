const d3 = require("d3");

const spaceCircles = [30, 70, 110];

d3.select("#draw9")
  .append("svg")
  .attr("width", 200)
  .attr("height", 200)
  .selectAll("circle")
  .data(spaceCircles)
  .enter()
  .append("circle")
  .attr("cx", function(d) {
    return d;
  })
  .attr("cy", function(d) {
    return d;
  })
  .attr("r", 20)
  .style("fill", function(d) {
    let returnColor;
    if (d === 30) {
      returnColor = "green";
    } else if (d === 70) {
      returnColor = "purple";
    } else if (d === 110) {
      returnColor = "red";
    }
    return returnColor;
  });
