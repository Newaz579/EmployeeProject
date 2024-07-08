import HR from "../HR/HRClass";

class HRTeamLead extends HR{
    constructor(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, parmanentAddress , hiringManPower, trainingAndDevelopment, HRplaning){
        super(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, parmanentAddress , hiringManPower, trainingAndDevelopment, HRplaning);

    }
    assignTast(task){
        console.log(`TeamLead Assign a task: ${task}`)
    }
}