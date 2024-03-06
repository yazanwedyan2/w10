// Function to add a new row to the table
function addRow() {
    // Get the input values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
  
    // Create a new row element
    let newRow = document.createElement('tr');
  
    // Construct the HTML for the new row
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td>${age}</td>
    `;
  
    // Append the new row to the table body
    document.getElementById('table-body').appendChild(newRow);
  
    // Reset the form
    document.getElementById('add-row-form').reset();
  }
  