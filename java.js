


//EJERCICI0 1: Numero de enlaces de la página:
function ejercicio1(){


let enlaces=document.getElementsByTagName('a');
alert(enlaces.length)


}

//EJERCICIO 2: Dirección a la que enlaza el penúltimo enlace



function ejercicio2(){

    let enlaces=document.getElementsByTagName('a');

    let penultimoenlace = enlaces[enlaces.length-2].href;
    alert(penultimoenlace)
    
}

//EJERCICIO 3: Numero de enlaces que enlazan a http://prueba

function ejercicio3(){
    //var numeroenlaces=[];
    var enlaces=document.getElementsByTagName('a');
    var textoenlaces=enlaces.href;
    document.write(textoenlaces);
    /* for (let i=0;i<enlaces.length;i++){
        document.write(textoenlaces)
    } */


}
    