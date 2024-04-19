const firebaseConfig = {
    apiKey: "AIzaSyC_awxjnQKlwMEKR7mlsw2_MWL_oA5isok",
    authDomain: "info1601-project-webapp.firebaseapp.com",
    projectId: "info1601-project-webapp",
    storageBucket: "info1601-project-webapp.appspot.com",
    messagingSenderId: "555219896879",
    appId: "1:555219896879:web:f7f9cd4c7db13ac4e8d4da",
    measurementId: "G-L2JSGBD381"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
export default firebaseConfig;

const auth = firebase.auth()
const database = firebase.database()

function register(){
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  username = document.getElementById('username').value

  if(validate_email(email) == false || validate_password(password) == false){
    alert('Email or Password is invalid')
    return
  }
  if(validate_field(username) == false){
    alert("Username field is empty")
    return
  }

  auth.createUserWithEmailAndPassword(email, password)
  .then(function(){

    var user = auth.currentUser

    var database_ref = database.ref()

    var user_data = {
      email : email,
      username : username,
      last_login : Date.now()
    }
    database_ref.child('users/' + user.uid).set(user_data)

    
    alert("User Created!")
  })
  .catch(function(error){
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}

function validate_email(email){
 expression = '/^[^@]+@\w+(\.\w+)+\w$/'
  if(expression.test(email) == true){
    return true;
  }
  else{
    return false;
  }
}

function validate_password(password){
  if(password < 6){
    return false;
  }
  else{
    return true;
  }
}

function validate_field(field){
  if(field == null){
    return false
  }

  if(field.length <= 0){
    return false
  }
  else{
    return CSSStyleRule
  }
}