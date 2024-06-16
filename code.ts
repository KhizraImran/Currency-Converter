#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.bold.rgb(
    204,
    204,
    204
  )("\n \t <<<========================================>>>")
);
console.log(
  chalk.bold.rgb(
    204,
    204,
    204
  )(
    `    ${chalk.bold.hex("#B51B75")(
      " \t \t Welcome to Currency Converter App"
    )} `
  )
);
console.log(
  chalk.bold.rgb(
    204,
    204,
    204
  )(" \t <<<=========================================>>>")
);

let exchange_rate: any = {
  USD: 1,
  EUR: 0.9,
  JYP: 113,
  CAD: 1.3,
  AUD: 1.65,
  PKR: 277.88,
};

let user_answer = await inquirer.prompt([
  {
    name: "from_currency",
    type: "list",
    message: "Select the currency to convert from:",
    choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
  },
  {
    name: "to_currency",
    type: "list",
    message: "Select the currency to convert into:",
    choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
  },
  {
    name: "amount",
    type: "input",
    message: "Enter the amount to convert:",
    validate: function (value) {
      if (value.trim().length > 0) {
        return true;
      } else {
        return "First Enter Amount";
      }
    },
  },
]);

let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;

let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;

console.log(`- Converted Amount = ${converted_amount.toFixed(2)}`);
