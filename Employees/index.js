let employees = {}
let empObj = {};
//     name: "tena",
//     salary: 25425,
//     designation: "comp",
//     deptid: "D1"
// }

let num = 1;
const addEmp = (empObj) =>{
    let Emp_id = "Emp" + num;
        employees[Emp_id] = {
            ID: Emp_id,
            Name: empObj.name,
            Salary: empObj.salary,
            Designation: empObj.designation,
            Department_ID: empObj.deptid
        }
    
    let list = document.getElementById("emp_list")
        for(let x in employees){
            if(employees.hasOwnProperty(x)){
                const listItem = document.createElement("li")
                listItem.textContent= employees[x].Name
                list.appendChild(listItem)
            }
        }
    // return "Employee Successfully created";
}



// addEmp(empObj)

// addEmp("Teena",30000,"Soft. Dev","D2")
// addEmp("Nita",90000,"Manager","D1")
// addEmp("Nita",70000,"Project Manager","D1")
// addEmp("Neela",40000,"HR","D2")
// addEmp("Minu",80000,"DevOps","D3")
// addEmp("Sita",30000,"HR","D2")
// addEmp("Rita",30000,"HR","D2")


const renderUI = () =>{
    let main = document.getElementById("root")
    main.innerHTML=""

    let header = document.createElement("header")
    main.appendChild(header)

    let navdiv = document.createElement("div")
    navdiv.setAttribute("id","nav_div")
    header.appendChild(navdiv)

    let navbar = document.createElement("nav")
    navbar.setAttribute("id","nav_bar")
    navdiv.appendChild(navbar)

    let logo = document.createElement("img")
    logo.setAttribute("id","logo_img")
    logo.setAttribute("src","logo.jpg")
    navbar.appendChild(logo)

    let addEmp = document.createElement("button")
    addEmp.setAttribute("type","button")
    addEmp.setAttribute("id","add_emp_btn")
    addEmp.textContent = "Add Employee"
    addEmp.addEventListener('click', openForm)
    navbar.appendChild(addEmp)

    let contentdiv = document.createElement("div")
    contentdiv.setAttribute("id","content_div")
    main.appendChild(contentdiv)

    let sidebardiv = document.createElement("div")
    sidebardiv.setAttribute("id","side_bar_div")
    contentdiv.appendChild(sidebardiv)


    let list = document.createElement("ul")
    list.setAttribute("id","emp_list")
    sidebardiv.appendChild(list)

    // for(let x in employees){
    //     if(employees.hasOwnProperty(x)){
    //         const listItem = document.createElement("li")
    //         listItem.textContent= employees[x].Name
    //         list.appendChild(listItem)
    //     }
    // }

    let maincontentdiv = document.createElement("div")
    maincontentdiv.setAttribute("id","main_content_div")
    contentdiv.appendChild(maincontentdiv)

    let foot = document.createElement("footer")
    main.appendChild(foot)

    let para = document.createElement("p")
    para.setAttribute("id","foot_para")
    para.innerHTML = "AYS Software Solution"
    foot.appendChild(para)
    
}

