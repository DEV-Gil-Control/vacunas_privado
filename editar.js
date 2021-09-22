//- - - - - - - LEER QUERY - - - - - - - - - - //
//function queryID(){
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('ID');
//}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//

//- - - - - - - get data- - - - - - - - - - - - - //
var get_user = function(email) {
   const urlParams = new URLSearchParams(window.location.search);
   const myParam = urlParams.get('ID');
   console.log(myParam);
   var db = firebase.firestore();
   db.collection("messages").doc(myParam)
   .get()
   .then((doc) => {
   console.log(doc.data());     
   //querySnapshot.forEach((doc) => {
   // doc.data() is never undefined for query doc snapshots
   //console.log(doc.id, " => ", doc.data());  
       var todosd = document.getElementById("todosd");
       todosd.innerHTML = `
       <div style="padding-top:20px;">
       <div><strong>Menor registrado:</strong></div>
       <div>Nombre del Niño/Niña: ${doc.data().namemenor}
          <label for="namemenor"></label>
          <input type="text" id="namemenor" name="namemenor" placeholder="NUEVO Nombre de Niño/Niña" style="width: 30%; margin-left:10px;">
          <button class="btn btn btn-link btn-sm" onclick="namemenor_submit();">Cambiar</button>
          </div>
       <div>Apellido paterno: ${doc.data().apaternomenor}
          <label for="apaternomenor"></label>
          <input type="text" id="apaternomenor" name="apaternomenor" placeholder="NUEVO Apellido Paterno" style="width: 30%; margin-left:10px;">
          <button class="btn btn btn-link btn-sm" onclick="apaternomenor_submit();">Cambiar</button>
          </div>
       <div>Apellido Materno: ${doc.data().amaternomenor}
       <input type="text" id="amaternomenor" name="amaternomenor" placeholder="NUEVO Apellido Materno" style="width: 30%; margin-left:10px;">
       <button class="btn btn btn-link btn-sm" onclick="amaternomenor_submit();">Cambiar</button>
       </div>
       <div>Edad: ${doc.data().edadmenor}
       <input type="text" id="edadmenor" name="edadmenor" placeholder="NUEVA Edad" style="width: 30%; margin-left:10px;">
       <button class="btn btn btn-link btn-sm" onclick="edadmenor_submit();">Cambiar</button>
       </div>
       <div>CURP: ${doc.data().curpmenor}
       <input type="text" id="curpmenor" name="curpmenor" placeholder="NUEVO CURP" style="width: 30%; margin-left:10px;">
       <button class="btn btn btn-link btn-sm" onclick="curpmenor_submit();">Cambiar</button>
       </div>
       <div style="padding-top:20px;">
       <div><strong>Tutor registrado:</strong></div>
       <div>Nombre: ${doc.data().nametutor}
       <input type="text" id="nametutor" name="nametutor" placeholder="NUEVO Nombre de Tutor" style="width: 30%; margin-left:10px;">
       <button class="btn btn btn-link btn-sm" onclick="nametutor_submit();">Cambiar</button></div>
       <div>Apellido paterno: ${doc.data().apaternotutor}
       <input type="text" id="apaternotutor" name="apaternotutor" placeholder="NUEVO Apellido Paterno" style="width: 30%; margin-left:10px;">
       <button class="btn btn btn-link btn-sm" onclick="apaternotutor_submit();">Cambiar</button></div>
       <div>Apellido materno: ${doc.data().amaternotutor}
       <input type="text" id="amaternotutor" name="amaternotutor" placeholder="NUEVO Apellido Materno" style="width: 30%; margin-left:10px;">
       <button class="btn btn btn-link btn-sm" onclick="amaternotutor_submit();">Cambiar</button></div>
       <div>Domicilio: ${doc.data().domiciliotutor}
       <input type="text" id="domiciliotutor" name="domiciliotutor" placeholder="NUEVO Domicilio, Calle y Número" style="width: 30%; margin-left:10px;">
       <button class="btn btn btn-link btn-sm" onclick="domiciliotutor_submit();">Cambiar</button></div>
       <div>Colonia: ${doc.data().coloniatutor}
       <input type="text" id="coloniatutor" name="coloniatutor" placeholder="NUEVA Colonia" style="width: 30%; margin-left:10px;">
       <button class="btn btn btn-link btn-sm" onclick="coloniatutor_submit();">Cambiar</button></div>
       <div>Código Postal: ${doc.data().cptutor}
       <input type="text" id="cptutor" name="cptutor" placeholder="NUEVO Código Postal" style="width: 30%; margin-left:10px;">
       <button class="btn btn btn-link btn-sm" onclick="cptutor_submit();">Cambiar</button></div>
       <div>Municipio: ${doc.data().mpiotutor}
       <input type="text" id="mpiotutor" name="mpiotutor" placeholder="NUEVO Municipio" style="width: 30%; margin-left:10px;">
       <button class="btn btn btn-link btn-sm" onclick="mpiotutor_submit();">Cambiar</button></div>
       <div>Tel. casa u oficna: ${doc.data().teltutor}
       <input type="text" id="teltutor" name="teltutor" placeholder="NUEVO Teléfono de Casa u Oficina" style="width: 30%; margin-left:10px;">
       <button class="btn btn btn-link btn-sm" onclick="teltutor_submit();">Cambiar</button></div>
       <div>Celular: ${doc.data().celtutor}
       <input type="text" id="celtutor" name="celtutor" placeholder="NUEVO Teléfono Celular" style="width: 30%; margin-left:10px;">
       <button class="btn btn btn-link btn-sm" onclick="celtutor_submit();">Cambiar</button></div>
       <div>Correo Electrónico: ${doc.data().mailtutor}
       <input type="text" id="mailtutor" name="mailtutor" placeholder="NUEVO Correo Electrónico" style="width: 30%; margin-left:10px;">
       <button class="btn btn btn-link btn-sm" onclick="mailtutor_submit();">Cambiar</button></div>
       <div>Red social: ${doc.data().redtutor}
       <input type="text" id="redtutor" name="redtutor" placeholder="NUEVA Red Social de Contacto" style="width: 30%; margin-left:10px;">
       <button class="btn btn btn-link btn-sm" onclick="redtutor_submit();">Cambiar</button></div>
       <div style="padding-top:20px;">
       <input type="button" class="btn btn-danger" value="Salir del Editor y Regresar" onclick="window.location.replace('user.html')"/>
       <div>- - - - - - - - - - - - - - - - - - - -  </div>
       <div style="margin-bottom:20px;"></div>`;
        //})
    })
   .catch(function(error) {
          console.error(error);
        });
 }    

  

