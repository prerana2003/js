const dataStatus = {};

const renderUI = () =>{
    let x = document.getElementById("root")
    x.innerHTML = ""
    

    let contentdiv = document.createElement("div")
    contentdiv.setAttribute("id","content_div")
    x.appendChild(contentdiv)

    // -----------color----------------------
    let colordiv = document.createElement("div")
    colordiv.setAttribute("id","color_div")
    contentdiv.appendChild(colordiv)

    let lable = document.createElement("label")
    lable.setAttribute("id","color_lbl")
    lable.textContent = "Select Color"
    colordiv.appendChild(lable)

    let colors = document.createElement("div")
    colors.setAttribute("id","colors")
    colordiv.appendChild(colors)

    // ------------yellowbtn-----------------

    let yellowbtn = document.createElement("button")
    yellowbtn.setAttribute("type","submit")
    yellowbtn.setAttribute("class","color_btn")
    yellowbtn.setAttribute("id","yellow_btn")
    yellowbtn.setAttribute("onclick", "updateValue(this.id,dataStatus)")
    colors.appendChild(yellowbtn)

    // ----------redbtn----------------------

    let redbtn = document.createElement("button")
    redbtn.setAttribute("type","submit")
    redbtn.setAttribute("class","color_btn")
    redbtn.setAttribute("id","red_btn")
    redbtn.setAttribute("onclick", "updateValue(this.id,dataStatus)")
    colors.appendChild(redbtn)


    // ----------bluebtn----------------------
    let bluebtn = document.createElement("button")
    bluebtn.setAttribute("type","submit")
    bluebtn.setAttribute("class","color_btn")
    bluebtn.setAttribute("id","blue_btn")
    bluebtn.setAttribute("onclick", "updateValue(this.id,dataStatus)")
    colors.appendChild(bluebtn)
    


    // -----------enter value------------------
    let formdiv = document.createElement("div")
    formdiv.setAttribute("id","form_div")
    contentdiv.appendChild(formdiv)

    let entany = document.createElement("label")
    entany.setAttribute("id", "entAny_lbl")
    entany.textContent = "Enter anything: "
    formdiv.appendChild(entany)

    let input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("id","inp_No")
    document.addEventListener('input',function(event){
        if(event.target.id === "inp_No"){
            dataStatus.text = event.target.value;
        }
    })
    formdiv.appendChild(input)

    let submit = document.createElement('button');
    submit.setAttribute("type", "submit")
    submit.setAttribute("id", "subBtn")
    submit.setAttribute("onclick", "display(dataStatus)")
    submit.textContent = "Submit"
    formdiv.appendChild(submit)

    let reset = document.createElement('button');
    reset.setAttribute("type", "reset")
    reset.setAttribute("id", "reset_Btn")
    reset.setAttribute("onclick","reset()")
    reset.addEventListener('click', renderUI);
    reset.textContent = "Reset"
    formdiv.appendChild(reset) 

    let error = document.createElement('p');
    error.setAttribute("id", "error")
    error.textContent = ""
    x.appendChild(error)
    

    let resultdiv = document.createElement("div")
    resultdiv.setAttribute("id","result_div")
    x.appendChild(resultdiv)

    let p = document.createElement('p');
    p.setAttribute("id", "resultStr")
    p.textContent = "Your Number is: "
    resultdiv.appendChild(p)

    let result = document.createElement('p');
    result.setAttribute("id", "myResult")
    p.appendChild(result)
}

function updateValue(clicked_ID, dataStatus){
    let id = clicked_ID

    let myele = document.getElementById(id);
    var stl = getComputedStyle(myele)
    dataStatus.color = stl['background-color'];

    document.querySelectorAll('.color_btn').forEach(function(btn){
        btn.style.borderWidth = 'initial'
    })

    myele.setAttribute("style","border-width: 5px");
    const res = document.getElementById("myResult")
    res.setAttribute("style",'color:'+dataStatus.color)
}

function display(dataStatus){
    const res = document.getElementById("myResult")
    res.setAttribute("style",'color:'+dataStatus.color)
    if(dataStatus.text == ""){
        document.getElementById("error").innerHTML = "Please enter text";
    }
    else{
        res.innerHTML = dataStatus.text
    }
}

function reset(){
    dataStatus.color = "green"
    dataStatus.text = ""
}