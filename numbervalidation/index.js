const initUI = () =>{
    let x = document.getElementById("root")

    let entNo = document.createElement("label")
    entNo.setAttribute("placeholder", "Enter your number")
    entNo.setAttribute("id", "entNo_lbl")
    entNo.textContent = "Enter No: "
    x.appendChild(entNo)

    let input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("id","inp_No")
    x.appendChild(input)

    let submit = document.createElement('button');
    submit.setAttribute("type", "submit")
    submit.setAttribute("id", "subBtn")
    submit.setAttribute("onclick", "func()")
    submit.textContent = "Submit"
    x.appendChild(submit)

    let reset = document.createElement('button');
    reset.setAttribute("type", "reset")
    reset.setAttribute("id", "reset_Btn")
    reset.addEventListener('click', resetbtn);
    reset.textContent = "Reset"
    x.appendChild(reset) 

    let error = document.createElement('p');
    error.setAttribute("id", "error")
    error.textContent = ""
    x.appendChild(error)
    
    let p = document.createElement('p');
    p.setAttribute("id", "resultStr")
    p.textContent = "Your Number is: "
    x.appendChild(p)

    let result = document.createElement('p');
    result.setAttribute("id", "myResult")
    p.appendChild(result)

    
}

function func() {
    const res = document.getElementById("myResult")
    let num = document.getElementById("inp_No").value;
    let errorOut = document.getElementById("error")

    if(num == ""){
        errorOut.innerHTML = "Please enter number"
    }
    else if(typeof Number(num) === "number" && Number(num) == num){
        res.innerHTML = num
        errorOut.innerHTML = ""
    }
    else{
        errorOut.innerHTML = "Invalid Value"
    } 
    
}

function resetbtn(){  
    let errorOut = document.getElementById("error")
    let num = document.getElementById("inp_No");
    
    errorOut.innerHTML = ""
    num.value = ""

}  




