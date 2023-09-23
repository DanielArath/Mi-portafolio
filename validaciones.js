export const valida = (input) => {
    const tipoDeInput = input.dataset.tipo;

    if(input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innertHTML="";
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, input);
    }
}
  
const tipoDeErrores = [
    "valueMissing",
    "patternMismatch",
    "typeMismatch",
]

const mensajesDeError = {

    nombre: {
        valueMissing: "El campo nombre no puede estar vacio",
        patternMismatch: "El nombre debe contener entre 3 y 50 caracteres"
    },

    email: {
        valueMissing: "El campo email no puede estar vacio",
        typeMismatch: "El email no es valido"
    },

    asunto: {
        valueMissing: "El campo asunto no puede estra vacio",
        patternMismatch: "El asunto debe contener entre 3 y 50 caracteres"
    },

    mensaje: {
        valueMissing: "El campo mesnaje no puede estar vacio",
        patternMismatch: "El mensaje debe contener entre 10 y 300 caracteres"
    }
}

const mostrarMensajeDeError = (tipoDeInput, input) => {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        console.log(tipoDeInput, error);
        console.log(input.validity[error]);
        console.log(mensajesDeError[tipoDeInput][error]);
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
}
















































