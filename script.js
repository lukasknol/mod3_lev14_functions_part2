// NO ARGUMENT 
const brush = function () {
   console.log('The wall has been painted red');
};

brush();

// SINGLE ARGUMENT
const brush2 = function (color) {
   console.log("I'm painting the wall " + color);
};

brush2("green");
brush2("blue");

//MULTIPLE ARGUMENTS
const brush3 = function (wallSide, color) {
   console.log("The " + wallSide + " wall has been painted " + color);
};

brush3("north", "orange");
brush3("south-east", "grey");

// The order matters
const brush4 = function (color, wallSide) {
   console.log("The " + wallSide + " wall has been painted " + color);
};

brush4("north", "orange");

// Change the order of the arguments
const brush5 = function(color, wallSide) {
   console.log("The " + wallSide + " wall has been painted " + color);
};

brush5("orange", "north");
