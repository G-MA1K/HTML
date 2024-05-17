function calcular(){
    // proceso de trenaferencia del formulario al JS
    var n1=document.getElementById("valorc").value;
    var n2=document.getElementById("numc").value;
    var n3=document.getElementById("interes").value;
    // proceso de calcular 
    var ValorA=parseFloat(n1)*parseFloat(n3);
    var ValorB=(parseFloat(n1)*(1+parseFloat(n2)*parseFloat(n3)));
    // proceso de tranferencia de JS al formulario
    document.getElementById("valora").value=ValorA;
    document.getElementById("valorb").value=ValorB.toFixed(0);
}
function limpiar(){
    document.getElementById("valorc").value=" ";
    document.getElementById("numc").value=" ";
    document.getElementById("interes").value=" ";
}