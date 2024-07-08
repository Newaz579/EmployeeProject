import Employee from "../../Employee/employeeClass";


class Admin extends Employee{
    constructor(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, parmanentAddress, adminLevel){
        super(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, parmanentAddress);
        this.adminLevel = adminLevel;
    }
    getEmployee = () => {
        console.log(`name: ${this.name}`);
        console.log(`AdminLevel: ${this.adminLevel}`);
    }
}

export default Admin;