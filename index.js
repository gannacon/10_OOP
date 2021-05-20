// INCLUDE THE FILES TO START THIS CODE.
const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


//Initialize the new Employee Object
const employee = new.Employee();

// Start by getting the name of the manager
employee.getName();