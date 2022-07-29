const validator = {
    isValid: function(str){
        const arr = str.split("");
        let total = 0; // inicializa una variable para la
                       // suma total del algoritmo de Luhn
        for(let i = 0; i < arr.length; i++){ // PARA i en el rango desde 0; hasta
                                             // arr.lenght; con incremento de 1 en i.

            // i+1 indica que el indice comineza desde 1

            if((i+1)%2 == 0){ // SI el indice es par, ENTONCES
                let xDos = 2*arr[i]; // multiplica por 2 el valor de arr[i]

                if(xDos > 9){ // SI xDos es mayor que 9, ENTONCES
                    let p = Math.floor(xDos/10); // digito de las decenas
                    let q = xDos%10; // digito para las unidades
                    total += (p+q); // suma ambos digitos, p y q, 
                                           // y adiciona eso a total
                } 
                else if (xDos <= 9){ // SI xDos  es menor o igaul que 9, ENTONCES
                    total += xDos; // adiciona a total el valor de xDos
                }

            }
            else if((i+1)%2 == 1){ //  SI el indice es impar, ENTONCES
                total += parseInt(str[i]); // adiciona a total el valor del
                                          // elemento i del arreglo 
            }
        }

        let valida = false; // inicializa una variable booleana con valor false
        if(total%10 == 0){ // SI 'total' es multiplo de 10, ENTONCES
            valida = true; // la tarjeta es valida
        }
        else{ // SI el 'total' no es multiplo de 10, ENTONCES
            valida = false; // La tarjeta es invalida
        }

        return valida // valor de retorno para 'valida'

    },

    maskify: function(str){ // recibe un string como argumento
        // uso: validator.maskify(string)

        const arr = str.split('');
        const l = arr.length-4;

        let ultimos4 = '';
        let masking = '';
        if(l<=0){
            ultimos4 = str.slice(-4);
            masking = '';
        }
        else if(l>0){
            ultimos4 = str.slice(-4);
            masking = str.slice(0,l).replace(/\w/g,'#'); // expresiones regulares (Regular Expresions)
        }
        
        return masking + ultimos4;
    }
}

export default validator