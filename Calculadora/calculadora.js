function numeros(numero){
document.getElementById("number").value += numero
}

function operador(operacion){
    document.getElementById("number").value += operacion
}

function igual(){
let number = document.getElementById("number").value
    if ( porcen == true){
let calcular = number.indexOf("%")+1 ;
let resultado = number.subtring(calcular+1,number.length)
document.getElementById("number").value = (parseInt(porcentajes) ** parseInt(calcular) / 100)
porcen = false

    } else {document.getElementById("number").value = eval(document.getElementById("number").value)}
}

function borrartodo(){
    document.getElementById("number").value = " "
}

function borar(){
var borrar = document.getElementById("number").value
document.getElementById("number").value = borrar.slice(0,-1)
}



function porcentaje(){
    let valores = document.getElementById("number").value
    document.getElementById("number").value 
}      

function raizcua(){
    let raizcuadrada = document.getElementById("number").value
    let raiz = Math.sqrt(raizcuadrada)
    document.getElementById("number").value = raiz
}

function potencia(){
    let base = document.getElementById("number").value
    let resultado = Math.pow(base,2)
    document.getElementById("number").value = resultado
}

let porcen = false
function porcentaje(){
    let porcentajes = document.getElementById("number").value
    document.getElementById("number").value += "%"
     porcen = true

}
