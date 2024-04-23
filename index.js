#! //usr/bin/env node
import inquirer from "inquirer";
// 1) computer will genrate a ramdom number - Done
// 2)user input for guessing number - Done
// 3) comper user input with computer genrate number and show result - Done
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessingnumber",
        type: "number",
        message: "Plz guessing a number between 1-10",
    }
]);
if (answers.userguessingnumber === randomNumber) {
    console.log("congrtratultion! you guessed right number.");
}
else {
    console.log("your guess number is wrong.");
}
