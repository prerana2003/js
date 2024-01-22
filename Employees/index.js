// renderUI
// searching
// sorting
// openForm
//-----Pagination------
//createTable
// displayArray

let employees = {}

// -------------------------Add Employee-------------------------------------

let empObj = {};
let num = 1;
const addEmp = () =>{
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
        addInList(employees);
        empObj.name = undefined
    }
    
    openForm();
}

console.log(employees)

function addInList(employees){
    let list = document.getElementById("emp_list")
    list.innerHTML = ''
    for(let x in employees){
        if(employees.hasOwnProperty(x)){
            const listItem = document.createElement("li")
            listItem.id = x
            let namelbl = document.createElement("label")
            namelbl.setAttribute("type","lable")
            namelbl.setAttribute("id","listItem_name")
            namelbl.textContent= employees[x].Name
            listItem.addEventListener("mouseover", function(){
                deleteobj.id = this.id
            })
            listItem.appendChild(namelbl)
            
            // --------------dropdown-------------------

            let dropDownDiv = document.createElement("div")
            dropDownDiv.setAttribute("id","drop_down_div")
            dropDownDiv.setAttribute("class","dropdown")
            listItem.appendChild(dropDownDiv)

            let menubtn = document.createElement("button")
            menubtn.setAttribute("id","menu_btn")
            menubtn.setAttribute("class","dropbtn")
            menubtn.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>'
            menubtn.setAttribute("onclick","myFunction()")
            dropDownDiv.appendChild(menubtn)

            let content_div = document.createElement("div")
            content_div.setAttribute("id","myDropdown")
            content_div.setAttribute("class","dropdown-content")
            dropDownDiv.appendChild(content_div)

            let deleteLink = document.createElement("a")
            deleteLink.setAttribute("href","#")
            deleteLink.addEventListener('click',deleteemp)
            deleteLink.innerHTML = "Delete"
            content_div.appendChild(deleteLink)

            let updateLink = document.createElement("a")
            updateLink.setAttribute("href","#")
            updateLink.addEventListener('click',updateemp)
            updateLink.innerHTML = "Update"
            content_div.appendChild(updateLink)

            let displayLink = document.createElement("a")
            displayLink.setAttribute("href","#")
            displayLink.innerHTML = "Display"
            content_div.appendChild(displayLink)

            list.appendChild(listItem)
        }
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}


// ---------------------------------Searching--------------------------------

let filterobj = {}
function searching(){
    var new_list = {};
    
    if(filterobj.searchinp.length>=2){
        for(let x in employees){
            let k=0;
            for(let j=0;j<employees[x].Name.length;j++){
                if(filterobj.searchinp[k] === employees[x].Name[j]){
                    k++;
                    if(k>=filterobj.searchinp.length){
                        new_list[x] = employees[x]
                        console.log(new_list)
                        break;
                    }
                }
                else{
                    break;
                }
            }
        }
        if(new_list !== null){
            addInList(new_list)
            new_list = {};
        }
        else{
            alert("employee not found")
            addInList(employees);
        }
    }
    else{
        alert("please enter minimum two characters")
        addInList(employees);
    }
}

// --------------------------------Sorting------------------------------------

function sorting(clicked_ID){
    let id = clicked_ID;

    document.querySelectorAll('.sortbtn').forEach(function(btn){
        btn.style.backgroundColor = 'initial'
    })

    let listItems = [];
    for(let x in employees){
        listItems.push(employees[x])
    }
    console.log(listItems)    

    if(id === filterobj['ascID']){
        listItems.sort(function(a,b){
            return a.Name.localeCompare(b.Name);
        });
    }
    else{
        listItems.sort(function(a,b){
            return b.Name.localeCompare(a.Name);
        });
    }

    let sorted_emp_list = {}
    for(let x in listItems){
        sorted_emp_list[x] = listItems[x]
        addInList(sorted_emp_list)
    }
}

let obj_ID = {}

function deleteemp(){
    for(let x in employees){
        if(x === obj_ID.id){
            delete employees[x];
            addInList(employees);
            break;
        }
    }
}

function updateemp(){
    openForm();
    for(let x in employees){
        if(x === obj_ID.id){
            
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
        filterobj['ascID'] = this.id
        sorting(this.id);
        ascBtn.style.backgroundColor = "blue"
    })
    filterdiv.appendChild(ascBtn)

    let dscBtn = document.createElement("button")
    dscBtn.setAttribute("id","dsc_btn")
    
    dscBtn.setAttribute("class","sortbtn")
    dscBtn.innerHTML = '<i class="fa-solid fa-sort-down"></i>'
    dscBtn.addEventListener('click', function(){
        filterobj['dscID'] = this.id
        sorting(this.id);
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
    inpSalary.setAttribute("type","number")
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
    submitBtn.setAttribute("onclick","addEmp()")
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

// ---------------------------Pagination-----------------------------------------

let obj = {
    arr : ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    itemsPerPage : 3,
    currentPage: 1,
    prevItemsPerPage: 3
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
    var theadcelltext1 = document.createTextNode("Sr No")
    theadcell1.appendChild(theadcelltext1)

    var theadcell2 = document.createElement("td")
    tblhead.appendChild(theadcell2)
    var theadcelltext2 = document.createTextNode("Alphabet")
    theadcell2.appendChild(theadcelltext2)

    let tblbody = document.createElement("tbody")
    tblbody.setAttribute("id","tbl_body")
    tbl.appendChild(tblbody)

    let mainpaginationdiv = document.createElement("div")
    mainpaginationdiv.setAttribute("id","main_pagination_div")
    main.appendChild(mainpaginationdiv)

    var dropdownlbl = document.createElement("label")
    dropdownlbl.setAttribute("id", "drop_down_lbl")
    dropdownlbl.textContent = "Items Per Page: "
    mainpaginationdiv.appendChild(dropdownlbl)

    var dropdown = document.createElement("SELECT");
    dropdown.setAttribute("id", "mySelect");
    dropdown.addEventListener('change', function(){
        obj.prevItemsPerPage = obj.itemsPerPage
        obj.itemsPerPage = parseInt(this.value,10)
        updatepagination();
    })
    mainpaginationdiv.appendChild(dropdown);

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

    const displayrecordsbypages = document.createElement("h4")
    displayrecordsbypages.setAttribute("id","display_records_by_pages")
    mainpaginationdiv.appendChild(displayrecordsbypages)

    let prevbtn = document.createElement("button")
    prevbtn.setAttribute("id","prev_btn")
    prevbtn.setAttribute("type", "button")
    prevbtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>'
    prevbtn.addEventListener('click', function(){
        obj.currentPage = Math.max(1, obj.currentPage - 1);
        displayArray();
    })
    mainpaginationdiv.appendChild(prevbtn)
    
    let nextbtn = document.createElement("button")
    nextbtn.setAttribute("id","next_btn")
    nextbtn.setAttribute("type", "button")
    nextbtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>'
    nextbtn.addEventListener('click', function(){
        obj.currentPage += 1;
        displayArray();
    })
    mainpaginationdiv.appendChild(nextbtn)

    displayArray();
}

function displayArray(){
    let startIndex = Math.min((obj.currentPage - 1)*obj.itemsPerPage, obj.arr.length-1);
    let endIndex = Math.min(startIndex + obj.itemsPerPage, obj.arr.length);
    let pageAlphabets = obj.arr.slice(startIndex,endIndex)
    let totalPages = Math.ceil(obj.arr.length / obj.itemsPerPage);
    obj.totalPages = totalPages;

    let tblbody = document.querySelector("#tbl_body");
    tblbody.innerHTML = '';

    pageAlphabets.forEach((alphabet, index) => {
        const row = `<tr>
                    <td>${startIndex + index + 1}</td>
                    <td>${alphabet}</td>
                    </tr>`;
        tblbody.innerHTML += row
    })

    let nextbtn = document.getElementById("next_btn")
    let prevbtn = document.getElementById("prev_btn")

    prevbtn.disabled = obj.currentPage === 1;
    nextbtn.disabled = obj.currentPage * obj.itemsPerPage >= obj.arr.length;

    let displayrecordsbypages = document.querySelector("#display_records_by_pages")
    displayrecordsbypages.innerHTML = '';
    displayrecordsbypages.innerHTML = (startIndex + 1) + " - " + endIndex + " to " + obj.arr.length
}

function updatepagination(){
    let visibleItemIndex = ((obj.currentPage - 1) * obj.prevItemsPerPage) + 1;
    obj.currentPage = Math.ceil(visibleItemIndex / obj.itemsPerPage);
    displayArray();
}

