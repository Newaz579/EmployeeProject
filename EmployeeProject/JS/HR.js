// HR class extending Employee
class HR extends Employee {
    constructor(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, permanentAddress) {
        super(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, permanentAddress, 'HR');
    }
}
