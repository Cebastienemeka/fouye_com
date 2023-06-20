// Initialize Firebase
var firebaseConfig = {
    // apiKey: "YOUR_API_KEY",
    // authDomain: "YOUR_AUTH_DOMAIN",
    // databaseURL: "YOUR_DATABASE_URL",
    // projectId: "YOUR_PROJECT_ID",
    // storageBucket: "YOUR_STORAGE_BUCKET",
    // messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    // appId: "YOUR_APP_ID"

    apiKey: "AIzaSyB5JQFKdbLPrnyNmzmvZIZMkrfEeSc85vo",
    authDomain: "fuoye-com-fdc20.firebaseapp.com",
    projectId: "fuoye-com-fdc20",
    storageBucket: "fuoye-com-fdc20.appspot.com",
    messagingSenderId: "245200227477",
    appId: "1:245200227477:web:d4ecd90256dbefd4d95f9c",
    measurementId: "G-PGMZG7HLBL"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Reference to the Firebase Realtime Database
  var database = firebase.database();
  
  // Signup form submission
  var form = document.getElementById('signup-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get user input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Create a new user in the database
    var usersRef = database.ref('users');
    var newUserRef = usersRef.push();
    newUserRef.set({
      name: name,
      email: email,
      password: password
    })
    .then(function() {
      alert('Signup successful!');
      // Reset the form
      form.reset();
    })
    .catch(function(error) {
      alert('Signup failed. Error: ' + error.message);
    });
  });
