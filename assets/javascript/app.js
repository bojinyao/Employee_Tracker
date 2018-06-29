var config = {
    apiKey: "AIzaSyCNj9Lc04gsBw-CeP4C0HZ9-k-qye4y2Rk",
    authDomain: "employee-data-management-bebe7.firebaseapp.com",
    databaseURL: "https://employee-data-management-bebe7.firebaseio.com",
    projectId: "employee-data-management-bebe7",
    storageBucket: "",
    messagingSenderId: "693263172630"
  };
  firebase.initializeApp(config);


  var database = firebase.database();
  $(document).ready(function() {

    $("#submit").on("click", function(event) {
        event.preventDefault();
  
        name = $("#name-input").val().trim();
        role = $("#role-input").val().trim();
        date = $("#start-date").val().trim();
        rate = $("#monthly-rate").val().trim();
  
        database.ref().push({
          name: name,
          role: role,
          date: date,
          rate: rate
        });
  
      });
    

      database.ref().on("value", function(snapshot) {

        console.log(snapshot.val());
        console.log(snapshot.val().name);
        console.log(snapshot.val().role);
        console.log(snapshot.val().date);
        console.log(snapshot.val().rate);
  
        // $("#name-display").text(snapshot.val().name);
        // $("#email-display").text(snapshot.val().email);
        // $("#age-display").text(snapshot.val().age);
        // $("#comment-display").text(snapshot.val().comment);
  
        // Handle the errors
      }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      });




  });