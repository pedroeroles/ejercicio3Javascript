
const formulario = document.querySelector("#formulario");
const inputs = document.querySelectorAll("#formulario input");
const input = document.querySelector("#usuario");
const boton = document.querySelector("#boton");
const password = document.querySelector("#password");



// validacion del usuario
input.addEventListener("keyup", validarUsuario );
function validarUsuario(ev){
    let input = ev.target;
    let usuario = input.value;
    input.classList.remove("is-valid", "is-invalid");
    if(usuario.includes("@") && usuario.length >= 4){
        input.classList.add("is-valid");
    }else {
        input.classList.add("is-invalid");
    }
};
// validacion del password
password.addEventListener("keyup", validarPassword );
function validarPassword(ev){
    let input = ev.target;
    let password = input.value;
    input.classList.remove("is-valid", "is-invalid");
    if(password.length>=4){
        input.classList.add("is-valid");
    }else {
        input.classList.add("is-invalid");
    }

};

// enviar formulario mediante el mouseover
formulario.addEventListener("mouseover",(ev)=>{
   
    const inputsRequired = Array.from(document.querySelectorAll("#formulario input[required]"));
    if(inputsRequired.every(input => input.classList.contains("is-valid"))){
        boton.disabled = false;
    }
    ev.preventDefault();
});

