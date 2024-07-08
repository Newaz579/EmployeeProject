// Sales Department class extending Employee
class SalesDept extends Employee {
    constructor(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, permanentAddress) {
        super(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, permanentAddress, 'Sales Department');
    }
}
