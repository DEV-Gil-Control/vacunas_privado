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
       <input type="text" id="namemenor" name="namemenor" placeholder="NUEVO Nombre de Niño/Niña" style="width: 50%; margin-left:10px;">
       </div>
       <div>Apellido paterno: ${doc.data().apaternomenor}</div>
       <div>Apellido Materno: ${doc.data().amaternomenor}</div>
       <div>Edad: ${doc.data().edadmenor}</div>
       <div>CURP: ${doc.data().curpmenor}</div>
       <div style="padding-top:20px;">
       <div><strong>Tutor registrado:</strong></div>
       <div>Nombre: ${doc.data().nametutor}</div>
       <div>Apellido paterno: ${doc.data().apaternotutor}</div>
       <div>Apellido materno: ${doc.data().amaternotutor}</div>
       <div>Domicilio: ${doc.data().domiciliotutor}</div>
       <div>Colonia: ${doc.data().teltutor}</div>
       <div>Municipio: ${doc.data().mpiotutor}</div>
       <div>Tel. casa u oficna: ${doc.data().teltutor}</div>
       <div>Celular: ${doc.data().celtutor}</div>
       <div>Correo Electrónico: ${doc.data().mailtutor}</div>
       <div>Red social: ${doc.data().redtutor}</div>
       <div style="padding-top:20px;">
       <button type="button" class="btn btn-dark">Cancelar</button>
       <button class="btn btn-warning btn-sm" onclick="contact_submit();">Guardar</button>
       <button type="button" class="btn btn-danger">FInalizar Edición</button>
       <div>- - - - - - - - - - - - - - - - - - - -  </div>
       <div style="margin-bottom:20px;"></div>`;
        //})
    })
   .catch(function(error) {
          console.error(error);
        });
 }    

  

//- - - - - - - - - - - - - - - - - - - - - - - - - - -//

//- - - - - - - - -  push data - - - - - - - - - - - -//



//- - - - - - - - - - - - - - - - - - - - - - - - - -//
      
      
  //- - - - - - - - -  update data - - - - - - - - - - - -//


   var get_user = function(email) {
   const urlParams = new URLSearchParams(window.location.search);
   const myParam = urlParams.get('ID');
   console.log(myParam);
   var db = firebase.firestore();
   db.collection("messages").doc(myParam)
   .get()
   .then((doc) => {
   console.log(doc.data());     
 
      var push_to_firebase = function(data){
      var db = firebase.firestore();

        db.collection("messages").doc("myParam").update({
        namemenor: data["namemenor"],
        })
      
   
        .then(function(docRef) {
            console.log("Message sent, ID: ", docRef.id);
            location.reload();
        })
        .catch(function(error) {
            console.error("Message could not be sent: ", error);
        });
      })

      var contact_submit = function(){

        var namemenor = document.getElementById("namemenor");
        
        var data = {

          "namemenor": namemenor.value
        }
       push_to_firebase(data);
          

      }
      
    //  document.getElementById("submit_msg").addEventListener("click", contact_submit);    
      

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
