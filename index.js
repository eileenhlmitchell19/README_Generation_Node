const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');

const outputHTML = path.resolve(__dirname, 'output', 'team.html')

const teamMembers = [];
const arrayID = [];

function start(){

    function createManager(){
        inquirer.prompt([
            {
                type:'Input',
                name: 'managerName',
                message:'What is the manager name?'
            }
        
        ])
        
    }

    function createEngineer(){
        inquirer.prompt([
            {
                type:'Input',
                name: 'engineerName',
                message:'What is the engineeer name?'
            }
        
        ])
    }

    function createIntern(){
        inquirer.prompt([
            {
                type:'Input',
                name: 'internName',
                message:'What is the intern name?'
            }
        
        ])
    }

    createManager();
    createEngineer();
    createIntern();
}

start()