let employees = {}
let empObj = {};
let filterobj = {}
let empNameArr = [];


let num = 1;
const addEmp = (empObj) =>{
    if(empObj.name === undefined){
        alert("please enter information")
    }
    else{
        let Emp_id = "Emp" + num;
        employees[Emp_id] = {
            ID: Emp_id,
            Name: empObj.name,
            Salary: empObj.salary,
            Designation: empObj.designation,
            Department_ID: empObj.deptid
        }
        num++;
        let list = document.getElementById("emp_list")
        const listItem = document.createElement("li")
        listItem.textContent= employees[Emp_id].Name
        list.appendChild(listItem)
        empObj.name = undefined
    }
    
    openForm();
}

console.log(employees)

function addInList(){
    let list = document.getElementById("emp_list")
    for(let x in employees){
        if(employees.hasOwnProperty(x)){
            const listItem = document.createElement("li")
            listItem.textContent= employees[x].Name
            list.appendChild(listItem)
        }
    }
}


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

    let searchFilterDiv = document.createElement("div")
    searchFilterDiv.setAttribute("id","search_filter_div")
    sidebardiv.appendChild(searchFilterDiv)

    // ------------searchByName-------------------
    let searchdiv = document.createElement("div")
    searchdiv.setAttribute("id","search_div")
    searchFilterDiv.appendChild(searchdiv)

    let searchInp = document.createElement("input")
    searchInp.setAttribute("id","search_Inp")
    searchInp.placeholder = "Enter name"
    searchInp.addEventListener('input',function(){
        filterobj.searchinp = searchInp.value
    })
    searchdiv.appendChild(searchInp)

    let searchbtn = document.createElement("button")
    searchbtn.setAttribute("id","search_btn")
    searchbtn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
    searchbtn.addEventListener('click',searching)
    searchdiv.appendChild(searchbtn)
    
    let filterdiv = document.createElement("div")
    filterdiv.setAttribute("id","filter_div")
    searchFilterDiv.appendChild(filterdiv)

    let ascBtn = document.createElement("button")
    ascBtn.setAttribute("id","asc_btn")
    ascBtn.setAttribute("class","sortbtn")
    ascBtn.innerHTML = '<i class="fa-solid fa-sort-up"></i>'
    ascBtn.addEventListener('click', function(){
        ascendingSort();
        ascBtn.style.backgroundColor = "blue"
        // ascBtn.style.borderWidth = "3px"
        
    })
    filterdiv.appendChild(ascBtn)

    let dscBtn = document.createElement("button")
    dscBtn.setAttribute("id","dsc_btn")
    dscBtn.setAttribute("class","sortbtn")
    dscBtn.innerHTML = '<i class="fa-solid fa-sort-down"></i>'
    dscBtn.addEventListener('click', function(){
        decendingSort();
        dscBtn.style.backgroundColor = "blue"
    })
    filterdiv.appendChild(dscBtn)

    let hrline = document.createElement("hr")
    sidebardiv.appendChild(hrline)

    let list = document.createElement("ul")
    list.setAttribute("id","emp_list")
    sidebardiv.appendChild(list)

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
    main.innerHTML= "";

    let formdiv = document.createElement("div")
    formdiv.setAttribute("id","form_div")
    main.appendChild(formdiv)

    let title = document.createElement("h1")
    title.textContent = "Add Employee"
    formdiv.appendChild(title)

    let addEmpForm = document.createElement("form")
    addEmpForm.setAttribute("method","post")
    addEmpForm.setAttribute("id","add_emp_form")
    formdiv.appendChild(addEmpForm)

    let inpNameDiv = document.createElement("div")
    inpNameDiv.setAttribute("id","inp_Name_Div")
    addEmpForm.appendChild(inpNameDiv)

    let entName = document.createElement("label")
    entName.setAttribute("type","label")
    entName.setAttribute("id","enter_name")
    entName.textContent = "Name*: "
    inpNameDiv.appendChild(entName)

    let inpName = document.createElement("input")
    inpName.setAttribute("type","text")
    inpName.setAttribute("placeholder","Enter Name")
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
    inpSalary.setAttribute("placeholder","Enter Salary")
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
    inpDesignation.setAttribute("placeholder","Enter Designation")
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
    inpDeptID.setAttribute("placeholder","Enter Department ID")
    inpDeptID.setAttribute("id","inp_DeptID")
    inpDeptID.addEventListener('input',function(event){
        if(event.target.id === "inp_DeptID"){
            empObj.deptid = event.target.value
        }
    })
    inpDeptDiv.appendChild(inpDeptID)

    let error = document.createElement("p")
    error.setAttribute("id","displayerror")
    addEmpForm.appendChild(error)

    let sub_res_div = document.createElement("div")
    sub_res_div.setAttribute("id","sub_res_div")
    addEmpForm.appendChild(sub_res_div)

    let submitBtn = document.createElement("button")
    submitBtn.setAttribute("id","submit_btn")
    submitBtn.textContent = "Submit"
    submitBtn.setAttribute("onclick","addEmp(empObj)")
    sub_res_div.appendChild(submitBtn)

    let resetBtn = document.createElement("button")
    resetBtn.setAttribute("id","reset_btn")
    resetBtn.textContent = "Reset"
    resetBtn.addEventListener('click', openForm)
    sub_res_div.appendChild(resetBtn)

    let cancelBtn = document.createElement("button")
    cancelBtn.setAttribute("id","cancel_btn")
    cancelBtn.textContent = "Cancel"
    cancelBtn.addEventListener('click', function(){
        main.innerHTML= "";
    });
    addEmpForm.appendChild(cancelBtn)
}



function searching(){
    let empList = document.getElementById("emp_list");
    var listItem = Array.from(empList.children)

    var new_list = [];
    let searchVal = document.getElementById("search_Inp").value
    if(searchVal.length<2){
        alert("please enter minimum two characters")
        addInList();
        // listItem.forEach(function(item){
        //     empList.appendChild(item);
        // })
    }
    else{
        for(let i=0;i<listItem.length;i++){
            let k=0;
            for(let j=0;j<listItem[i].textContent.length;j++){
                if(searchVal[k] === listItem[i].textContent[j]){
                    k++;
                    if(k>=searchVal.length){
                        new_list.push(listItem[i])
                        break;
                    }
                }
                else{
                    break;
                }
            }
        }
        if(new_list !== null){
            empList.innerHTML = "";
            new_list.forEach(function(item){
                empList.appendChild(item);
            })
        }
        else{
            alert("No such employee found")
        }
    }
}

function ascendingSort(){
    document.querySelectorAll('.sortbtn').forEach(function(btn){
        btn.style.backgroundColor = 'initial'
    })

    let empList = document.getElementById("emp_list")

    var listItems = Array.from(empList.children)

    listItems.sort(function(a,b){
        return a.textContent.localeCompare(b.textContent);
    });

    empList.innerHTML = "";

    listItems.forEach(function(item){
        empList.appendChild(item)
    })
}

function decendingSort(){
    document.querySelectorAll('.sortbtn').forEach(function(btn){
        btn.style.backgroundColor = 'initial'
    })

    let empList = document.getElementById("emp_list")

    var listItems = Array.from(empList.children)

    listItems.sort(function(a,b){
        return b.textContent.localeCompare(a.textContent);
    });

    empList.innerHTML = "";

    listItems.forEach(function(item){
        empList.appendChild(item)
    })
}