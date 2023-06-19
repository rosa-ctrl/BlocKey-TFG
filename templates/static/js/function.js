function openEditProfile() {
  var popup = document.getElementById("EditProfile");
  popup.style.display = "block";
}

function closeEditProfile() {
  var popup = document.getElementById("EditProfile");
  popup.style.display = "none";
}

function openAddPsw() {
  var popup = document.getElementById("AddPsw");
  popup.style.display = "block";
}

function closeAddPsw() {
  var popup = document.getElementById("AddPsw");
  popup.style.display = "none";
}

function obtenerFechaActual() {
  var fecha = new Date();
  var dia = fecha.getDate();
  var mes = fecha.getMonth() + 1;
  var anio = fecha.getFullYear();

  if (dia < 10) {
    dia = '0' + dia;
  }
  if (mes < 10) {
    mes = '0' + mes;
  }

  return dia + '/' + mes + '/' + anio;
}

function addrow_AddPsw(name_register, pass_register) {
  if(sessionStorage['usersValue1'] == undefined) {
    sessionStorage['usersValue1'] = name_register;
    sessionStorage['passwdsValue1'] = pass_register;
    sessionStorage['typeValue1'] = 'Contraseña';
  } else if(sessionStorage['usersValue2'] == undefined) {
    sessionStorage['usersValue2'] = name_register;
    sessionStorage['passwdsValue2'] = pass_register;
    sessionStorage['typeValue2'] = 'Contraseña';
  } else if(sessionStorage['usersValue3'] == undefined) {
    sessionStorage['usersValue3'] = name_register;
    sessionStorage['passwdsValue3'] = pass_register;
    sessionStorage['typeValue3'] = 'Contraseña';
  } else if(sessionStorage['usersValue4'] == undefined) {
    sessionStorage['usersValue4'] = name_register;
    sessionStorage['passwdsValue4'] = pass_register;
    sessionStorage['typeValue4'] = 'Contraseña';
  } else {
    alert('No me caben mas ;-)')
  }

 location.reload();
}

function addrow_AddInf(name_register, value_register) {
  if(sessionStorage['usersValue1'] == undefined) {
    sessionStorage['usersValue1'] = name_register;
    sessionStorage['passwdsValue1'] = value_register;
    sessionStorage['typeValue1'] = 'Info';
  }else if(sessionStorage['usersValue2'] == undefined) {
    sessionStorage['usersValue2'] = name_register;
    sessionStorage['passwdsValue2'] = value_register;
    sessionStorage['typeValue2'] = 'Info';
  }else if(sessionStorage['usersValue3'] == undefined) {
    sessionStorage['usersValue3'] = name_register;
    sessionStorage['passwdsValue3'] = value_register;
    sessionStorage['typeValue3'] = 'Info';
  }else if(sessionStorage['usersValue4'] == undefined) {
    sessionStorage['usersValue4'] = name_register;
    sessionStorage['passwdsValue4'] = value_register;
    sessionStorage['typeValue4'] = 'Info';
  } else {
    alert('No me caben mas ;-)')
  }

  location.reload();
}


function borrarReg(pPos) {
  sessionStorage.removeItem('usersValue'+pPos);
  sessionStorage.removeItem('typeValue'+pPos);
  sessionStorage.removeItem('passwdsValue'+pPos);
  location.reload();
}

function editarReg(pPos) {
  document.fEdit.name_register_ed.value = sessionStorage['usersValue'+pPos];
  document.fEdit.password_ed.value = sessionStorage['passwdsValue'+pPos];
  document.fEdit.pos.value = pPos;
  document.getElementById("EditInf").style.display = "block";
}

function openAddInf() {
  var popup = document.getElementById("AddInf");
  popup.style.display = "block";
}

function closeAddInf() {
  var popup = document.getElementById("AddInf");
  popup.style.display = "none";
}

function editRegInf() {
  var pPos = document.fEdit.pos.value;
  sessionStorage['usersValue'+pPos] = document.fEdit.name_register_ed.value;
  sessionStorage['passwdsValue'+pPos] = document.fEdit.password_ed.value;
  location.reload();    
}

function guardarUser(pEmail, pPassword) {
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  var passStr = 0;

  if (emailRegex.test(pEmail)) {
    passStr = checkPasswordStrength(pPassword,1);
    if(passStr >= 3 ) {
      sessionStorage['valorEmail'] = pEmail;
      sessionStorage['valorPassword'] = pPassword;
    } else {
      alert('Contraseña insegura.')
    }
  } else {
    alert('El correo no es válido.')
  }    
}

function guardarAdmin(pPassword) {
  var passStr = 0;
  passStr = checkPasswordStrength(pPassword,1);
  
  if(passStr >= 3 ) {
    sessionStorage['passwordAdmin'] = pPassword;
  } else {
    alert('Contraseña insegura.');
  }   
}

