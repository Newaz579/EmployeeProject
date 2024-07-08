import Employee from "../../Employee/employeeClass";

class HR extends Employee{
    constructor(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, parmanentAddress , hiringManPower, trainingAndDevelopment, HRplaning){
        super(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, parmanentAddress );
        this.hiringManPower = hiringManPower;
        this.trainingAndDevelopment = trainingAndDevelopment;
        this.HRplaning = HRplaning;
    }
}

export default HR;