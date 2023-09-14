let res =document.getElementById('resultados');



//Funciones tradicionales
function mensaje(){
        res.innerHTML+= '<br/> Soy una funcion tradicional';
}

mensaje();

function calfinal(c1,c2,c3){
      let prom =(c1+c2+c3)/3;
      return prom;  
}

let promedio= calfinal(8,5,10);
res.innerHTML +='<br/>' + promedio.toFixed(1);

//variable de funcion
let votar = function(edad){
        let msg = edad>= 18 ? 'Puedes Votar' : 'no puedes votar'; //if else condicional ternaria solo 1 linea
        return msg;

}
 res.innerHTML += '<br/>' + votar (50);


 let potencia = function(n,pot){
        res.innerHTML += '<br/>' + (n**pot); //elevar a potencia
 };

 potencia(8,3);

 //funciones anonimas autoinvocadas
 // no todas las funciones son autoinvocadas
 (function(n=10,pot=3){
        res.innerHTML += '<br/> funcion AA:' + (n**pot); //elevar a potencia
 })();

 //Funciones de tipo flecha
 //let ine = function edad=<{
   //     edad>= 18 ? 'Puedes Votar' : 'no puedes votar'; //if else condicional ternaria solo 1 linea
     //   return msg;

//}
 //res.innerHTML += '<br/ Flecha:>' + ine (50);




 
 let cartilla =edad=>
    edad>= 18 ? 'Puedes Votar' : 'no puedes votar'; 
 
res.innerHTML += '<br/> Flecha:' + cartilla (16);


//calculadora
var nombre = prompt("Nombre:");
        //
        //
//tradicional 
function suma() {
        let valor1 = parseFloat(document.getElementById("valor1").value);
        let valor2 = parseFloat(document.getElementById("valor2").value);
        let resultado = valor1 + valor2;
        document.getElementById("resultado").textContent =nombre +" la suma de "+valor1 +" + "+ valor2 +" = "+ resultado;
    }
    
    //flecha
    const resta = () => {
        let valor1 = parseFloat(document.getElementById("valor1").value);
        let valor2 = parseFloat(document.getElementById("valor2").value);
        let resultado = valor1 - valor2;
        document.getElementById("resultado").textContent =nombre +" la resta de "+ valor1 +" - "+ valor2 +" = "+ resultado
    };
    
    //anonima autoinvocada
    (function () {
        document.getElementById("multiplicacion").addEventListener("click", function () {
            let valor1 = parseFloat(document.getElementById("valor1").value);
            let valor2 = parseFloat(document.getElementById("valor2").value);
            let resultado = valor1 * valor2;
            document.getElementById("resultado").textContent = nombre +" la multiplicación de "+ valor1 +" * "+ valor2 +" = "+ resultado
        });
    })();
    
    //flecha 
    const porcentaje = () => {
        let valor1 = parseFloat(document.getElementById("valor1").value);
        let valor2 = parseFloat(document.getElementById("valor2").value);
        let resultado = (valor1 / 100) * valor2;
        document.getElementById("resultado").textContent = nombre +" el resultado de "+ valor1 +" y "+ valor2 +" = "+ resultado
    };
     
    // botones
    document.getElementById("suma").addEventListener("click", suma);
    document.getElementById("resta").addEventListener("click", resta);
    document.getElementById("multiplicacion").addEventListener("click", multiplicacion);
    document.getElementById("porcentaje").addEventListener("click", porcentaje);
    