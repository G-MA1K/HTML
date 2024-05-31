function validainputs(){
  let email=document.getElementById("email");
  let password=document.getElementById("password");
  let ingreso=document.getElementById("login");
  let emailval=email.value.trim();
  let passwordval=password.value.trim();
  let passwordok="a12345"; // contraseña de ingreso
  var errorf=0;  //variable de control de ingreso - apagado
  //seccion de validacion email
  if(emailval===""){
      ocErrorform(email,"Por favor ingrese su email");
      errorf=1;  //activa error
  }
  else if(!valEmail(emailval)){
      ocErrorform(email,"Email no válido...");
  }
  else{
      exitosform(email);
  }
  //seccion validacion password
  if(passwordval===""){
      ocErrorform(password,"Por favor ingrese su contraseña");
      errorf=1;  //activa error
  }
  else if(passwordval != passwordok){
      ocErrorform(password,"Contraseña incorrecta ...");
      errorf=1;  //activa error
  }
  else {
      exitosform(password);
  }
  //Seccion de validacion de ingreso exitoso
  if(errorf==0){
      ingreso.addEventListener('click',function() {
          swal("ACCESO PERMITIDO..A PLATAFORMA","CLICK OK para continuar","success");
      })
  }
  
  return false;
  //seccion de definicion de funciones 
  // funcion de error
  function ocErrorform(input,message){
      let formControl=input.parentElement;
      let small=formControl.querySelector("small");
      formControl.className="form-control error";
      small.innerText=message; // mensaje de error al usuario
  }
  // funcion de ingreso exitoso
  function exitosform(input){
      let formControl=input.parentElement;
      formControl.className="form-control success";
  }
  // Expresion regular para validar email
  // Que acepte letra minusculas, numeros, guion bajo, punto, simbolo arroba,  guion al medio que contenga mas de 6 caracteres
  function valEmail(email){
      return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);
      }
  }
  //Seccion mostrar contraseña
  function mostrarSeña(){
      var tipo=document.getElementById("password");
      if(tipo.type=="password"){
          tipo.type="text";  // aca se muestra contraseña
      }else{
          tipo.type="password";  // aca se vuelve a ocultar 
      }
  }