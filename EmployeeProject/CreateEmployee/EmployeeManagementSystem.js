// Employee Management System
class EmployeeManagementSystem {
    constructor() {
        this.employees = [];
    }

    // Add a new employee
    addEmployee(employee) {
        this.employees.push(employee);
        // console.log(`Employee ${employee.name} added to ${employee.department} department.`);
        fetch('http://localhost:5000/add-employee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)
        })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }

    // Search for employees by attribute and value
    searchEmployee(attribute, value) {
        const matchingEmployees = this.employees.filter(emp => String(emp[attribute]).toLowerCase().includes(value.toLowerCase()));
        if (matchingEmployees.length > 0) {
            console.log(`Matching Employees:`);
            matchingEmployees.forEach(employee => {
                console.log(`ID: ${employee.id}, Name: ${employee.name}, Age: ${employee.age}, Gender: ${employee.gender}, Birthdate: ${employee.birthdate}, Email: ${employee.email}, Contact No: ${employee.contactNo}, Emergency Contact No: ${employee.emergencyContactNo}, Blood Group: ${employee.bloodGroup}, Present Address: ${employee.presentAddress}, Permanent Address: ${employee.permanentAddress}, Department: ${employee.department}`);
            });
        } else {
            console.log(`No employees found with ${attribute} "${value}".`);
        }
        return matchingEmployees;
    }

    // Update an employee's details
    updateEmployee(id, newData) {
        const employee = this.searchEmployeeById(id);
        if (employee) {
            Object.assign(employee, newData);
            console.log(`Employee ${id} updated to: ID: ${employee.id}, Name: ${employee.name}, Age: ${employee.age}, Gender: ${employee.gender}, Birthdate: ${employee.birthdate}, Email: ${employee.email}, Contact No: ${employee.contactNo}, Emergency Contact No: ${employee.emergencyContactNo}, Blood Group: ${employee.bloodGroup}, Present Address: ${employee.presentAddress}, Permanent Address: ${employee.permanentAddress}, Department: ${employee.department}`);
        } else {
            console.log(`Employee with ID ${id} not found.`);
        }

        // fetch(`http://localhost:5000/update-employee/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(newData)
        // })
        // .then(response => response.text())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error:', error));
    }

    // Helper method to search employee by ID
    searchEmployeeById(id) {
        return this.employees.find(emp => emp.id === id);
    }

    //delete employee
    deleteEmployee(id) {
        const index = this.employees.findIndex(emp => emp.id === id);
        if (index !== -1) {
            const deletedEmployee = this.employees.splice(index, 1)[0];
            console.log(`Employee ${deletedEmployee.name} (ID: ${id}) deleted.`);
        } else {
            console.log(`Employee with ID ${id} not found.`);
        }
    }

    // Display employees
    displayEmployees() {
        if (this.employees.length === 0) {
            console.log("No employees found.");
        } else {
            console.log("Employee List:");
            this.employees.forEach(employee => {
                console.log(`ID: ${employee.id}, Name: ${employee.name}, Age: ${employee.age}, Gender: ${employee.gender}, Birthdate: ${employee.birthdate}, Email: ${employee.email}, Contact No: ${employee.contactNo}, Emergency Contact No: ${employee.emergencyContactNo}, Blood Group: ${employee.bloodGroup}, Present Address: ${employee.presentAddress}, Permanent Address: ${employee.permanentAddress}, Department: ${employee.department}`);
            });
        }
    }
}
