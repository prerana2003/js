let employees = {}
let empObj = {};
let filterobj = {}
let empNameArr = [];



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

    // ------------search & filter-------------------
    let searchFilterDiv = document.createElement("div")
    searchFilterDiv.setAttribute("id","search_filter_div")
    sidebardiv.appendChild(searchFilterDiv)

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

    // -------------employee list---------------
    let emplistdiv = document.createElement("div")
    emplistdiv.setAttribute("id","emp_list_div")
    sidebardiv.appendChild(emplistdiv)

    let list = document.createElement("ul")
    list.setAttribute("id","emp_list")
    emplistdiv.appendChild(list)

    let maincontentdiv = document.createElement("div")
    maincontentdiv.setAttribute("id","main_content_div")
    contentdiv.appendChild(maincontentdiv)

    createTable();


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
    cancelBtn.setAttribute("type","button")
    cancelBtn.setAttribute("id","cancel_btn")
    cancelBtn.textContent = "Cancel"
    cancelBtn.setAttribute("onclick","cancelform()")
    cancelBtn.addEventListener('click', function(){
        document.getElementById("form_div").remove()
        createTable();
    });
    addEmpForm.appendChild(cancelBtn)
}

function createTable(){
    let main = document.getElementById("main_content_div")

    let tableTitle = document.createElement("h2")
    tableTitle.textContent = "My Table"
    main.appendChild(tableTitle)

    let tbldiv = document.createElement("div")
    tbldiv.setAttribute("id","tblDiv")
    main.appendChild(tbldiv)

    let tbl = document.createElement("table")
    tbl.setAttribute("id","table")
    tbl.setAttribute("border", "1")
    tbldiv.appendChild(tbl)

    let tblhead = document.createElement("thead")
    tbl.appendChild(tblhead)

    let tblheadrow = document.createElement("tr")
    tblhead.appendChild(tblheadrow)

    var theadcell1 = document.createElement("td")
    tblhead.appendChild(theadcell1)
    var theadcelltext1 = document.createTextNode("Sr.No")
    theadcell1.appendChild(theadcelltext1)

    var theadcell2 = document.createElement("td")
    tblhead.appendChild(theadcell2)
    var theadcelltext2 = document.createTextNode("alphabet")
    theadcell2.appendChild(theadcelltext2)

    let tblbody = document.createElement("tbody")
    tblbody.setAttribute("id","tbl_body")
    tbl.appendChild(tblbody)

    let paginationDiv = document.createElement("div")
    paginationDiv.setAttribute("id","pagination_div")
    main.appendChild(paginationDiv)

    var dropdown = document.createElement("SELECT");
    dropdown.setAttribute("id", "mySelect");
    dropdown.addEventListener('change', function(){
        obj.itemsPerPage = parseInt(this.value,10)
        // alert(obj.itemsPerPage)
    })
    main.appendChild(dropdown);

    var ddopt1 = document.createElement("option");
    var ddopt1text = document.createTextNode("3");
    ddopt1.appendChild(ddopt1text);
    document.getElementById("mySelect").appendChild(ddopt1);

    var ddopt2 = document.createElement("option");
    var ddopt2text = document.createTextNode("4");
    ddopt2.appendChild(ddopt2text);
    document.getElementById("mySelect").appendChild(ddopt2);
    
    var ddopt3 = document.createElement("option");
    var ddopt3text = document.createTextNode("5");
    ddopt3.appendChild(ddopt3text);
    document.getElementById("mySelect").appendChild(ddopt3);

    init();
}


let obj = {
    arr : ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    itemsPerPage : 5,
    currentPage: 1
}

function displayArray(){
    // alert(obj.itemsPerPage)
    let startIndex = (obj.currentPage -1)*obj.itemsPerPage;
    let endIndex = startIndex + obj.itemsPerPage;
    let pageAlphabets = obj.arr.slice(startIndex,endIndex)

    let tblbody = document.querySelector("#tbl_body");
    tblbody.innerHTML = '';

    pageAlphabets.forEach((alphabet, index) => {
        const row = `<tr>
                    <td>${startIndex + index + 1}</td>
                    <td>${alphabet}</td>
                    </tr>`;
        tblbody.innerHTML += row
    })
}

function createPaginationLinks(){
    

    let totalPages = Math.ceil(obj.arr.length / obj.itemsPerPage);
    let paginationDiv = document.querySelector("#pagination_div");
    paginationDiv.innerHTML = '';

    for(let i=1;i<=totalPages;i++){
        const link = document.createElement("a");
        link.href = "#";
        link.textContent = i;

        link.addEventListener('click', () => {
            obj.currentPage = i;
            displayArray();
        })
        paginationDiv.appendChild(link);
    }
}

// function updateitemsperPage(value){
//     obj.itemsPerPage = parseInt(value,10)
//     alert(obj.itemsPerPage)
// }

function init(){
    // updateitemsperPage(value);
    displayArray();
    createPaginationLinks();
}




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

function searching(){
    let empList = document.getElementById("emp_list");
    var listItem = Array.from(empList.children)

    var new_list = [];
    let searchVal = document.getElementById("search_Inp").value

    if(searchVal.length<2 && new_list !== null){
        empList.innerHTML = ""
        alert("please enter minimum two characters")
        addInList();
    }
    else if(searchVal.length<2){
        alert("please enter minimum two characters")
    }
    else if(searchVal.length>2 && new_list === null){
        alert("No employee found")
        empList.innerHTML = ""
        addInList();
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
            new_list = [];
        }
        else{
            alert("employee not found")
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