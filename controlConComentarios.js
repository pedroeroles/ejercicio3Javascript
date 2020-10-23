
const formulario = document.querySelector("#formulario");
const inputs = document.querySelectorAll("#formulario input");
const input = document.querySelector("#usuario");
const boton = document.querySelector("#boton");
const password = document.querySelector("#password");


// usuario.addEventListener("input", validarUsuario );
// function validarUsuario(ev){
//     let input = ev.target;
//     let usuario = input.value
//     input.classList.remove("is-valid", "is-invalid");
//     if(usuario.includes("@") && usuario.length >= 4){
//         input.classList.add("is-valid");
//     }else {
//         input.classList.add("is-invalid");
//     }
//     ev.preventDefault();
// };
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
// boton.addEventListener("mouseover",envioFormulario);
// function envioFormulario(ev){
//     let retorno = false;
 
//     const inputsRequired = Array.from(document.querySelectorAll("#formulario input[required]"));

//     if(inputsRequired.every(input => input.classList.contains("is-valid"))){
//        retorno = true;
//     };
//     console.log(retorno);
//     if(retorno){
//         boton.removeAttribute("disabled");
//     }
//     return retorno;

// }


// formulario.addEventListener("mouseover",(ev)=>{
//     boton.getAttribute("disabled");
//     if(envioFormulario(ev)){
//     boton.removeAttribute("disabled");
// }
//     ev.preventDefault();
// });

formulario.addEventListener("mouseover",(ev)=>{
   
    const inputsRequired = Array.from(document.querySelectorAll("#formulario input[required]"));
    if(inputsRequired.every(input => input.classList.contains("is-valid"))){
        // boton.removeAttribute("disabled");
        boton.disabled = false;
    }
    // boton.disabled = true;
    ev.preventDefault();
});

