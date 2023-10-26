const inquirer = require("inquirer");

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
  })