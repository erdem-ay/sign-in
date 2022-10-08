// div1( email , password , div2(checkbox) , myInput)


let email = document.querySelector("#email");
let password = document.querySelector("#password");
let buttonInp = document.querySelector("#myInput");
let result = document.querySelector("#result");
    result.style.display = "none";


buttonInp.onclick = function () {
  if(password.value < 8){
    result.innerHTML = "Hata"
  }
};
