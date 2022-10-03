console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
let favNum = 17
let userAnswer = prompt("What is my favorite number?")

if (userAnswer > 17) {
  console.log('too high')
} else if (userAnswer < 17) {
  console.log('too low')
} else {
  console.log("Congratulations!!!")
}

// Exercise 2
let birthMonth = prompt("what is your birth month")
switch (birthMonth.toLowerCase()) {
  case 'january':
    console.log('winter')
    break
  case 'february':
    console.log('winter')
    break
  case 'march':
    console.log('spring')
    break
  case 'april':
    console.log('spring')
    break
  case 'may':
    console.log('spring')
    break
  case 'june':
    console.log('summer')
    break
  case 'july':
    console.log('summer')
    break
  case 'august':
    console.log('summer')
    break
  case 'september':
    console.log('fall')
    break
  case 'october':
    console.log('fall')
    break
  case 'november':
    console.log('fall')
    break
  case 'december':
    console.log('winter')
    break
  default:
    console.log('enter a proper birth month')
}

// Exercise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

// if (typeId == "01") {
//   type = "Tank top";
// } else if (typeId == "02") {
//   type = "T-Shirt";
// } else if (typeId == "03") {
//   type = "Long Sleeve";
// } else if (typeId == "04") {
//   type == "Sweat Shirt";
// } else {
//   type = "Other";
// }

switch (typeId) {
  case "01":
    type = "Tank Top"
    break;
  case "02":
    type = "T-Shirt"
    break;
  case "03":
    type = "Long Sleeve"
    break;
  case "04":
    type = "Sweat Shirt"
    break;
  default:
    type = "Other"
}

// if (colorId == "BL") {
//   color = "Black";
// } else if (colorId == "BL") {
//   color = "Blue";
// } else if (colorId == "RD") {
//   color = "Red";
// } else if (colorId == "PU") {
//   color = "Purple";
// } else {
//   color = "White";
// }

switch (colorId) {
  case "BL":
    color = "Black"
    break;
  case "BL":
    color = "Blue"
    break;
  case "RD":
    color = "Red"
    break;
  case "PU":
    color = "Purple"
    break;
  default:
    color = "White"
}

// if (sizeId == "S") {
//   size = "Small";
// } else if (sizeId == "M") {
//   size = "Medium";
// } else if (sizeId == "L") {
//   size = "Large";
// } else if (sizeId == "XL") {
//   size = "Extra Large";
// } else {
//   size = "One Size Fits All";
// }

switch (sizeId) {
  case "S":
    size = "Small"
    break
  case "M":
    size = "Medium"
    break
  case "L":
    size = "Large"
    break
  case "XL":
    size = "Extra Large"
    break
  default:
    size = "One size fits all"
}

console.log(`Product: ${size} ${color} ${type}`);