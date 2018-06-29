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

    $(".submit").on("click", function(event) {
        event.preventDefault();
  
        name = $(".employee-name").val().trim();
        role = $(".role").val().trim();
        date = $("start-date").val().trim();
        rate = $(".monthly-rate").val().trim();
  
        database.ref().set({
          name: name,
          role: role,
          date: date,
          rate: rate
        });
  
      });
    





  });