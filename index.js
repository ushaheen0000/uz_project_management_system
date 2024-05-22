#! /usr/bin/env node
import inquirer from "inquirer";
let tasks = [];
function addTask() {
    inquirer.prompt([{
            name: "name",
            type: "input",
            message: "Enter your name:"
        },
        {
            name: "description",
            type: "input",
            message: "Enter your description:"
        }
    ]).then(answers => {
        const newTask = {
            id: tasks.length + 1,
            name: answers.name,
            description: answers.description
        };
        tasks.push(newTask);
        console.log("task added successfully!!!");
        mainMenu();
    });
}
function listTask() {
    console.log("list of tasks");
    tasks.forEach(task => {
        console.log(`${task.id} ${task.name} ${task.description}`);
    });
    mainMenu();
}
function mainMenu() {
    inquirer.prompt({
        name: "action",
        type: "list",
        choices: ["addTask", "listTask", "Exit"],
        message: "Choose an action:"
    }).then(answer => {
        switch (answer.action) {
            case "addTask":
                addTask();
                break;
            case "listTask":
                listTask();
                break;
            case "Exit":
                console.log("Exiting...");
                process.exit();
        }
    });
}
console.log("Welcome to Project Management System");
mainMenu();
