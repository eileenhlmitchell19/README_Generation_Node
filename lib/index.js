const inquirer = require('inquirer');
// 
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
        
        ])
        
    };

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
        
        ])
    };

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
        
        ])
    };

    createManager();
    createEngineer();
    createIntern();
    
}

start()

.then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)

    fs.writeFileSync('html.js', htmljs({
        ...answers
    }), (err) => {
        if (err) {
            console.log('Err: ', err)
        }else{
            console.log('Worker information successfully created')
        }
    })
  });