const employeeTeam = team => {
    generateManager = manager => {
       return `
       <div class="card" style="width: 21rem;">
        <div class="card-body">
          <h5 class="card-title">Name</h5>
          <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
          <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:</li>
                <li class="list-group-item">Email:</li>
                <li class="list-group-item">Office #:</li>
            </ul>
          </div>
        </div>
    </div>`
    }
};

    generateManager = engineer => {
       return `
       <div class="card" style="width: 21rem;">
       <div class="card-body">
         <h5 class="card-title">Name</h5>
         <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
         <div class="card" style="width: 18rem;">
           <ul class="list-group list-group-flush">
             <li class="list-group-item">ID:</li>
             <li class="list-group-item">Email:</li>
             <li class="list-group-item">Github:</li>
           </ul>
         </div>
       </div>
    </div>`
    }

    generateManager = intern => {
        return `
        <div class="card" style="width: 21rem;">
        <div class="card-body">
          <h5 class="card-title">Name</h5>
          <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
          <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:</li>
                <li class="list-group-item">Email:</li>
                <li class="list-group-item">School:</li>
            </ul>
          </div>
        </div>
    </div>`
     };