const openForm = () =>{

    let main = document.getElementById("main_content_div")

    let title = document.createElement("h1")
    title.textContent = "Add Employee"
    main.appendChild(title)

    let addEmpForm = document.createElement("form")
    addEmpForm.setAttribute("method","post")
    addEmpForm.setAttribute("id","add_emp_form")
    main.appendChild(addEmpForm)

    let inpNameDiv = document.createElement("div")
    inpNameDiv.setAttribute("id","inp_Name_Div")
    addEmpForm.appendChild(inpNameDiv)

    let entName = document.createElement("label")
    entName.setAttribute("type","label")
    entName.setAttribute("id","enter_name")
    entName.textContent = "Name: "
    inpNameDiv.appendChild(entName)

    let inpName = document.createElement("input")
    inpName.setAttribute("type","text")
    inpName.setAttribute("name","name")
    inpName.setAttribute("id","inp_Name")
    inpName.addEventListener('input',function(event){
        if(event.target.id === "inp_Name"){
            empObj.name = event.target.value
        }
    })
    inpNameDiv.appendChild(inpName)

    let inpSalaryDiv = document.createElement("div")
    inpSalaryDiv.setAttribute("id","inp_Salary_Div")
    addEmpForm.appendChild(inpSalaryDiv)

    let entSalary = document.createElement("label")
    entSalary.setAttribute("type","label")
    entSalary.setAttribute("id","enter_Salary")
    entSalary.textContent = "Salary: "
    inpSalaryDiv.appendChild(entSalary)

    let inpSalary = document.createElement("input")
    inpSalary.setAttribute("type","text")
    inpSalary.setAttribute("name","salary")
    inpSalary.setAttribute("id","inp_Salary")
    inpSalary.addEventListener('click',function(event){
        if(event.target.id === "inp_Salary"){
            empObj.salary = event.target.value
        }
    })
    inpSalaryDiv.appendChild(inpSalary)

    let inpDesgDiv = document.createElement("div")
    inpDesgDiv.setAttribute("id","inp_desg_Div")
    addEmpForm.appendChild(inpDesgDiv)

    let entDesignation = document.createElement("label")
    entDesignation.setAttribute("type","label")
    entDesignation.setAttribute("id","enter_Designation")
    entDesignation.textContent = "Designation: "
    inpDesgDiv.appendChild(entDesignation)

    let inpDesignation = document.createElement("input")
    inpDesignation.setAttribute("type","text")
    inpDesignation.setAttribute("name","designation")
    inpDesignation.setAttribute("id","inp_Designation")
    inpDesignation.addEventListener('input',function(event){
        if(event.target.id === "inp_Designation"){
            empObj.designation = event.target.value
        }
    })
    inpDesgDiv.appendChild(inpDesignation)

    let inpDeptDiv = document.createElement("div")
    inpDeptDiv.setAttribute("id","inp_dept_Div")
    addEmpForm.appendChild(inpDeptDiv)

    let entDeptID = document.createElement("label")
    entDeptID.setAttribute("type","label")
    entDeptID.setAttribute("id","enter_deptID")
    entDeptID.textContent = "Department ID: "
    inpDeptDiv.appendChild(entDeptID)

    let inpDeptID = document.createElement("input")
    inpDeptID.setAttribute("type","text")
    inpDeptID.setAttribute("name","deptID")
    inpDeptID.setAttribute("id","inp_DeptID")
    inpDeptID.addEventListener('input',function(event){
        if(event.target.id === "inp_DeptID"){
            empObj.deptid = event.target.value
        }
    })
    inpDeptDiv.appendChild(inpDeptID)

    let sub_res_div = document.createElement("div")
    sub_res_div.setAttribute("id","sub_res_div")
    addEmpForm.appendChild(sub_res_div)

    let submitBtn = document.createElement("button")
    submitBtn.setAttribute("id","submit_btn")
    submitBtn.textContent = "Submit"
    submitBtn.setAttribute("onclick","addEmp(empObj)")
    // submitBtn.addEventListener('click',renderUI)
    // submitBtn.addEventListener('click',function(){
    //     addEmp(empObj);
    //     // submit(employees);
    // })
    // submitBtn.setAttribute("onclick")
    sub_res_div.appendChild(submitBtn)

    let resetBtn = document.createElement("button")
    resetBtn.setAttribute("id","reset_btn")
    resetBtn.textContent = "Reset"
    sub_res_div.appendChild(resetBtn)

    let cancelBtn = document.createElement("button")
    cancelBtn.setAttribute("id","cancel_btn")
    cancelBtn.textContent = "Cancel"
    cancelBtn.addEventListener('click', renderUI);
    addEmpForm.appendChild(cancelBtn)
}



// console.log(employees)
// function submit(employees){
//     addEmp(empObj)
//     const lst = document.getElementById("emp_list")
//     // alert(employees[emp1].Name)
//     for(let x in employees){
//         if(employees.hasOwnProperty(x)){
//             const listItem = document.createElement("li")
//             listItem.textContent= employees[x].Name
//             lst.appendChild(listItem)
//         }
//     }
//     // renderUI();
// }