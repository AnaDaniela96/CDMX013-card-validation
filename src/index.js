import validator from './validator.js'; //de esta forma se exporta validator 

const sendFormBoton = document.getElementById("sendForm") //constante para tomar el elemento id "sendFomr"
sendFormBoton.addEventListener("click",validarFormulario) //evento addEventListener para el botón con id sendFormBoton, asociado a la función validarFormulario

//"addEventListener" para que que entren a validator sólo números y sólo 16 dígitos
const boton = document.getElementById ("botonValidar")
boton.addEventListener("click",getCardNumb)

//FUNCIONES 
function validarFormulario(){ //función sin parametros
    const entrada = ["firstName","lastName","email"];//arreglo con id's de input en html
    const etiqueta = ["primerNombre","apellido","correo"]; //arreglo con id's de labels html 
    let asteriscos = 0;  // contador de asteriscos
    
    //ciclo for loop to check if any field of the form is empty.
    for(let i=0; i<entrada.length;i++){
        let ent = document.getElementById(entrada[i]).value;
        if (ent.length==0){ //si la longitud de ent es cero, entonces
            document.getElementById(etiqueta[i]).innerHTML= "*"; //asigna a la etiqueta con índice i un *
            asteriscos = asteriscos + 1; //suma uno en el contador de asteriscos 
        } //cierra el if
    } //cierra for loop
    if(asteriscos != 0){ //si el contador de asteriscos es diferente de cero
        ////imprime un mensaje en la etiqueta "asteriscos" de html
        document.getElementById("asteriscos").innerHTML= "<h4>*Los campos marcados son obligatorios*</h4>";
    } //cierra if
    let tipo_tarjeta = document.getElementById("typeTarjet").value; //a tipo_tarjeta asigna el valor que tiene el input typeTarjet en html
    if(tipo_tarjeta == "select"){ //sí "tipo_tarjeta es igual a "select"
        document.getElementById("tipoTarjeta").innerHTML= "<h4>*Selecciona un tipo de tarjeta*</h4>"; //en el label "tipo tarjeta imprime un mensaje"
        document.getElementById("asteriscos").innerHTML= "<h4>*Los campos marcados son obligatorios*</h4>"; //en el label "asteriscos" imprime 
    }
    if(asteriscos==0 && tipo_tarjeta!="select"){ //si el formulario está lleno && "tipoTarjeta" es diferente de "select"
        return true //regresa un verdadero 
    } else if(asteriscos!=0 || tipo_tarjeta=="select"){ //si "asteriscos es diferente de cero ||"o" "tipo_tarjeta" igual a "select"
        return false //regresa falso
    }//fin del if
}//fin de la función validarFormulario

function getCardNumb(){ //función sin parametros
    const numStr = document.getElementById ("numTarjeta").value; //guarda la cadena introducida por el usuario
    let numArr = numStr.split(""); // tranforma en un arreglo la cadena numStr
    if (numArr.length==16) { // Si la longitud del arreglo es igual a 16, ENTONCES

        for (let i=0; i<numArr.lenght; i++){ // PARA i desde 0; hasta 16; con incrmento de 1
            if(isNaN(numArr[i])){ //si "numArr" que es el arreglo con que irá iterando, no es un numero 
                //regresará este mensaje de "solo lee caracteres numéricos"
                document.getElementById("justNumbers").innerHTML="Este algortimo sólo lee caracteres numéricos"
            }//va revisar todos los elementos dentro de este if
        } //sale del ciclo 

        let arre = validator.isValid(numStr) //variable para tomar el numStr ya validado por validator.isValid
        if (arre==true) { //sí arre es igual a true
            document.getElementById("justNumbers").innerHTML = "<h5>Tarjeta válida</h5>" //toma id "justnumbers" del html y muestra
            //PARA HACER QUE CAMBIEN LOS DIGITOS POR #'s EN LA CAJA DE ENTRADA DE TEXTO
            const maskifyValue = validator.maskify(numStr); //variable maskifyValue que será igual a validator.maskify
            document.getElementById("numTarjeta").value = maskifyValue; //le asigno el valor de maskifyValue al id "numTarjeta"
        }else{
            document.getElementById("justNumbers").innerHTML = "<h4>Tarjeta inválida</h4>" //si no es igual a true entonces muestra "tarjeta inválida"
        }
    } 
    else{
        document.getElementById("justSixteen").innerHTML="Tienes que escribir 16 dígitos"
    } 
}    