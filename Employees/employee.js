departments= {
    D1:{
        Id: "D1",
        Name: "Manager"
    },
    D2:{
        Id: "D2",
        Name: "HR"
    },
    D3:{
        Id: "D3",
        Name: "Engineer"
    }
};

employees = {};
let num = 1;
const addEmp = (name,salary,designation,deptID) =>{
    let Emp_id = "Emp" + num;
    if(employees[Emp_id] == undefined){
        employees[Emp_id] = {
            ID: Emp_id,
            Name: name,
            Salary: salary,
            Designation: designation,
            Department_ID: deptID
        }
    }
    num++;
    return "Employee Successfully created";
}

const deleteEmp = (Emp_id) =>{
    if(Emp_id in employees){
        delete employees[Emp_id];
        return "Employee is Successfully Deleted";
    }
    return "No such employee found. Please check employee ID."
}

obj={
    Salary: 60000,
    Designation: "Manager",
    Department_ID: "D1"
}
const updateEmp = (Emp_id, obj) =>{
    if(Emp_id in employees){
        employees[Emp_id] = {...employees[Emp_id], ...obj}
        return "Employee information is successfully updated"
    }
    return "No such employee found. Please check employee ID."
}

const avgSalary = () =>{
    let total = 0;
    for(let x in employees){
        total = total + employees[x].Salary;
    }
    let avg = total/(Object.keys(employees).length);
    return avg;
}

const numberOfEmployees = () =>{
    let noOfEmp = Object.keys(employees).length;

    return noOfEmp;
}

const deptWiseEmp = () =>{
    let GrpByDeptID = {};
    
    for(let x in departments){
        for(let y in employees){
            if(GrpByDeptID[x] === undefined){
                if(employees[y].Department_ID === x){
                    GrpByDeptID[x]= [employees[y]];
                }
            }
            else{
                if(employees[y].Department_ID === x){
                    GrpByDeptID[x].push(employees[y]);
                }
            }
        }
        
    }
    
    return GrpByDeptID;
}

const empWith_Sal_HigherThan_AvgSal = () =>{
    let grpBySal = {};
    let avg_salary = avgSalary();

    for(let x in departments){
        for(let y in employees){
            if(grpBySal[x] === undefined){
                if(employees[y].Department_ID === x && employees[y].Salary > avg_salary){
                    grpBySal[x]= [employees[y]];
                }
            }
            else{
                if(employees[y].Department_ID === x && employees[y].Salary>avg_salary){
                    grpBySal[x].push(employees[y]);
                }
            }
        }
    }

    return grpBySal;
}

addEmp("Meena",50000,"Software Engg.","D3")
addEmp("Teena",30000,"Soft. Dev","D2")
addEmp("Nita",90000,"Manager","D1")
addEmp("Nita",70000,"Project Manager","D1")
addEmp("Neela",40000,"HR","D2")
addEmp("Minu",80000,"DevOps","D3")
addEmp("Sita",30000,"HR","D2")

deleteEmp("Emp1")

updateEmp("Emp2", obj)

console.log("------------------Employees----------------------")
console.log(employees);
console.log("------------------Avg Salary----------------------")
console.log("avg salary: ", avgSalary())
console.log("----------------Number of Employees------------------")
console.log("avg salary: ", numberOfEmployees())
console.log("-----------------Department wise Employees------------------")
console.log(deptWiseEmp())
console.log("------Employees with higher salary than average salary------")
console.log(empWith_Sal_HigherThan_AvgSal())


