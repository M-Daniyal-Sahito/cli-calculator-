#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { massage: "First Number", type: "number", name: "firstNumber" },
    { massage: "Second Number", type: "number", name: "secondNumber" },
    {
        massage: "Select Operation to perform Operation",
        type: "list",
        choices: ["Addition", "Subtraction", "Division", "Multiplication"],
        name: "operators",
    },
]);
if (answer.operators === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operators === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else {
    console.log("invailid number");
}
