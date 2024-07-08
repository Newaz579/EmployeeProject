import Engineer from "../Engineer/EngineerClass";
import ITeamlead from "../../interfaces/TeamLeadInterface";

class EngineerTeamLead extends Engineer{
    constructor(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, parmanentAddress, useLanguage, teamName, projectName){
        super(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, parmanentAddress, useLanguage, teamName, projectName);

    }
    
    assignTask(){
        console.log('Engineer TeamLead assign a task');
    }
    reviewTask(){
        console.log('Engineer Team Lead Task reviewed');
    }
    callmeeting(){
        console.log('Engineer Team Lead Call a Meeting');
    }

}