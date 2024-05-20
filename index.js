#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to the Number Guessing Game! Can you find the hidden number?\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: " You can choose any number between 1 to 5.",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You've chosen the right number!.");
}
else {
    console.log("Sorry, that's not the right number. Try again!.");
}
