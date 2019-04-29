// Initialize Firebase
var config = {
    apiKey: "AIzaSyCumztwvFnlc-7_yRaGM5VwWlrT8JIdGYQ",
    authDomain: "victoriabakery-e22a9.firebaseapp.com",
    databaseURL: "https://victoriabakery-e22a9.firebaseio.com",
    projectId: "victoriabakery-e22a9",
    storageBucket: "victoriabakery-e22a9.appspot.com",
    messagingSenderId: "978610075284"
};
firebase.initializeApp(config);
var database=firebase.database();
//Contact Page
var contactName;
var contactEmail;
var contactSubject;
var contactMessage;

$("#contactSubmit").on("click",function(event){
    event.preventDefault();
    contactName=$("#contactName").val().trim();
    contactEmail=$("#contactEmail").val().trim();
    contactSubject=$("#contactSubject").val().trim();
    contactMessage=$("#contactMessage").val();
    
    database.ref().set({
        contactName:contactName,
        contactEmail:contactEmail,
        contactSubject:contactSubject,
        contactMessage:contactMessage
    });
});

database.ref().on("value", function(snapshot) {
    console.log(snapshot.val());
}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });