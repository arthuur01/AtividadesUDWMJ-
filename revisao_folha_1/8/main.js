function validarEmail(){
    const email = document.getElementById("email").value;
    if(email.includes("@")){
        alert("Email válido");
        return true;
    } else {
        alert("Email inválido");
        return false;
    }
}