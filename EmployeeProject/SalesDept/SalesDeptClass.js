import Employee from "../Employee/employeeClass";

class SalesDept extends Employee{
    constructor(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, parmanentAddress, income, productShow ){
        super(id, name, age, gender, birthdate, email, contactNo, emergencyContactNo, bloodGroup, presentAddress, parmanentAddress );
        this.income = income;
        this.productShow = productShow;
    }
    createSales = () => {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`gender: ${this.gender}`)
    }
}

export default SalesDept;