let inputtext = document.querySelector(".inputtext");
let btngen = document.querySelector(".btngen");
let error = document.querySelector(".error");
let genaratecode = document.querySelector(".genaratecode");

let inputval;

btngen.addEventListener("click", function(){
    if(inputtext.value){
        error.innerHTML = "";
        if(inputtext.value - 55){
            if(inputtext.value >= 4 && inputtext.value <= 50){
                inputval = inputtext.value;

                let passwordgen = function(a){
                    let codegen = "";
                    let setCode = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789@#$%&^()/|";
                
                    for(let i = 0; i < a; i++){
                        codegen += setCode.charAt(Math.floor(Math.random() * setCode.length));
                    }
                    return codegen;
                }
                genaratecode.innerHTML = "Your Password: " + "<br>" + passwordgen(inputval);
            
            }else{
                error.innerHTML = "Less than 50 and greater than 4";
                error.style.color = "red";
                error.style.fontSize = "18px";
                error.style.marginBottom = "18px";
            }
        }else{
            error.innerHTML = "*Please give a number";
            error.style.color = "red";
            error.style.fontSize = "18px";
            error.style.marginBottom = "18px";
        }
    }else{
        error.innerHTML = "*Please give a value";
        error.style.color = "red";
        error.style.fontSize = "18px";
        error.style.marginBottom = "18px";
    }
});