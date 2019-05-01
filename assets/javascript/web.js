
var countDownDate = new Date("June 15, 2019 9:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "WERE OPEN";
  }
}, 1000);

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

