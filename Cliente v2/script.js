/*let a, b, c;
a=3;
b="Mi hola mundo";
alert(b);
console.log("Digite el valor para la variable c: ");
c=prompt();


function mostrarValores(){
    alert(a + b + c);
}

mostrarValores();
*/

let nombreTer, interMenor, interMayor, escala;

function guardarInfo(){
    nombreTer = document.getElementById("nombreTer").value;
    interMenor = document.getElementById("interMenor").value;
    interMayor = document.getElementById("interMayor").value;
    escala = document.getElementById("escala").value;

    document.getElementById("mostrarNom").value = nombreTer;

}