//- - - - - - - - - - - - - - - - - - - - - - - - - - -//
      
      
  //- - - - - - - - -  update name menor- - - - - - - - - - - -//  
 
      var push_to_firebase = function(data){
      var db = firebase.firestore();

        db.collection("messages").doc(urlParams.get('ID')).update({
        namemenor: data["namemenor"], 
        })
   
       .then(function(docRef) {
            location.reload();
        })
        .catch(function(error) {
            console.error("Message could not be sent: ", error);
        });
      }
      var namemenor_submit = function(){
      var namemenor = document.getElementById("namemenor");
        
      var data = {
          "namemenor": namemenor.value,
        }
       push_to_firebase(data);
      };

  //- - - - - - - - -  update paterno menor- - - - - - - - - - - -//  
  var push_to_firebased = function(data){
      var db = firebase.firestore();

        db.collection("messages").doc(urlParams.get('ID')).update({
        apaternomenor: data["apaternomenor"], 
        })
   
       .then(function(docRef) {
            location.reload();
        })
        .catch(function(error) {
            console.error("Message could not be sent: ", error);
        });
      }
      var apaternomenor_submit = function(){
      var apaternomenor = document.getElementById("apaternomenor");
        
      var data = {
          "apaternomenor": apaternomenor.value,
        }
       push_to_firebased(data);
      };
 
 //- - - - - - - - -  update materno menor - - - - - - - - - - - -//  
  var push_to_firebasee = function(data){
      var db = firebase.firestore();

        db.collection("messages").doc(urlParams.get('ID')).update({
        amaternomenor: data["amaternomenor"], 
        })
   
       .then(function(docRef) {
            location.reload();
        })
        .catch(function(error) {
            console.error("Message could not be sent: ", error);
        });
      }
      var amaternomenor_submit = function(){
      var amaternomenor = document.getElementById("amaternomenor");
        
      var data = {
          "amaternomenor": amaternomenor.value,
        }
       push_to_firebasee(data);
      };

 //- - - - - - - - -  update edad menor - - - - - - - - - - - -//  
  var push_to_firebasef = function(data){
      var db = firebase.firestore();

        db.collection("messages").doc(urlParams.get('ID')).update({
        edadmenor: data["edadmenor"], 
        })
   
       .then(function(docRef) {
            location.reload();
        })
        .catch(function(error) {
            console.error("Message could not be sent: ", error);
        });
      }
      var edadmenor_submit = function(){
      var edadmenor = document.getElementById("edadmenor");
        
      var data = {
          "edadmenor": edadmenor.value,
        }
       push_to_firebasef(data);
      };

 //- - - - - - - - -  update CURP menor - - - - - - - - - - - -//  
  var push_to_firebaseg = function(data){
      var db = firebase.firestore();

        db.collection("messages").doc(urlParams.get('ID')).update({
        curpmenor: data["curpmenor"], 
        })
   
       .then(function(docRef) {
            location.reload();
        })
        .catch(function(error) {
            console.error("Message could not be sent: ", error);
        });
      }
      var curpmenor_submit = function(){
      var curpmenor = document.getElementById("curpmenor");
        
      var data = {
          "curpmenor": curpmenor.value,
        }
       push_to_firebaseg(data);
      };
 
 //- - - - - - - - -  update Nombre tutor - - - - - - - - - - - -//  
  var push_to_firebaseh = function(data){
      var db = firebase.firestore();

        db.collection("messages").doc(urlParams.get('ID')).update({
        nametutor: data["nametutor"], 
        })
   
       .then(function(docRef) {
            location.reload();
        })
        .catch(function(error) {
            console.error("Message could not be sent: ", error);
        });
      }
      var nametutor_submit = function(){
      var nametutor = document.getElementById("nametutor");
        
      var data = {
          "nametutor": nametutor.value,
        }
       push_to_firebaseh(data);
      };
      
 //- - - - - - - - -  paterno tutor - - - - - - - - - - - -//  
 var push_to_firebasei = function(data){
      var db = firebase.firestore();

        db.collection("messages").doc(urlParams.get('ID')).update({
        apaternotutor: data["apaternotutor"], 
        })
   
       .then(function(docRef) {
            location.reload();
        })
        .catch(function(error) {
            console.error("Message could not be sent: ", error);
        });
      }
      var apaternotutor_submit = function(){
      var apaternotutor = document.getElementById("apaternotutor");
        
      var data = {
          "apaternotutor": apaternotutor.value,
        }
       push_to_firebasei(data);
      };


 //- - - - - - - - -  materno tutor - - - - - - - - - - - -//  
 var push_to_firebasej = function(data){
      var db = firebase.firestore();

        db.collection("messages").doc(urlParams.get('ID')).update({
        amaternotutor: data["amaternotutor"], 
        })
   
       .then(function(docRef) {
            location.reload();
        })
        .catch(function(error) {
            console.error("Message could not be sent: ", error);
        });
      }
      var amaternotutor_submit = function(){
      var amaternotutor = document.getElementById("amaternotutor");
        
      var data = {
          "amaternotutor": amaternotutor.value,
        }
       push_to_firebasej(data);
      };

 //- - - - - - - - -  domicilio tutor - - - - - - - - - - - -//  
  var push_to_firebasek = function(data){
      var db = firebase.firestore();

        db.collection("messages").doc(urlParams.get('ID')).update({
        domiciliotutor: data["domiciliotutor"], 
        })
   
       .then(function(docRef) {
            location.reload();
        })
        .catch(function(error) {
            console.error("Message could not be sent: ", error);
        });
      }
      var domiciliotutor_submit = function(){
      var domiciliotutor = document.getElementById("domiciliotutor");
        
      var data = {
          "domiciliotutor": domiciliotutor.value,
        }
       push_to_firebasek(data);
      };

 //- - - - - - - - -  colonia tutor - - - - - - - - - - - -//  

  var push_to_firebasek = function(data){
      var db = firebase.firestore();

        db.collection("messages").doc(urlParams.get('ID')).update({
        coloniatutor: data["coloniatutor"], 
        })
   
       .then(function(docRef) {
            location.reload();
        })
        .catch(function(error) {
            console.error("Message could not be sent: ", error);
        });
      }
      var coloniatutor_submit = function(){
      var coloniatutor = document.getElementById("coloniatutor");
        
      var data = {
          "coloniatutor": coloniatutor.value,
        }
       push_to_firebasek(data);
      };

 //- - - - - - - - -  cp tutor - - - - - - - - - - - -//  
  var push_to_firebasel = function(data){
      var db = firebase.firestore();

        db.collection("messages").doc(urlParams.get('ID')).update({
        cptutor: data["cptutor"], 
        })
   
       .then(function(docRef) {
            location.reload();
        })
        .catch(function(error) {
            console.error("Message could not be sent: ", error);
        });
      }
      var cptutor_submit = function(){
      var cptutor = document.getElementById("cptutor");
        
      var data = {
          "cptutor": cptutor.value,
        }
       push_to_firebasel(data);
      };


 //- - - - - - - - -  mpio tutor - - - - - - - - - - - -//  
  var push_to_firebasem = function(data){
      var db = firebase.firestore();

        db.collection("messages").doc(urlParams.get('ID')).update({
        mpiotutor: data["mpiotutor"], 
        })
   
       .then(function(docRef) {
            location.reload();
        })
        .catch(function(error) {
            console.error("Message could not be sent: ", error);
        });
      }
      var mpiotutor_submit = function(){
      var mpiotutor = document.getElementById("mpiotutor");
        
      var data = {
          "mpiotutor": mpiotutor.value,
        }
       push_to_firebasem(data);
      };


 //- - - - - - - - -  tel casa - - - - - - - - - - - -//  
  var push_to_firebasen = function(data){
      var db = firebase.firestore();

        db.collection("messages").doc(urlParams.get('ID')).update({
        teltutor: data["teltutor"], 
        })
   
       .then(function(docRef) {
            location.reload();
        })
        .catch(function(error) {
            console.error("Message could not be sent: ", error);
        });
      }
      var teltutor_submit = function(){
      var teltutor = document.getElementById("teltutor");
        
      var data = {
          "teltutor": teltutor.value,
        }
       push_to_firebasen(data);
      };

 //- - - - - - - - -  cel tutor - - - - - - - - - - - -//  
  var push_to_firebasew = function(data){
      var db = firebase.firestore();

        db.collection("messages").doc(urlParams.get('ID')).update({
        celtutor: data["celtutor"], 
        })
   
       .then(function(docRef) {
            location.reload();
        })
        .catch(function(error) {
            console.error("Message could not be sent: ", error);
        });
      }
      var celtutor_submit = function(){
      var celtutor = document.getElementById("celtutor");
        
      var data = {
          "celtutor": celtutor.value,
        }
       push_to_firebasew(data);
      };

 //- - - - - - - - -  mail tutor - - - - - - - - - - - -//  
  var push_to_firebaseu = function(data){
      var db = firebase.firestore();

        db.collection("messages").doc(urlParams.get('ID')).update({
        mailtutor: data["mailtutor"], 
        })
   
       .then(function(docRef) {
            location.reload();
        })
        .catch(function(error) {
            console.error("Message could not be sent: ", error);
        });
      }
      var mailtutor_submit = function(){
      var mailtutor = document.getElementById("mailtutor");
        
      var data = {
          "mailtutor": mailtutor.value,
        }
       push_to_firebaseu(data);
      };

 //- - - - - - - - -  reed tutor - - - - - - - - - - - -//  
