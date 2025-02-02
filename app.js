//!1.	Crea una función que calcule el índice de masa corporal (IMC) de una persona 
//! a partir de su altura en metros y peso en kilogramos, que se recibirán como 
//! parámetros.
function asignarTextoHTML(idEtiqueta, texto) {
    let etiquetaHTML = document.getElementById(idEtiqueta);
    etiquetaHTML.innerHTML = texto;
    return;
}

function textosIniciales() {
    asignarTextoHTML('tituloDesafio', 'Uso de Funciones');
    asignarTextoHTML('t-Alturaimc', 'Ingrese su altura en metros:');
    asignarTextoHTML('t-Pesoimc', 'Ingrese su peso en Kg:');
    asignarTextoHTML('t-numeroFactorial', 'Ingrese un número de 1-10 para mostrar su factorial');
    asignarTextoHTML('t-dolarRecibido', 'Ingrese una cantidad en dolares para cambiar');
    asignarTextoHTML('t-altoRectangulo', 'Ingrese la altura en metros del rectángulo:');
    asignarTextoHTML('t-anchoRectangulo', 'Ingrese el ancho en metros del rectángulo:');
    asignarTextoHTML('t-radioCirculo', 'Ingrese el radio en metros del círculo:');
    asignarTextoHTML('t-tabla', 'Ingrese un número para mostrar su tabla');
}
textosIniciales();

function calcularIMC(altura, peso) {
    return peso/(altura*altura);
}

function limpiarInput(idInput) {
    document.getElementById(idInput).value = '';
}

function btnIndiceMasaCorporal() {
    let alturaDeUsuario = document.getElementById('alturaParaIMC').value;
    let pesoDeUsuario = document.getElementById('anchoParaIMC').value;  
    let resultadoIMC = calcularIMC(alturaDeUsuario, pesoDeUsuario);
    asignarTextoHTML('t-imc', `El IMC es igual a: ${Math.round(resultadoIMC)} aprox`);
    limpiarInput('alturaParaIMC');
    limpiarInput('anchoParaIMC');
}

//! 2.	Crea una función que calcule el valor del factorial de un número
function calcularFactorial(numero) {
    let resultadoFactorial = 0;
    if (numero == 1 || numero == 0) {
        resultadoFactorial = 1
    } else {
        resultadoFactorial = numero*calcularFactorial(numero -1);
    }
    return resultadoFactorial;
}

function btnFactorial(){
    let numeroIngresadoFactorial = document.getElementById('datosParaFactorial').value;
    if (numeroIngresadoFactorial < 0 || numeroIngresadoFactorial > 10) {
        limpiarInput('datosParaFactorial');
    } else {
        asignarTextoHTML('t-factorial', `El factorial de ${numeroIngresadoFactorial} es: ${calcularFactorial(numeroIngresadoFactorial)}`);
        limpiarInput('datosParaFactorial');
        numeroIngresadoFactorial = 0;
    }        
}

//! Calculadora de Dolares a soles
function calcularDolaresASoles(dolar) {
    let tipoDeCambio = 3.75;
    return dolar*tipoDeCambio;
}

function btnDolar() {
    let cantidadDolarDeUsuario = document.getElementById('datosParaDolar').value;
    let resultadoCambio = calcularDolaresASoles(cantidadDolarDeUsuario);
    asignarTextoHTML('t-dolar', `$${cantidadDolarDeUsuario} convertido en soles es: S/.${resultadoCambio}`);
    limpiarInput('datosParaDolar');
}

//! Area y perimetro de una sala rectangular
function calcularArea(largo, ancho, tipo) {
    let resultadoArea = 0;
    if (tipo == "rectangulo") {
        resultadoArea = largo*ancho;
    } 
    if (tipo == "circulo") {
        resultadoArea = 3.14*largo*ancho;
    }    
    return resultadoArea;
}

function calcularPerimetro(largo, ancho, tipo) {
    let resultadoPerimetro = 0;
    if (tipo == "rectangulo") {
        resultadoPerimetro = 2*(largo + ancho);
    } 
    if (tipo == "circulo") {
        resultadoPerimetro = Math.round(3.14*(largo + ancho));
    }    
    return resultadoPerimetro;
 }

 function btnRectangulo() {
    let largoIngresado = parseInt(document.getElementById('altoParaRectangulo').value);
    let anchoIngresado = parseInt(document.getElementById('anchoParaRectangulo').value);

    let resultadoAreaRectangular = calcularArea(largoIngresado, anchoIngresado, 'rectangulo');    
    let resultadoPerimetroRectangular = calcularPerimetro(largoIngresado, anchoIngresado, 'rectangulo');   
    asignarTextoHTML('t-resultadoRectangulo', `El área es: ${resultadoAreaRectangular} u² y el perímetro es: ${resultadoPerimetroRectangular} u`);
    limpiarInput('altoParaRectangulo');
    limpiarInput('anchoParaRectangulo');
}

//! Area y perimetro de una sala circular
function btnCirculo() {
    let radioIngresado = parseInt(document.getElementById('datosParaCirculo').value);
    let resultadoAreaCirculo = calcularArea(radioIngresado, radioIngresado, 'circulo');
    let resultadoPerimetroCirculo = calcularPerimetro(radioIngresado, radioIngresado, 'circulo');
    asignarTextoHTML('t-resultadoCirculo', `El área es: ${resultadoAreaCirculo} u² y el perimetro es: ${resultadoPerimetroCirculo} u aprox.`);
    limpiarInput('datosParaCirculo');
}

//! tabla de multiplicar
function tablaMultiplicar(multiplicando) {
    let multiplicador = 0;
    let resultadoTabla = [];
    while (multiplicador <= 12) {
        //console.log(`${multiplicando} x ${multiplicador} = ${multiplicando*multiplicador}`);
        resultadoTabla.push(`  ${multiplicando} x ${multiplicador} = ${multiplicando*multiplicador}  `);        
        multiplicador++;
    }
    return asignarTextoHTML('t-tablaResultado', `Tabla del ${multiplicando} es: ${resultadoTabla}`);
}
//tablaMultiplicar(9);
function btnTabla() {
    let numeroIngresoTabla = parseInt(document.getElementById('datosParaTabla').value);
    tablaMultiplicar(numeroIngresoTabla);
    limpiarInput('datosParaTabla');
}