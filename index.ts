#! /usr/bin/env node

import inquirer from "inquirer";

// printing a wellcome Message
console.log("\n\twellcome To \ 'umaimakhan/' - CLI simple calculator\n");

//Asking questions form users through Inquirer

let answers = await inquirer.prompt([
    {message: "Enter First Number", type:"number", name: "firstNumber"},
    {message: "Enter Second Number", type: "number",name: "secondNumber"},
    {
        message:"select one operator to perfoms operations",
        type:"list",
        name:"operator",
        choices:["Addition", "Subraction" ,"Multiplication" , "Division"],
    },
]);

//Conditional statements If-Else

if(answers.operator==="Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if(answers.operator==="Subraction"){
    console.log(answers.firstNumber - answers .secondNumber)
}
else if(answers.operator==="Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.operator==="Division"){
    console.log(answers.firstNumber /answers.secondNumber)
}
else{
    console.log("Invalid Input" )
}