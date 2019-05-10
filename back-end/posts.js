function checkPass() {
    var confirmPassword = "pandulce";
    var password = document.getElementById("pass").value;
    if (password == confirmPassword) {
         window.location="updates.html";
    }
    else{
        alert("Passwords do not match.");
    }
}

// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyCumztwvFnlc-7_yRaGM5VwWlrT8JIdGYQ",
    authDomain: "victoriabakery-e22a9.firebaseapp.com",
    databaseURL: "https://victoriabakery-e22a9.firebaseio.com",
    storageBucket: "victoriabakery-e22a9.appspot.com"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  // 2. Button for adding Employees
  $("#add-employee-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var headline = $("#headline-input").val().trim();
    var news = $("#news-input").val().trim();
   
    // Creates local "temporary" object for holding employee data
    var newsUpdate = {
      headline: headline,
     news: news,
    };
  
    // Uploads employee data to the database
    database.ref().push(newsUpdate);
  
    // Logs everything to console
    console.log(newsUpdate.headline);
    console.log(newsUpdate.news);
   
  
    alert("News Update Successfully Posted");
  
    // Clears all of the text-boxes
    $("#headline-input").val("");
    $("#news-input").val("");
  
  });
  
  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var headline = childSnapshot.val().headline;
    var news = childSnapshot.val().news;
  
    // Employee Info
    console.log(headline);
    console.log(news);
  
  
    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(headline),
      $("<td>").text(news),
    );
  
    // Append the new row to the table
    $("#employee-table > tbody").append(newRow);

    $("#Headline").text(headline);
    $("#News").text(news);

  });
  
  