function generateHTML(employees) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Employee Generator</title>
        <!-- Latest compiled and minified CSS & JS -->
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
      </head>
    
      <body>
      <div class="container">
      <div class="jumbotron">
      <h1>Your Team</h1>
      <hr />
        <div class="col d-flex justify-content-center">
            <div class="card" style="width: 18rem">
                <div class="card-header">Example</div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    </ul>
                </div>
             ${generateCard(employees)}
            </div>
          </div>
        </div>
      </body>
    </html>`;
}

function generateCard(employees) {
  return employees.map((data) => {
    if (data.getRole() === "Manager") {
      return `
          <div class="card" style="width: 18rem">
            <div class="card-header">${data.name}</div>
            <div class="card-header">${data.getRole()}</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${data.id}</li>
              <li class="list-group-item">${data.email}</li>
              <li class="list-group-item">${data.officeNumber}</li>
            </ul>
        </div>
        <br>`;
    }
    if (data.getRole() === "Intern") {
      return `
          <div class="card" style="width: 18rem">
            <div class="card-header">${data.name}</div>
            <div class="card-header">${data.getRole()}</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${data.id}</li>
              <li class="list-group-item">${data.email}</li>
              <li class="list-group-item">${data.school}</li>
            </ul>
        </div>
        <br>`;
    }
    if (data.getRole() === "Engineer") {
      return `
          <div class="card" style="width: 18rem">
            <div class="card-header">${data.name}</div>
            <div class="card-header">${data.getRole()}</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${data.id}</li>
              <li class="list-group-item">${data.email}</li>
              <li class="list-group-item">${data.github}</li>
            </ul>
        </div>
        <br>`;
    }
    console.log(employeeCard);
    return employeeCard;
  });
}

module.exports = generateHTML;
