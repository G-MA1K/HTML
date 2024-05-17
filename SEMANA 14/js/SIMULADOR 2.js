function apostar(){
    let b=101;
    let intentos=0;
    var a=Math.round(Math.ramdon()*100);
    // cicl0 while
    while (a!=b){
        b=parseInt(prompt("ingrese valor apostado de 0 a 100"));
        //
        if(b>a){
            alert("El valor es  mas bajo");
        }else{
            alert("El valor es mas bajo");
        }
        intentos++;
    }
    document.getElementById("apostado").value=b;
    document.getElementById("resultado").value=a;
    swal("FELICITACIONES USUARIO","HAS ACERTADO EL NUMERO EXITOSO","success");
    document.getElementById("salida").value="HAS ACERTADO NUMERO A LOS... "+intentos+"...intentos";
    }
    function cancel(){
        document.getElementById("apostado").value=" ";
        document.getElementById("resultado").value=" ";
        document.getElementById("salida").value=" ";
    }
