// div1( email , password , div2(checkbox) , myInput)

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let buttonInp = document.querySelector("#myInput");
let result = document.querySelector("#result");
let resultEmail = document.querySelector("#result-email");



result.style.display = "none";
resultEmail.style.display = "none";

buttonInp.onclick = function () {
  if(!email.value){
    resultEmail.innerHTML = "Hata";
    resultEmail.style.display = 'block'
    resultEmail.style.color = 'red'
  }
  if (password.value < 8) {
    result.innerHTML = "Hata";
    result.style.display = 'block'
    result.style.color = 'red'
  }
};
