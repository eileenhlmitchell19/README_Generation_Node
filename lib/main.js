const inquirer = require('inquirer');
const fs = require('fs');

const employeeTeam = team => {
    generateManager = manager => {
       return `
       <div class="card" style="width: 21rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.getName().name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
          <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${manager.getID().id}</li>
                <li class="list-group-item">Email:${manager.getEmail().email}</li>
                <li class="list-group-item">Office #:${manager.getOfficeNumber().officeNumber}</li>
            </ul>
          </div>
        </div>
    </div>`
    }


    generateEngineer = engineer => {
       return `
       <div class="card" style="width: 21rem;">
       <div class="card-body">
         <h5 class="card-title">${engineer.getName().name}</h5>
         <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
         <div class="card" style="width: 18rem;">
           <ul class="list-group list-group-flush">
             <li class="list-group-item">ID:${engineer.getID().id}</li>
             <li class="list-group-item">Email:${engineer.getEmail().email}</li>
             <li class="list-group-item">Github:${engineer.getGithub().github}</li>
           </ul>
         </div>
       </div>
    </div>`
    }

    generateIntern = intern => {
        return `
        <div class="card" style="width: 21rem;">
        <div class="card-body">
          <h5 class="card-title">${intern.getName().name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
          <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${intern.getID().id}</li>
                <li class="list-group-item">Email:${intern.getEmail().email}</li>
                <li class="list-group-item">School:${intern.getSchool().school}</li>
            </ul>
          </div>
        </div>
    </div>`
     };

      // Empty array for the template literal
      const html = [];

      // For loop to build the template literal of managers
      html.push(
  
          // filter iterates through every item in the array isolates the managers, then map iterates through managers filtered array and then join turns it into a string
          team.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager)).join("")
      )
  
      // For loop to build the template literal of engineers
      html.push(
  
          // filter iterates through every item in the array isolates the managers, then map iterates through managers filtered array and then join turns it into a string
          team.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer)).join("")
      )
  
      // For loop to build the template literal of interns
      html.push(
  
          // filter iterates through every item in the array isolates the managers, then map iterates through managers filtered array and then join turns it into a string
          team.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern)).join("")
      )  
      return html.join("") 
    };

      module.exports = employees => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="template-css.css">
</head>

<body>
 
    <header class="text-center bg-primary p-2 text-white">
        <h1 class="display-4">My Team</h1>
    </header>

    <br>

    <div class="container gy-5">
    <div class="row g-2 justify-content-evenly gap-4">
        
     ${employeeTeam(employees)}   

    </div>
    </div>

</body>
</html>`
};