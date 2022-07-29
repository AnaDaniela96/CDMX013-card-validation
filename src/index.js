import validator from './validator.js';

//para que tenga que llenar el formulario 
const sendFormBoton = document.getElementById("sendForm")
sendFormBoton.addEventListener("click",validarFormulario)


//HACER QUE CAMBIEN LOS DIGITOS

document.getElementById ("numTarjeta").addEventListener("keyup",getMask)


//Funciara que entren a validator sólo números y de 16 dígitos

const boton = document.getElementById ("botonValidar")
boton.addEventListener("click",getCardNumb)


//FUNCIONES 
function validarFormulario(){
    const entrada = ["firstName","lastName","email"];
    const etiqueta = ["primerNombre","apellido","correo"];
    let asteriscos = 0;  // conyador de asteriscos
    for(let i=0; i<entrada.length;i++){
        let ent = document.getElementById(entrada[i]).value;
        if (ent.length==0){
            document.getElementById(etiqueta[i]).innerHTML= "*";
            asteriscos = asteriscos + 1;
        }
    }
    if(asteriscos != 0){
        document.getElementById("asteriscos").innerHTML= "* Los campos marcados son obligatorios *";
    }
    let tipo_tarjeta = document.getElementById("typeTarjet").value;
    if(tipo_tarjeta == "select"){
        document.getElementById("tipoTarjeta").innerHTML= "* Selecciona un tipo de tarjeta";
        document.getElementById("asteriscos").innerHTML= "* Los campos marcados son obligatorios *";
    }
    if(asteriscos==0 && tipo_tarjeta!="select"){
        return true
    } else if(asteriscos!=0 || tipo_tarjeta=="select"){
        return false
    }
}

function getCardNumb(){
    const numStr = document.getElementById ("numTarjeta").value; //guarda la cadena introducidan por el usuario
    let numArr = numStr.split(""); // tranforma en un arreglo la cadena numStr
    if (numArr.length==16) { // Si la longitud del arreglo es igual a 16, ENTONCES

        for (let i=0; i<numArr.lenght; i++){ // PARA i desde 0; hasta 16; con incrmento de 1
            if(isNaN(numArr[i])){
                document.getElementById("justNumbers").innerHTML="Este algortimo sólo lee caracteres numéricos"
            }
        }

        let arre = validator.isValid(numStr);
        document.getElementById("justNumbers").innerHTML = arre;
        let mask = validator.maskify(numStr);
        document.getElementById("justSixteen").innerHTML = mask;

    } 
    else{
        document.getElementById("justSixteen").innerHTML="Tienes que escribir 16 dígitos"
    } 
}    

function getMask(){
    let str = document.getElementById("numTarjeta").value
    let masked = validator.maskify(str)
    document.getElementById("justSixteen").innerHTML= masked
}