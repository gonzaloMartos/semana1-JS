//Sumar
function sumar(x, y){
    return x + y;
}

sumar(2, 4);


//Multiplicación
function multiplicar(x, y){
    if(typeof x === 'number' && typeof y === 'number'){
        return x * y;
    }else{
        return "Ambos parámetros deben ser números"
    }
}

multiplicar(4, 4);
multiplicar("texto", "texto");


//Invierno
function esInvierno(mes){
    if(mes == "junio" || mes == "julio" || mes == "agosto"){
        return true;
    }else{
        return false;
    }
}

esInvierno("agosto");
esInvierno("enero");


//Covid (Profe en esta me ayude con chat gpt porque no sabia como hacerla, de igual forma entendi)
const sintomasPacienteEnfermo = ["fiebre", "dolor muscular", "vómitos"];
const sintomasPacienteNoEnfermo = ["fiebre", "titila ojo", "vómitos"];
const sintomasCovid19 = ["fiebre", "dolor muscular", "pérdida de gusto"];

function esCovid(sintomasPaciente, sintomasCovid){
    let coincidencias = 0;
    for(let i = 0; i < sintomasPaciente.length; i++){
        if(sintomasCovid.includes(sintomasPaciente[i])){
            coincidencias++;
        }
    }if(coincidencias >= 2){
        return true;
    }else{
        return false;
    }
}

esCovid(sintomasPacienteEnfermo, sintomasCovid19);
esCovid(sintomasPacienteNoEnfermo, sintomasCovid19);


//Horario cursada (En esta tambien me ayude con chat gpt)
function horarioCursada(materia) {
    const materias = {
        "MATEMATICA": "Jueves",
        "LENGUA": "Lunes",
        "GEOGRAFIA": "Viernes"
    }
    if (materias.hasOwnProperty(materia.toUpperCase())) {
      return materias[materia.toUpperCase()];
    } else {
        return "MATERIA NO ENCONTRADA";
    }
}

horarioCursada("Matematica")
horarioCursada("Lengua")
horarioCursada("Geografia")
horarioCursada("Física")