import Admin from "../AllAdmin/Admin/AdminClass.js";
import Engineer from "../AllEngineer/Engineer/EngineerClass.js";


let id = prompt('Give employee id');
let name = prompt('ABC');
let age = prompt(25);
let gender = prompt('male');
let birthdate = prompt('24-10-1998');
let mail = prompt('abc@mail.com');
let contactNo = prompt('124567890');
let emergencyContactNo = prompt('987654321');
let bloodGroup = prompt('o+');
let presentAddress = prompt('pd')
let parmanentAddress = prompt('pd');
let useLanguage = prompt('js');
let teamName = prompt('LC');
let projectName =prompt('LazyToFast'); 


//admin employee create
let adminEmployee = new Admin(1, 'ABC', 25, 'Male', '24-10-1998', 'abc@mail.com', '0987654321', '1234567890', 'O+', 'AddressPresent', 'AddressParmanet', 'Admin');
adminEmployee.getEmployee();

//Engineer Employee Create
let engineerEmployee = new Engineer(id, name, age, gender, birthdate, mail, contactNo, emergencyContactNo, bloodGroup, presentAddress, parmanentAddress, useLanguage, teamName, projectName);
engineerEmployee.getEngineerEmployee();