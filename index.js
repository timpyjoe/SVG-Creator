const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");
const fs = require("fs");

const questions = [
{
  type: "input",
  message: "Please enter up to 3 characters",
  name: "letters"
},
{
  type: "input",
  message: "Please enter a text color",
  name: "color"
},
{
  type: "list",
  message: "Please select a shape",
  name: "shape",
  choices: ["Circle", "Triangle", "Square"]
},
{
  type: "input",
  message: "Please enter a background color",
  name: "bgColor"
}
]

inquirer.prompt(questions)
  .then(responses => {
    console.log(responses)
    const { letters, color, shape, bgColor } = responses;
    if (shape === "Circle") {
      const newSVG = new Circle(color, letters, bgColor);
    } else if (shape === "Triangle") {
      const newSVG = new Triangle(color, letters, bgColor);
    } else if (shape === "Square") {
      const newSVG = new Square(color, letters, bgColor);
    }

    fs.writeFile("logo.svg", newSVG.build(), (err) => {
      if (err) console.log("There was an error")
    })
  })