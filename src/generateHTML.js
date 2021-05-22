function generateHTML(employee) {
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
             ${generateManager(employee)}
            </div>
          </div>
        </div>
      </body>
    </html>`;
}

function generateManager(employee) {
  const employeeCard = `
    <div class="card" style="width: 18rem">
      <div class="card-header">${employee.mangName}</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${employee.id}</li>
        <li class="list-group-item">${employee.email}</li>
        <li class="list-group-item">${employee.officeNumber}</li>
      </ul>
  </div>
  <br>`;
  return employeeCard;
}

module.exports = generateHTML;
