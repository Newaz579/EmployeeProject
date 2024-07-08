// Software Engineer class extending Employee
class SoftwareEngineer extends Employee {
    constructor(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, permanentAddress) {
        super(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, permanentAddress, 'Software Engineer');
    }
}