var push_to_firebaserr = function(data){
      var db = firebase.firestore();

        db.collection("messages").doc(urlParams.get('ID')).update({
        redtutor: data["redtutor"], 
        })
   
       .then(function(docRef) {
            location.reload();
        })
        .catch(function(error) {
            console.error("Message could not be sent: ", error);
        });
      }
      var redtutor_submit = function(){
      var redtutor = document.getElementById("redtutor");
        
      var data = {
          "redtutor": redtutor.value,
        }
       push_to_firebaserr(data);
      };



function login() {
  var email = document.getElementById("email_login").value;
  var password = document.getElementById("password_login").value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorCode , " -" + errorMessage)
  });email-password.html
}

function observer(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      show(user);
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
      console.log(`Usuario activo: ${email}, Estado: ${emailVerified}`)
      get_user(email)
        
    } else {
      console.log('Ningun Usuario Activo')
      content.innerHTML = `
      <div class="container mt-5">
        <div class="card">
          <h5 class="card-header">Saliendo....</h5>
          </div></div></div>`;       
      // User is signed out.
      // ...
    }
  });
}
observer();

function singOut(){
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log(' Saliendo... ')
location.href = 'index.html'      
  }).catch(function(error) {
    // An error happened.
    var errorCode = error.code;
    var errorMessage = error.message;
      // ...
    console.log(' Codigo de error (${errorCode}), Mensaje de error (${errorMessage})')
  });
}

function verification(){
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    // Email sent.
    console.log(`Enviando correo...`);
  }).catch(function(error) {
    // An error happened.
    console.log(`Error (${error})`);

  });
}

function show(user) {
  var user = user;
  var content = document.getElementById('content');

  if (user.emailVerified) {
    content.innerHTML = `
      <div class="container mt-5">
        <div class="card">
          <h3 class="card-header">EDITANDO REGISTRO</h3>
            <div id="todosd" class="shadow-none p-3 mb-5 bg-light rounded">
            </div>
          </div>
        </div>
      </div>
    `;
  }else{
    content.innerHTML = `
      <div class="container mt-5">
        <div class="card">
          <h5 class="card-header">Bienvenido ${user.email}</h5>
          <div class="card-body">
            <p class="card-text">Ingresa a tu cuenta de correo registrada y verifica tu cuenta por favor.</p> 
         
          
 <button class="btn btn-outline-dark" onclick="singOut()">Haz Click Aquí Si Deseas Cerrar Esta Sesión</button>
             </div>     
          </div>
        </div>
      </div>
    `;
  }
}
