var firebaseConfig = {
    apiKey: "AIzaSyCzGaO9ANXzUqAZzmaf_b1_svfZSlwv_x8",
    authDomain: "contact-form-2f91d.firebaseapp.com",
    databaseURL: "https://contact-form-2f91d.firebaseio.com",
    projectId: "contact-form-2f91d",
    storageBucket: "contact-form-2f91d.appspot.com",
    messagingSenderId: "192005804170",
    appId: "1:192005804170:web:247f27aca7aa6c00d71d73",
    measurementId: "G-1T7LD09YRJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.database();

// Reference messages collection
var messagesRef = firebase.database().ref('contactdetails');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e) {
    e.preventDefault();

    //get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    saveMessage(name, company, email, phone, message);

    //Show alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 3 seconds
    setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';    
    },3000);

    //Clear form
    document.getElementById('contactForm').reset()
}

//function to get form values

function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase

function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    })
}