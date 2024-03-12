checkPassword.addEventListener('click', correctPassword);

function correctPassword(){
const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');
const select3 = document.getElementById('select3');
const checkPassword = document.getElementById('checkPassword');
const resultadoPassword = document.getElementById('resultadoPassword');

const password = '${select1.value}${select2.value}${select3.value}';

    if (password == '911') {
        resultadoPassword.textContent = "Password 1 correcto";
       }else if( password == '714') {
        resultadoPassword.textContent = "Password 2 correcto";
       }else{ 
        resultadoPassword.textContent = "Password incorrecto";
       }
}