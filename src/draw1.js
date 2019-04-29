const d3 = require("d3");

// create the outer svg
const pSelection = d3
  .select("#draw1")
  .append("p")
  .text("Click Me");

pSelection.on("click", function() {
  var coords = d3.mouse(this);
  console.log(coords);
  d3.select(this).style("color", "red");
});
