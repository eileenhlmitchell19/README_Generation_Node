const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const Manager = require('./lib/manager.js');
const Intern = require('./lib/intern.js');
const Engineer = require('./lib/engineer.js');
const main = require('./lib/html.js')

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
            }, 
            {
                type:'Input',
                name: 'employeeID',
                message:'What is the manager employeeID?'
            }, 
            {
                type:'Input',
                name: 'emailAddress',
                message:'What is the manager email address?'
            }, 
            {
                type:'Input',
                name: 'officeNumber',
                message:'What is the manager office number?'
            }, 
           
        ]).then(answers => { 
            const manager = new Manager( answers.managerName, answers.employeeID, answers.emailAddress, answers.officeNumber )
            teamMembers.push(manager);
            arrayID.push(manager.id)
            
            buildTeam();
        })
        
    };

    function buildTeam() {
        inquirer.prompt([
            {
                type:'list',
                name: 'employeeChoice',
                message:'Would you like to add another manager, an engineer, or exit out?',
                choices: ['Engineer', 'Intern', 'Done']
            }, 
        ]).then(answers => {
            switch (answers.employeeChoice) {
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                case "Done":
                    exit();
                    break;
                default:
                    break;
            }
        })
    }


    function createEngineer(){
        inquirer.prompt([
            {
                type:'Input',
                name: 'engineerName',
                message:'What is the engineeer name?'
            },
            {
                type:'Input',
                name: 'employeeID',
                message:'What is the engineer employeeID?'
            }, 
            {
                type:'Input',
                name: 'emailAddress',
                message:'What is the engineer email address?'
            }, 
            {
                type:'Input',
                name: 'githubUsername',
                message:'What is the engineer office number?'
            }, 
        
        ]).then(answers => { 
            const engineer = new Engineer( answers.engineerName, answers.employeeID, answers.emailAddress, answers.githubUsername )
            teamMembers.push(engineer);
            console.log("here")
            arrayID.push(engineer.id)
            
            buildTeam();
        })
    };

    function buildTeam() {
        inquirer.prompt([
            {
                type:'list',
                name: 'employeeChoice',
                message:'Would you like to add another manager, an intern, or exit out?',
                choices: ['Manager','Engineer', 'Intern', 'Done']
            }, 
        ]).then(answers => {
            switch (answers.employeeChoice) {
                case "Manager":
                    createManager();
                    break;
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                case "Done":
                    exit();
                    break;
                default:
                    break;
            }
        })
    }


    function createIntern(){
        inquirer.prompt([
            {
                type:'Input',
                name: 'internName',
                message:'What is the intern name?'
            },
            {
                type:'Input',
                name: 'employeeID',
                message:'What is the intern employeeID?'
            }, 
            {
                type:'Input',
                name: 'emailAddress',
                message:'What is the intern email address?'
            }, 
            {
                type:'Input',
                name: 'schoolName',
                message:'What is the intern school name?'
            }, 
        
        ]).then(answers => { 
            const intern = new Intern( answers.internName, answers.employeeID, answers.emailAddress, answers.schoolName )
            teamMembers.push(intern);
            arrayID.push(intern.id)
            
            buildTeam();
        })
    };

    function exit() {
        inquirer.prompt([
            {
                type:'list',
                name: 'employeeChoice',
                message:'Would you like to add another intern, a different employee or exit out?',
                choices: ['Manager','Engineer', 'Intern', 'Done']
            }, 
        ]).then(answers => {
            switch (answers.employeeChoice) {
                case "Manager":
                    createManager();
                    break;
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                case "Done":
                    exportTeam();
                    break;
                default:
                    break;
            }
        })
    }

    function exportTeam() {
                fs.writeFileSync('main.js', mainjs({
                    ...answers
                }), (err) => {
                    if (err) {
                        console.log('Err: ', err)
                    }else{
                        console.log('Worker information successfully created')
                    }
                })
              };
            

    createManager();
  
    
    
}

start()


    

