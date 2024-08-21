// Initialize the Employee Management System and create object
const ems = new EmployeeManagementSystem();

// function addEmployee() {
//     const id = parseInt(prompt("Enter employee ID:"));
//     const name = prompt("Enter employee name:");
//     const age = parseInt(prompt("Enter employee age:"));
//     const gender = prompt("Enter employee gender:");
//     const birthdate = prompt("Enter employee birthdate:");
//     const email = prompt("Enter employee email:");
//     const contactNo = prompt("Enter employee contact number:");
//     const emergencyContactNo = prompt("Enter employee emergency contact number:");
//     const bloodGroup = prompt("Enter employee blood group:");
//     const presentAddress = prompt("Enter employee present address:");
//     const permanentAddress = prompt("Enter employee permanent address:");
//     const department = prompt("Enter employee department (Admin, HR, Software Engineer, Sales Department):");

//     let employee;
//     switch (department) {
//         case 'Admin':
//             employee = new Admin(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, permanentAddress);
//             break;
//         case 'HR':
//             employee = new HR(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, permanentAddress);
//             break;
//         case 'Software Engineer':
//             employee = new SoftwareEngineer(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, permanentAddress);
//             break;
//         case 'Sales Department':
//             employee = new SalesDept(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, permanentAddress);
//             break;
//         default:
//             console.log("Invalid department.");
//             return;
//     }

//     ems.addEmployee(employee);
// }

function addEmployee() {
    // const employee = {
    //     name: prompt("Enter employee name:"),
    //     age: parseInt(prompt("Enter employee age:")),
    //     gender: prompt("Enter employee gender:"),
    //     birthdate: prompt("Enter employee birthdate:"),
    //     email: prompt("Enter employee email:"),
    //     contactNo: prompt("Enter employee contact number:"),
    //     emergencyContactNo: prompt("Enter employee emergency contact number:"),
    //     bloodGroup: prompt("Enter employee blood group:"),
    //     presentAddress: prompt("Enter employee present address:"),
    //     permanentAddress: prompt("Enter employee permanent address:"),
    //     department: prompt("Enter employee department (Admin, HR, Software Engineer, Sales Department):")
    // };
    // console.log(employee);

    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const birthdate = document.getElementById('birthdate').value;
    const email = document.getElementById('email').value;
    const contactNo = document.getElementById('contactNo').value;
    const emergencyContactNo = document.getElementById('emergencyContactNo').value;
    const bloodGroup = document.getElementById('bloodGroup').value;
    const presentAddress = document.getElementById('presentAddress').value;
    const permanentAddress = document.getElementById('permanentAddress').value;
    const department = document.getElementById('department').value;

    // Create employee object
    const employee = {
        name,
        age,
        gender,
        birthdate,
        email,
        contactNo,
        emergencyContactNo,
        bloodGroup,
        presentAddress,
        permanentAddress,
        department
    };
    ems.addEmployee(employee);
    // fetch('http://localhost:5000/add-employee', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(employee)
    // })
    // .then(response => response.text())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
}


// function updateEmployee() {
//     const id = parseInt(prompt("Enter employee ID to update:"));
//     const newData = {};

//     const name = prompt("Enter new name (leave blank to keep current name):");
//     if (name) newData.name = name;

//     const age = prompt("Enter new age (leave blank to keep current age):");
//     if (age) newData.age = parseInt(age);

//     const gender = prompt("Enter new gender (leave blank to keep current gender):");
//     if (gender) newData.gender = gender;

//     const birthdate = prompt("Enter new birthdate (leave blank to keep current birthdate):");
//     if (birthdate) newData.birthdate = birthdate;

//     const email = prompt("Enter new email (leave blank to keep current email):");
//     if (email) newData.email = email;

//     const contactNo = prompt("Enter new contact number (leave blank to keep current contact number):");
//     if (contactNo) newData.contactNo = contactNo;

//     const emergencyContactNo = prompt("Enter new emergency contact number (leave blank to keep current emergency contact number):");
//     if (emergencyContactNo) newData.emergencyContactNo = emergencyContactNo;

//     const bloodGroup = prompt("Enter new blood group (leave blank to keep current blood group):");
//     if (bloodGroup) newData.bloodGroup = bloodGroup;

//     const presentAddress = prompt("Enter new present address (leave blank to keep current present address):");
//     if (presentAddress) newData.presentAddress = presentAddress;

//     const permanentAddress = prompt("Enter new permanent address (leave blank to keep current permanent address):");
//     if (permanentAddress) newData.permanentAddress = permanentAddress;

//     const department = prompt("Enter new department (Admin, HR, Software Engineer, Sales Department) or leave blank to keep current department:");
//     if (department) newData.department = department;

//     ems.updateEmployee(id, newData);
// }

