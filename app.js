import inquirer from "inquirer";
import chalk from "chalk";
const userInput = await inquirer.prompt([
    {
        message: "Enter a your weight in Kg:",
        type: "number",
        name: "weight",
    },
    {
        message: "Enter height in meter:",
        type: "number",
        name: "height",
    },
]);
const weight = userInput.weight;
const height = userInput.height;
const BMI = weight / (height * height);
console.log("Your BMI is:", chalk.bgGray(BMI));
if (BMI < 18.5) {
    console.log(chalk.yellow("you are underweight"));
}
else if (BMI < 25) {
    console.log(chalk.yellow("your category is Normal Weight"));
}
else if (BMI < 30) {
    console.log(chalk.yellow("your category is over Weight"));
}
else {
    console.log(chalk.yellow("your Category is obses"));
}
