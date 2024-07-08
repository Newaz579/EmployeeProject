import Employee from "../../Employee/employeeClass";

class Engineer extends Employee{
    constructor(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, parmanentAddress, useLanguage, teamName, projectName){
        super(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, parmanentAddress);
        this.useLanguage = useLanguage;
        this.teamName = teamName;
        this.projectName = projectName;
    }
    
    updateEngineerEmployee = () => {

    }
    getSingleEngineerEmployee = () => {

    }
    getEngineerEmployee = () => {
        console.log(this.id, this.name);
    }
    deteEngineerEmployee = () => {

    }

}



export default Engineer;