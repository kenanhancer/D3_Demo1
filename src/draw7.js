const d3 = require("d3");

const theData = [1, 2, 3];

// d3.select("#draw7")
//   .selectAll("p")
//   .data(theData)
//   .enter()
//   .append("p")
//   .text("Hello");

d3.select("#draw7")
  .selectAll("p")
  .data(theData)
  .enter()
  .append("p")
  .text(function(d, i) {
    return "i = " + i + " d = " + d;
  });