function updateEmployee() {
    

    const id = parseInt(document.getElementById("id").value);
    const newData = {};

    const name = document.getElementById("name").value;
    if (name) newData.name = name;

    const age = document.getElementById("age").value;
    if (age) newData.age = parseInt(age);

    const gender = document.getElementById("gender").value;
    if (gender) newData.gender = gender;

    const birthdate = document.getElementById("birthdate").value;
    if (birthdate) newData.birthdate = birthdate;

    const email = document.getElementById("email").value;
    if (email) newData.email = email;

    const contactNo = document.getElementById("contactNo").value;
    if (contactNo) newData.contactNo = contactNo;

    const emergencyContactNo = document.getElementById("emergencyContactNo").value;
    if (emergencyContactNo) newData.emergencyContactNo = emergencyContactNo;

    const bloodGroup = document.getElementById("bloodGroup").value;
    if (bloodGroup) newData.bloodGroup = bloodGroup;

    const presentAddress = document.getElementById("presentAddress").value;
    if (presentAddress) newData.presentAddress = presentAddress;

    const permanentAddress = document.getElementById("permanentAddress").value;
    if (permanentAddress) newData.permanentAddress = permanentAddress;

    const department = document.getElementById("department").value;
    if (department) newData.department = department;

    // ems.updateEmployee(id, newData);

    fetch(`http://localhost:5000/update-employee/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}


// function searchEmployee() {
//     const attribute = prompt("Enter attribute to search by (id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, permanentAddress, department):").toLowerCase();
//     const value = prompt(`Enter value for ${attribute}:`);

//     const results = ems.searchEmployee(attribute, value);

//     if (results.length > 0) {
//         const updateId = parseInt(prompt("Enter the ID of the employee you want to update from the search results:"));
//         const newData = {};

//         // const updateAttribute = prompt("Enter attribute to update by (id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, permanentAddress, department):").toLowerCase();
//         // const updateValue = prompt(`Enter value for ${updateAttribute}:`);

//         // if(updateAttribute) newData.updateAttribute = updateValue;

//         const name = prompt("Enter new name (leave blank to keep current name):");
//         if (name) newData.name = name;

//         const age = prompt("Enter new age (leave blank to keep current age):");
//         if (age) newData.age = parseInt(age);

//         const gender = prompt("Enter new gender (leave blank to keep current gender):");
//         if (gender) newData.gender = gender;

//         const birthdate = prompt("Enter new birthdate (leave blank to keep current birthdate):");
//         if (birthdate) newData.birthdate = birthdate;

//         const email = prompt("Enter new email (leave blank to keep current email):");
//         if (email) newData.email = email;

//         const contactNo = prompt("Enter new contact number (leave blank to keep current contact number):");
//         if (contactNo) newData.contactNo = contactNo;

//         const emergencyContactNo = prompt("Enter new emergency contact number (leave blank to keep current emergency contact number):");
//         if (emergencyContactNo) newData.emergencyContactNo = emergencyContactNo;

//         const bloodGroup = prompt("Enter new blood group (leave blank to keep current blood group):");
//         if (bloodGroup) newData.bloodGroup = bloodGroup;

//         const presentAddress = prompt("Enter new present address (leave blank to keep current present address):");
//         if (presentAddress) newData.presentAddress = presentAddress;

//         const permanentAddress = prompt("Enter new permanent address (leave blank to keep current permanent address):");
//         if (permanentAddress) newData.permanentAddress = permanentAddress;

//         const department = prompt("Enter new department (Admin, HR, Software Engineer, Sales Department) or leave blank to keep current department:");
//         if (department) newData.department = department;

//         ems.updateEmployee(updateId, newData);
//     }
// }

// function searchEmployee() {
//     const attribute = prompt("Enter attribute to search by (id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, permanentAddress, department):").toLowerCase();
//     const value = prompt(`Enter value for ${attribute}:`);

//     fetch(`http://localhost:5000/search-employees?attribute=${attribute}&value=${value}`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         if (data.length > 0) {
//             console.log('Matching Employees:');
//             data.forEach(employee => {
//                 console.log(employee);
//             });
//         } else {
//             console.log(`No employees found with ${attribute} "${value}".`);
//         }
//     })
//     .catch(error => console.error('Error:', error));
// }


// function deleteEmployee() {
//     const id = parseInt(prompt("Enter employee ID to delete:"));
//     ems.deleteEmployee(id);
// }


function searchEmployee() {
    document.getElementById('myForm').addEventListener('submit', function(event) {
        // Prevent the form from submitting
        event.preventDefault();
        const attribute = document.getElementById('attribute').value;
        const value = document.getElementById('value').value;

        // Send a GET request to the server with the selected attribute and value
        fetch(`http://localhost:5000/search-employees?attribute=${attribute}&value=${value}`)
            .then(response => response.json())
            .then(data => {
                displaySearchResults(data);
            })
            // .then(data => {
            //     console.log(data);
            //     if (data.length > 0) {
            //         console.log('Matching Employees:');
            //         data.forEach(employee => {
            //             console.log(employee);
            //         });
            //     } else {
            //         console.log(`No employees found with ${attribute} "${value}".`);
            //     }
            // })
            
            .catch(error => console.error('Error:', error));
    });
    

        

}





// function deleteEmployee() {
//     const id = parseInt(prompt("Enter employee ID to delete:"));

//     fetch(`http://localhost:5000/delete-employee/${id}`, {
//         method: 'DELETE'
//     })
//     .then(response => response.text())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));
// }


// function showEmployees() {
//     ems.displayEmployees();
// }

function deleteEmployee(id) {
    // const id = parseInt(document.getElementById('deleteEmployeeId').value);

    if (isNaN(id) || id <= 0) {
        alert("Please enter a valid employee ID.");
        return;
    }

    fetch(`http://localhost:5000/delete-employee/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        alert(data); // Display the server's response
    })
    .catch(error => console.error('Error:', error));
}


function showEmployees() {
    console.log('inside the function');
    fetch('http://localhost:5000')
    .then(response => response.json())
    .then(data => {
        displaySearchResults(data);
    })
    .then(data => {
        if (data.length === 0) {
            console.log("No employees found.");
        } else {
            console.log("Employee List:");
            data.forEach(employee => {
                console.log(employee);
            });
        }
    })
    .catch(error => console.error('Error:', error));
}


function displaySearchResults(data) {
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (!data || data.length === 0) {
        resultsDiv.innerHTML = '<p>No employees found.</p>';
        return;
    }

    // Create a table element
    const table = document.createElement('table');

    // Create table headers
    const headers = ['ID', 'Name', 'Age', 'Gender', 'Birthdate', 'Email', 'Department', 'Action'];
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    // Populate the table with data
    data.forEach(employee => {
        const row = document.createElement('tr');
        headers.forEach(header => {
            const key = header.replace(/ /g, '').toLowerCase(); // Convert header to lowercase and remove spaces
            const td = document.createElement('td');

            if (header === 'Action') {
                // Create action buttons
                const updateButton = document.createElement('button');
                updateButton.textContent = 'Update';
                updateButton.onclick = () => updateEmployee(employee.id); // Assign click handler
                
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.onclick = () => deleteEmployee(employee.id); // Assign click handler
                
                // Append buttons to the cell
                td.appendChild(updateButton);
                td.appendChild(deleteButton);
            } else {
                td.textContent = employee[key];
            }

            // td.textContent = employee[key];
            row.appendChild(td);
        });

        table.appendChild(row);
    });
    
    resultsDiv.appendChild(table);
}


// Example action functions
function updateEmployee(id) {
    console.log(`Edit employee with ID: ${id}`);
    // Add your edit logic here
}






document.addEventListener('DOMContentLoaded', function() {
    showEmployees();
});









// 'Contact No', 'Emergency Contact No', 'Blood Group', 'Present Address', 'Permanent Address',















// const id = parseInt(prompt("Enter employee ID to update:"));
    // const newData = {};

    // const name = prompt("Enter new name (leave blank to keep current name):");
    // if (name) newData.name = name;

    // const age = prompt("Enter new age (leave blank to keep current age):");
    // if (age) newData.age = parseInt(age);

    // const gender = prompt("Enter new gender (leave blank to keep current gender):");
    // if (gender) newData.gender = gender;

    // const birthdate = prompt("Enter new birthdate (leave blank to keep current birthdate):");
    // if (birthdate) newData.birthdate = birthdate;

    // const email = prompt("Enter new email (leave blank to keep current email):");
    // if (email) newData.email = email;

    // const contactNo = prompt("Enter new contact number (leave blank to keep current contact number):");
    // if (contactNo) newData.contactNo = contactNo;

    // const emergencyContactNo = prompt("Enter new emergency contact number (leave blank to keep current emergency contact number):");
    // if (emergencyContactNo) newData.emergencyContactNo = emergencyContactNo;

    // const bloodGroup = prompt("Enter new blood group (leave blank to keep current blood group):");
    // if (bloodGroup) newData.bloodGroup = bloodGroup;

    // const presentAddress = prompt("Enter new present address (leave blank to keep current present address):");
    // if (presentAddress) newData.presentAddress = presentAddress;

    // const permanentAddress = prompt("Enter new permanent address (leave blank to keep current permanent address):");
    // if (permanentAddress) newData.permanentAddress = permanentAddress;

    // const department = prompt("Enter new department (Admin, HR, Software Engineer, Sales Department) or leave blank to keep current department:");
    // if (department) newData.department = department;