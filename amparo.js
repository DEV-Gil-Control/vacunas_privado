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
       var nompadre = document.getElementById("nompadre");
       nompadre.innerHTML = `<div>${doc.data().nametutor} ${doc.data().apaternotutor} ${doc.data().amaternotutor}</div>
       `;  
       var nommenor = document.getElementById("nommenor");
       nommenor.innerHTML = `<div>${doc.data().namemenor} ${doc.data().apaternomenor} ${doc.data().amaternomenor}</div>
       `;
      var quejoso = document.getElementById("quejoso");
       quejoso.innerHTML = `<div>${doc.data().nametutor} ${doc.data().apaternotutor} ${doc.data().amaternotutor}</div>
       `;  
       var diramparo = document.getElementById("diramparo");
       diramparo.innerHTML = `<div>${doc.data().domiciliotutor} ${doc.data().coloniatutor} ${doc.data().mpiotutor}</div>
       `; 
      var curpamparo = document.getElementById("curpamparo");
       curpamparo.innerHTML = `<div>${doc.data().curpmenor}</div>
       `; 
       var nommenor2 = document.getElementById("nommenor2");
       nommenor2.innerHTML = `<div>${doc.data().namemenor} ${doc.data().apaternomenor} ${doc.data().amaternomenor}</div>
       `;
      var nommenor3 = document.getElementById("nommenor3");
       nommenor3.innerHTML = `<div>${doc.data().namemenor} ${doc.data().apaternomenor} ${doc.data().amaternomenor}</div>
       `;
      var nommenor4 = document.getElementById("nommenor4");
       nommenor4.innerHTML = `<div>${doc.data().namemenor} ${doc.data().apaternomenor} ${doc.data().amaternomenor}</div>
       `;
      var nommenor5 = document.getElementById("nommenor5");
       nommenor5.innerHTML = `<div>${doc.data().namemenor} ${doc.data().apaternomenor} ${doc.data().amaternomenor}</div>
       `;
      var nommenor6 = document.getElementById("nommenor6");
       nommenor6.innerHTML = `<div>${doc.data().namemenor} ${doc.data().apaternomenor} ${doc.data().amaternomenor}</div>
       `;
            var nommenor7 = document.getElementById("nommenor7");
       nommenor7.innerHTML = `<div>${doc.data().namemenor} ${doc.data().apaternomenor} ${doc.data().amaternomenor}</div>
       `;
      
            var nommenor8 = document.getElementById("nommenor8");
       nommenor8.innerHTML = `<div>${doc.data().namemenor} ${doc.data().apaternomenor} ${doc.data().amaternomenor}</div>
       `;
      
            var nommenor9 = document.getElementById("nommenor9");
       nommenor9.innerHTML = `<div>${doc.data().namemenor} ${doc.data().apaternomenor} ${doc.data().amaternomenor}</div>
       `;
      
            var nommenor10 = document.getElementById("nommenor10");
       nommenor10.innerHTML = `<div>${doc.data().namemenor} ${doc.data().apaternomenor} ${doc.data().amaternomenor}</div>
       `;
      
      var nacemenor = document.getElementById("nacemenor");
       nacemenor.innerHTML = `<div>${doc.data().ciudadmenor}, ${doc.data().estadomenor}</div>
       `;
      var edadelmenor = document.getElementById("edadelmenor");
       edadelmenor.innerHTML = `<div>${doc.data().edadmenor}</div>
       `;
      
        //})
    })
   .catch(function(error) {
          console.error(error);
        });
 }    

  

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//

//- - - - - - - - -  push data - - - - - - - - - - - -//

var push_to_firebase = function(data){
        alert("Registro creado exitosamente, continúa para descargar el documento")
        var db = firebase.firestore();

        db.collection("messages").add({
            email: data["email"],
            namemenor: data["namemenor"],
           edadmenor: data["edadmenor"],
            apaternomenor: data["apaternomenor"],
            amaternomenor: data["amaternomenor"],
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
           var email = document.getElementById("email");
        var namemenor = document.getElementById("namemenor");
         var edadmenor = document.getElementById("edadmenor");
        var apaternomenor = document.getElementById("apaternomenor");
        var amaternomenor = document.getElementById("amaternomenor");
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

        var data = {
            "email": email.value,
          "namemenor": namemenor.value,
           "edadmenor": edadmenor.value,
          "apaternomenor": apaternomenor.value,
          "amaternomenor": amaternomenor.value,
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
            "redtutor": redtutor.value
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
    <div id="nompadre"></div>
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
