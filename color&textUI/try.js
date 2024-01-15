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
    yellowbtn.setAttribute("onclick", "updateValue(this.id)")
    // yellowbtn.addEventListener('click', function() {
    //     yellowbtn.setAttribute("style","border-width:5px")
    //     document.getElementById("blue_btn").setAttribute("style","border-width:1px")
    //     document.getElementById("red_btn").setAttribute("style","border-width:1px")
    //     let x = document.getElementById("myResult")
    //     x.setAttribute("style","color: rgb(255, 217, 0)")

    // })
    colors.appendChild(yellowbtn)

    // ----------redbtn----------------------

    let redbtn = document.createElement("button")
    redbtn.setAttribute("type","submit")
    redbtn.setAttribute("class","color_btn")
    redbtn.setAttribute("id","red_btn")
    redbtn.setAttribute("onclick", "updateValue(this.id)")
    // redbtn.addEventListener('click', function() {
    //     redbtn.setAttribute("style","border-width:5px")
    //     document.getElementById("blue_btn").setAttribute("style","border-width:1px")
    //     document.getElementById("yellow_btn").setAttribute("style","border-width:1px")
    //     let x = document.getElementById("myResult")
    //     x.setAttribute("style","color: red")
    // })
    colors.appendChild(redbtn)


    // ----------bluebtn----------------------
    let bluebtn = document.createElement("button")
    bluebtn.setAttribute("type","submit")
    bluebtn.setAttribute("class","color_btn")
    bluebtn.setAttribute("id","blue_btn")
    bluebtn.setAttribute("onclick", "updateValue(this.id)")
    // if(dataStatus[id] === bluebtn.id){
        // bluebtn.setAttribute("onclick", "update(dataStatus)")
    // }
    // bluebtn.setAttribute("onclick", "update()")
    // bluebtn.addEventListener('click', function() {
    //     bluebtn.setAttribute("style","border-width:5px")
    //     document.getElementById("yellow_btn").setAttribute("style","border-width:1px")
    //     document.getElementById("red_btn").setAttribute("style","border-width:1px")
    //     let x = document.getElementById("myResult")
    //     x.setAttribute("style","color: blue")
    // })
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
    formdiv.appendChild(input)

    let submit = document.createElement('button');
    submit.setAttribute("type", "submit")
    submit.setAttribute("id", "subBtn")
    submit.setAttribute("onclick", "display()")
    submit.textContent = "Submit"
    formdiv.appendChild(submit)

    let reset = document.createElement('button');
    reset.setAttribute("type", "reset")
    reset.setAttribute("id", "reset_Btn")
    reset.addEventListener('click', resetbtn);
    reset.textContent = "Reset"
    formdiv.appendChild(reset) 

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


let dataStatus = {};

function updateValue(clicked_ID){
    let id = clicked_ID

    let myele = document.getElementById(id);
    var stl = getComputedStyle(myele)
    let y = stl['background-color']

    document.querySelectorAll('.color_btn').forEach(function(btn){
        btn.style.borderWidth = 'initial'
    })
    
    myele.setAttribute("style","border-width: 5px");
    const res = document.getElementById("myResult")
    res.setAttribute("style",'color:'+stl['background-color'])

    // dataStatus = {
    //     text: document.getElementById("inp_No").value,
    //     id_btn: id,
    //     color: y
    // }

    // let id1 = dataStatus[id_btn]
    // alert(id)
}

// function update(dataStatus){
//     if(dataStatus.hasOwnProperty(id_btn)){
//         let id = id_btn
//         let ele = document.getElementById(id)
//         ele.setAttribute("style","border-width: 5px");
//     }

//     let color = dataStatus.color
//     var id = id
//     let ele = document.getElementById(id)
//     ele.setAttribute("style","border-width: 5px");
//     const res = document.getElementById("myResult")
//     res.setAttribute("style",'color:'+color)
// }



function display() {
    const res = document.getElementById("myResult")
    let input = document.getElementById("inp_No").value;
    
    res.innerHTML = input
}

function resetbtn(){
    let input = document.getElementById("inp_No");
    input.value = ""
}  




