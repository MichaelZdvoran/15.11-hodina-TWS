function Control(){
    const password = document.getElementById("Password");
    const password_control = document.getElementById("control_password");
    let output = document.getElementById("output");
    const nickname = document.getElementById("nick")
    const code = document.getElementById("code")


    if ((password.value == password_control.value)&&(!isNaN(code.value))){
            if((nickname.value !="")&& (password.value !="")&&(control.password_control !="")&&())
            console.log("Login is True");
            output.innerHTML = ("Login is true");
      
    }
    else{
          output.innerHTML = ("Login is false");
        console.log("Login is false");
        output.innerHTML = ("Login is false");
    }
}


