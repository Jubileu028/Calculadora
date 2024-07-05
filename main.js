// A função enviar vai ser ultilizada para pegar os elementos das notas 1, 2, 3, e 4 e somar. Depois, dividir por 4 e assim chegar na média.


function Enviar() {
    var nota1 = document.getElementById("nota1");   // document.getElementById serve para conseguir o que está dentro de uma variável.
    var nota2 = document.getElementById("nota2");
    var nota3 = document.getElementById("nota3");
    var nota4 = document.getElementById("nota4");

    var notaNum1 = nota1.value;
    var notaNum2 = nota2.value;
    var notaNum3 = nota3.value;
    var notaNum4 = nota4.value;
 
    var notaF1 = parseFloat(notaNum1);
    var notaF2 = parseFloat(notaNum2);
    var notaF3 = parseFloat(notaNum3);
    var notaF4 = parseFloat(notaNum4);


    var notaFinal = (notaF1+notaF2+notaF3+notaF4)/4;
   // não vai funcionar hihi - NotaFinalL.innerHTML="Sua média é: "+notaFinal; 

    NotaFinalL.innerHTML = `A média obtida é: ${notaFinal}`;

    
}