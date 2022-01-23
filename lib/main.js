const inquirer = require('inquirer');
const fs = require('fs');

const employeeTeam = team => {
    generateManager = manager => {
       return `
       <div class="card" style="width: 21rem;">
        <div class="card-body">
          <h5 class="card-title">${getName().name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${getRole()}</h6>
          <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${getID().id}</li>
                <li class="list-group-item">Email:${getEmail().email}</li>
                <li class="list-group-item">Office #:${getOfficeNumber().officeNumber}</li>
            </ul>
          </div>
        </div>
    </div>`
    }


    generateManager = engineer => {
       return `
       <div class="card" style="width: 21rem;">
       <div class="card-body">
         <h5 class="card-title">${getName().name}</h5>
         <h6 class="card-subtitle mb-2 text-muted">${getRole()}</h6>
         <div class="card" style="width: 18rem;">
           <ul class="list-group list-group-flush">
             <li class="list-group-item">ID:${getID().id}</li>
             <li class="list-group-item">Email:${getEmail().email}</li>
             <li class="list-group-item">Github:${getGithub().github}</li>
           </ul>
         </div>
       </div>
    </div>`
    }

    generateManager = intern => {
        return `
        <div class="card" style="width: 21rem;">
        <div class="card-body">
          <h5 class="card-title">${getName().name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${getRole()}</h6>
          <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${getID().id}</li>
                <li class="list-group-item">Email:${getEmail().email}</li>
                <li class="list-group-item">School:${getSchool().school}</li>
            </ul>
          </div>
        </div>
    </div>`
     };
    };
     module.exports = employeeTeam;