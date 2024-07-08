// Initialize the Employee Management System
const ems = new EmployeeManagementSystem();

function addEmployee() {
    const id = parseInt(prompt("Enter employee ID:"));
    const name = prompt("Enter employee name:");
    const age = parseInt(prompt("Enter employee age:"));
    const gender = prompt("Enter employee gender:");
    const birthdate = prompt("Enter employee birthdate:");
    const email = prompt("Enter employee email:");
    const contactNo = prompt("Enter employee contact number:");
    const emergencyContactNo = prompt("Enter employee emergency contact number:");
    const bloodGroup = prompt("Enter employee blood group:");
    const presentAddress = prompt("Enter employee present address:");
    const permanentAddress = prompt("Enter employee permanent address:");
    const department = prompt("Enter employee department (Admin, HR, Software Engineer, Sales Department):");

    let employee;
    switch (department) {
        case 'Admin':
            employee = new Admin(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, permanentAddress);
            break;
        case 'HR':
            employee = new HR(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, permanentAddress);
            break;
        case 'Software Engineer':
            employee = new SoftwareEngineer(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, permanentAddress);
            break;
        case 'Sales Department':
            employee = new SalesDept(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, permanentAddress);
            break;
        default:
            console.log("Invalid department.");
            return;
    }

    ems.addEmployee(employee);
}

function updateEmployee() {
    const id = parseInt(prompt("Enter employee ID to update:"));
    const newData = {};

    const name = prompt("Enter new name (leave blank to keep current name):");
    if (name) newData.name = name;

    const age = prompt("Enter new age (leave blank to keep current age):");
    if (age) newData.age = parseInt(age);

    const gender = prompt("Enter new gender (leave blank to keep current gender):");
    if (gender) newData.gender = gender;

    const birthdate = prompt("Enter new birthdate (leave blank to keep current birthdate):");
    if (birthdate) newData.birthdate = birthdate;

    const email = prompt("Enter new email (leave blank to keep current email):");
    if (email) newData.email = email;

    const contactNo = prompt("Enter new contact number (leave blank to keep current contact number):");
    if (contactNo) newData.contactNo = contactNo;

    const emergencyContactNo = prompt("Enter new emergency contact number (leave blank to keep current emergency contact number):");
    if (emergencyContactNo) newData.emergencyContactNo = emergencyContactNo;

    const bloodGroup = prompt("Enter new blood group (leave blank to keep current blood group):");
    if (bloodGroup) newData.bloodGroup = bloodGroup;

    const presentAddress = prompt("Enter new present address (leave blank to keep current present address):");
    if (presentAddress) newData.presentAddress = presentAddress;

    const permanentAddress = prompt("Enter new permanent address (leave blank to keep current permanent address):");
    if (permanentAddress) newData.permanentAddress = permanentAddress;

    const department = prompt("Enter new department (Admin, HR, Software Engineer, Sales Department) or leave blank to keep current department:");
    if (department) newData.department = department;

    ems.updateEmployee(id, newData);
}

function searchEmployee() {
    const attribute = prompt("Enter attribute to search by (id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, permanentAddress, department):").toLowerCase();
    const value = prompt(`Enter value for ${attribute}:`);

    const results = ems.searchEmployee(attribute, value);

    if (results.length > 0) {
        const updateId = parseInt(prompt("Enter the ID of the employee you want to update from the search results:"));
        const newData = {};

        const name = prompt("Enter new name (leave blank to keep current name):");
        if (name) newData.name = name;

        const age = prompt("Enter new age (leave blank to keep current age):");
        if (age) newData.age = parseInt(age);

        const gender = prompt("Enter new gender (leave blank to keep current gender):");
        if (gender) newData.gender = gender;

        const birthdate = prompt("Enter new birthdate (leave blank to keep current birthdate):");
        if (birthdate) newData.birthdate = birthdate;

        const email = prompt("Enter new email (leave blank to keep current email):");
        if (email) newData.email = email;

        const contactNo = prompt("Enter new contact number (leave blank to keep current contact number):");
        if (contactNo) newData.contactNo = contactNo;

        const emergencyContactNo = prompt("Enter new emergency contact number (leave blank to keep current emergency contact number):");
        if (emergencyContactNo) newData.emergencyContactNo = emergencyContactNo;

        const bloodGroup = prompt("Enter new blood group (leave blank to keep current blood group):");
        if (bloodGroup) newData.bloodGroup = bloodGroup;

        const presentAddress = prompt("Enter new present address (leave blank to keep current present address):");
        if (presentAddress) newData.presentAddress = presentAddress;

        const permanentAddress = prompt("Enter new permanent address (leave blank to keep current permanent address):");
        if (permanentAddress) newData.permanentAddress = permanentAddress;

        const department = prompt("Enter new department (Admin, HR, Software Engineer, Sales Department) or leave blank to keep current department:");
        if (department) newData.department = department;

        ems.updateEmployee(updateId, newData);
    }
}

function showEmployees() {
    ems.displayEmployees();
}
