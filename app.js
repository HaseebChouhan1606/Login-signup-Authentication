import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";


// Initialize Firebase
const app = initializeApp({
    apiKey: "AIzaSyCkNLCWS-gJ60YiOyliXLRq1QiZrd3PC4s",
    authDomain: "jawanpak-fmp.firebaseapp.com",
    projectId: "jawanpak-fmp",
    storageBucket: "jawanpak-fmp.appspot.com",
    messagingSenderId: "1025576266481",
    appId: "1:1025576266481:web:d6b26b963bf2c977745750"
  });


const auth = getAuth();


SignUP.addEventListener('click', (e) => {
    var email = document.getElementById('semail').value;
    var password = document.getElementById('spassword').value;

    console.log(`Email : ${email} and Password : ${password}`)

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

})


SignIN.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log(`Email : ${email} and Password : ${password}`)


    
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // alert("Success")

            window.location.replace('/app.html')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    
})