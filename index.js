var input = document.getElementById("inputId");
var input_box = document.querySelector(".input-box")
var button = document.getElementById("button");
var password_text = document.getElementById("str");
var strength = document.getElementById("password-strength")





input.addEventListener("input",()=>{
    if (input.value.length>0){
        password_text.style.display = "block";
    }else{
        password_text.style.display = "none";
    }
    if (input.value.length>0 && input.value.length<=4){
        strength.innerHTML = "weak";
        input_box.style.borderColor = "red";
        password_text.style.color = "red";
        strength.style.color = "red";
    }
    else if(input.value.length>4 && input.value.length<=8){
        strength.innerHTML = "moderate";
        input_box.style.borderColor = "yellow";
        password_text.style.color = "yellow";
        strength.style.color = "yellow";
    }else if (input.value.length > 8){
        strength.innerHTML = "strong";
        input_box.style.borderColor = "green";
        password_text.style.color = "green";
        strength.style.color = "green";

    }
    
})
