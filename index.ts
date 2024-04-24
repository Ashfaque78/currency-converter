#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgMagenta("******* Welcome To Currency Converter ******"));

const Currency: any = {
     USD: 1, //base price
     INR: 83.29,
     PKR: 277.31,
     EUR: 0.94,
     YEN: 154.92,
     AED: 3.67,
     SAR: 3.75,
     CNY: 7.25,
     GBP: 0.80,
     AZN: 1.70,
     AUD: 1.54,
     BHD: 0.38,
     BDT: 109.19,
     CAD: 1.37,
     MYR: 4.78,
     NZD: 1.68,
     OMR: 0.38,
     QAR:3.64,
     SGD: 1.36,
     KWD: 0.31,
}

     let userAnswer = await inquirer.prompt(
        [
            {
                name: 'from',
                type: 'list',
                message: "Enter From Currency",
                choices:[
                    "USD", "INR", "PKR", "EUR", "YEN", "AED", "SAR",
                    "CNY", "GBP", "AZN", "AUD", "AUD", "BHD", "BDT",
                    "CAD", "MYR", "NZD", "OMR", "QAR", "SGD", "KWD"
                ]
            
            },

            {
                name: 'to',
                type: 'list',
                message: "Enter To Currency",
                choices:[
                    "USD", "INR", "PKR", "EUR", "YEN", "AED", "SAR",
                    "CNY", "GBP", "AZN", "AUD", "AUD", "BHD", "BDT",
                    "CAD", "MYR", "NZD", "OMR", "QAR", "SGD", "KWD"
                ]
            },

            {
                name: 'amount',
                type: 'number',
                message: "Enter Your Amount",
            }
        ]
     );

     let fromAmount = Currency[userAnswer.from]
     let toAmount = Currency[userAnswer.to]
     let amount = userAnswer.amount
     let baseAmount = amount / fromAmount
     let convertAmount = baseAmount * toAmount

     console.log(convertAmount);
    