function validarUser(email, password) {
  var valorEmail = sessionStorage['valorEmail'];
  var valorPassword = sessionStorage['valorPassword'];

  if ((email == "rm.gascon.2016@alumnos.urjc.es" ) && (password == "P€Lic4No!bL8cKeY2")) {
    sessionStorage["passwordAdmin"] = "P€Lic4No!bL8cKeY2";
    document.getElementById("log_in").action = encodeURIComponent("admin_users.html");
  } else if ((valorEmail != email) || (valorPassword != password)) {
    alert('¡Error de inicio de sesión! Usuario y/o contraseña incorrectos. Por favor, inténtalo de nuevo')
    document.getElementById("log_in").action = encodeURIComponent("");
    document.getElementById('log_in').doNotSubmit();
  }
}

function confirmacionSalida() {
  var popup = document.getElementById("cerrar_sesion");
  popup.style.display = "block";
}

function closeConfirmacionSalidaNo() {
  var popup = document.getElementById("cerrar_sesion");
  popup.style.display = "none";
}

function closeConfirmacionSalidaSi() {
  var popup = document.getElementById("cerrar_sesion");
  popup.style.display = "none";
  window.location.href = "index.html";
}

function generarPassword() {
  alert("hola");
  var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var longitud = 10;
  var contrasena = "";

  for (var i = 0; i < longitud; i++) {
    var indice = Math.floor(Math.random() * caracteres.length);
    contrasena += caracteres.charAt(indice);
  }

  var inputContrasena = document.getElementById("password");
  inputContrasena.value = contrasena;
}


function checkPasswordStrength(password, alerts) {
  // Initialize variables
  var strength = 0;
  var tips = "";

    // Check password length
  if (password.length < 8) {
    if (alerts == 1) alert('Demasiado corta');
  } else {
    strength += 1;
  }

  // Check for mixed case
  if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
    strength += 1;
  } else if (alerts == 1) {
    alert('Hay que usar al menos una mayuscula y una minuscula');
  }

  // Check for numbers
  if (password.match(/\d/)) {
    strength += 1;
  } else if (alerts == 1) {
    alert('Hay que usar al menos un nunero.');
  }

  // Check for special characters
  if (password.match(/[^a-zA-Z\d]/)) {
    strength += 1;
  } else if (alerts == 1) {
    alert('Hay que usar al menos un caracter especial.');
  }

  return strength;
}

function onLoadProfile() {
  document.display1.username1.value = sessionStorage['valorEmail'];
  document.display1.password1.value = sessionStorage['valorPassword'];
}

function onLoadAdminProfile() {
  document.display1.email_admin.value = "rm.gascon.2016@alumnos.urjc.es";
  document.display1.password_admin.value = sessionStorage["passwordAdmin"];
}

function calculateBlockey () {
  var numPasswd = 0;
  var numRepes = 0;
  var numInseguras = 0;
  var numUnicas = 0;
  var pass1, pass2, pass3, pass4;

  if(sessionStorage['passwdsValue1'] != undefined) {
    if(sessionStorage['typeValue1'] == 'Contraseña'){
      pass1 = sessionStorage['passwdsValue1'];
      numPasswd++;
    if(checkPasswordStrength(pass1,0) < 4) numInseguras++;
    }
  }

  if(sessionStorage['passwdsValue2'] != undefined) {
    if(sessionStorage['typeValue2'] == 'Contraseña'){
      pass2 = sessionStorage['passwdsValue2'];
      numPasswd++;
      if(pass1 == pass2)
        numRepes++;
      if(checkPasswordStrength(pass2,0) < 4) numInseguras++;
    }
  }

  if(sessionStorage['passwdsValue3'] != undefined) {
    if(sessionStorage['typeValue3'] == 'Contraseña'){
      pass3 = sessionStorage['passwdsValue3'];
      numPasswd++;
      if(pass1 == pass3) numRepes++;
      if(pass2 == pass3) numRepes++;
      if(checkPasswordStrength(pass3,0) < 4) numInseguras++;
    } 
  }

  if(sessionStorage['passwdsValue4'] != undefined) {
    if(sessionStorage['typeValue4'] == 'Contraseña'){
      pass4 = sessionStorage['passwdsValue4'];
      numPasswd++;
      if(pass1 == pass4) numRepes++;
      if(pass2 == pass4) numRepes++;
      if(pass3 == pass4) numRepes++;
      if(checkPasswordStrength(pass4,0) < 4) numInseguras++;
    }
  }
  
  document.fValores.numRepes.value = numRepes;
  document.fValores.numInseguras.value = numInseguras;
  document.fValores.numUnicas.value = numPasswd - numRepes;
  document.fValores.numTotal.value = numPasswd;    
}

function desplegarContrasenaAleatoria() {
}
