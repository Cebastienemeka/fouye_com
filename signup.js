// Get elements
var signupForm = document.getElementById("signup-form");
var loginForm = document.getElementById("login-form");
var logoutBtn = document.getElementById("logout-btn");

// Signup event
signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("signup-email").value;
  var password = document.getElementById("signup-password").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      console.log(error.message);
    });
});

// Login event
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      console.log(error.message);
    });
});

// Logout event
logoutBtn.addEventListener("click", function () {
  firebase.auth().signOut();
});

// Authentication state change
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in
    signupForm.style.display = "none";
    loginForm.style.display = "none";
    logoutBtn.style.display = "block";
  } else {
    // User is signed out
    signupForm.style.display = "block";
    loginForm.style.display = "block";
    logoutBtn.style.display = "none";
  }
});
