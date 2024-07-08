import Admin from "../Admin/AdminClass";
import ITeamlead from "../../interfaces/TeamLeadInterface.js";

class adminTeamLead extends Admin {
    constructor(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, parmanentAddress, adminLevel){
        super(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, parmanentAddress, adminLevel);

    }
    administrativeSupport = () => {
        console.log('Aministrative Support');
    }
    assignTask(){
        console.log('TeamLead assign a task');
    }
    reviewTask(){
        console.log('Task reviewed by Team Lead');
    }
    callmeeting(){
        console.log('Team Lead Call a Meeting');
    }

}

export default adminTeamLead