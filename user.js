//- - - - - - - get data- - - - - - - - - - - - //
function getdata() {
    var user=document.getElementById("messages").value;
    //firebase data retrieval function
    //path of your data
    //.once will get all your data in one time
    firebase.database().ref('messages').once('value').then(function (snapshot) {
        //here we will get data
        //enter your field name
        var name=snapshot.val().namemenor;
        var gender=snapshot.val().edadmenor;
        var country=snapshot.val().curpmenor;

        //now we have data in variables
        //now show them in our html

        document.getElementById("namemenor").innerHTML=nombre;
        document.getElementById("edadmenor").innerHTML=edad;
        document.getElementById("curpmenor").innerHTML=curp;
    })
}


//- - - - - - - - -  push data - - - - - - - - - - - -//

var push_to_firebase = function(data){
        alert("Registro creado exitosamente")
        var db = firebase.firestore();

        db.collection("messages").add({
            namemenor: data["namemenor"],
            apaternomenor: data["apaternomenor"],
            amaternomenor: data["amaternomenor"],
           edadmenor: data["edadmenor"], 
           curpmenor: data["curpmenor"],
              nametutor: data["nametutor"],
              apaternotutor: data["apaternotutor"],
              amaternotutor: data["amaternotutor"],
              domiciliotutor: data["domiciliotutor"],
              coloniatutor: data["coloniatutor"],
              cptutor: data["cptutor"],
              mpiotutor: data["mpiotutor"],
              teltutor: data["teltutor"],
              celtutor: data["celtutor"],
              redtutor: data["redtutor"],
              mailtutor: data["mailtutor"],
              email: data["email"],
            timestamp: Date.now()
        })
        .then(function(docRef) {
            console.log("Message sent, ID: ", docRef.id);
            location.reload();
        })
        .catch(function(error) {
            console.error("Message could not be sent: ", error);
        });
      }

      var contact_submit = function(){

        var namemenor = document.getElementById("namemenor");
        var apaternomenor = document.getElementById("apaternomenor");
        var amaternomenor = document.getElementById("amaternomenor");
         var edadmenor = document.getElementById("edadmenor");
        var curpmenor = document.getElementById("curpmenor"); 
          var nametutor = document.getElementById("nametutor");
          var apaternotutor = document.getElementById("apaternotutor");
          var amaternotutor = document.getElementById("amaternotutor");
          var domiciliotutor = document.getElementById("domiciliotutor");
          var coloniatutor = document.getElementById("coloniatutor");
          var cptutor = document.getElementById("cptutor");
          var mpiotutor = document.getElementById("mpiotutor");
          var teltutor = document.getElementById("teltutor");
          var celtutor = document.getElementById("celtutor");
          var redtutor = document.getElementById("redtutor");
         var mailtutor = document.getElementById("mailtutor");
         var email = document.getElementById("email");

        var data = {

          "namemenor": namemenor.value,
          "apaternomenor": apaternomenor.value,
          "amaternomenor": amaternomenor.value,
           "edadmenor": edadmenor.value,
          "curpmenor": curpmenor.value,
            "nametutor": nametutor.value,
            "apaternotutor": apaternotutor.value,
            "amaternotutor": amaternotutor.value,
            "domiciliotutor": domiciliotutor.value,
            "coloniatutor": coloniatutor.value,
            "cptutor": cptutor.value,
            "mpiotutor": mpiotutor.value,
            "teltutor": teltutor.value,
            "celtutor": celtutor.value,
            "redtutor": redtutor.value,
            "mailtutor": mailtutor.value,
           "email": email.value
        }
        push_to_firebase(data);
          

      }
      
    //  document.getElementById("submit_msg").addEventListener("click", contact_submit);


    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//

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
          <h5 class="card-header">Bienvenido, gracias participar en el Amparo Colectivo: Vacunas COVID-19 para menores de edad</h5>
            <div id="bientutor" style="margin-left:22px; margin-top:20px; font-weight: bold;">
            </div>
          <div class="card-body">
    <p>Name: <strong id="nombre"></strong></p>
    <p>Gender: <strong id="edad"></strong></p>
    <p>Country: <strong id="curp"></strong></p>
           </div>
              <div style="padding-top:20px;">
              <button class="btn btn-outline-dark" onclick="singOut()">Cerrar Sesión</button>
              </div>
          </div>
        </div>
      </div>
    `;
  }else{
    content.innerHTML = `
      <div class="container mt-5">
        <div class="card">
          <h5 class="card-header">Bienvenido, gracias participar en el Amparo Colectivo: Vacunas COVID-19 para menores de edad</h5>
            <div id="bientutor" style="margin-left:22px; margin-top:20px; font-weight: bold;">
            </div>
          <div class="card-body">
            <div id="menor" class="shadow-none p-3 mb-5 bg-light rounded">
            </div>
              <div style="padding-top:20px;">
              <p class="card-text">Ingresa a tu cuenta de correo registrada y verifica tu cuenta por favor.</p>
              <button class="btn btn-outline-dark" onclick="singOut()">Cerrar Sesión</button>
              </div>
          </div>
        </div>
      </div>
    `;
  }
}
