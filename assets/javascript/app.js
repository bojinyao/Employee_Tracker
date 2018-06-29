var config = {
    apiKey: "AIzaSyCNj9Lc04gsBw-CeP4C0HZ9-k-qye4y2Rk",
    authDomain: "employee-data-management-bebe7.firebaseapp.com",
    databaseURL: "https://employee-data-management-bebe7.firebaseio.com",
    projectId: "employee-data-management-bebe7",
    storageBucket: "",
    messagingSenderId: "693263172630"
  };
  firebase.initializeApp(config);


  function changeDateToSec(myDate) {
    // var myDate="26-02-2012";
    // 2001-01-29
    let dateList = myDate.split("-");
    let newDate = dateList[1]+"/"+dateList[2]+"/"+dateList[0];
    return new Date(newDate);
  }

  function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}
  
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
          rate: rate,
          dateAdded: firebase.database.ServerValue.TIMESTAMP,
        });
  
      });
    

      database.ref().on("child_added", function(childSnapshot) {

        console.log(childSnapshot.val());
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().role);
        console.log(childSnapshot.val().date);
        console.log(childSnapshot.val().rate);
        console.log(childSnapshot.val().dateAdded);
  
        // $("#name-display").text(childSnapshot.val().name);
        // $("#email-display").text(childSnapshot.val().email);
        // $("#age-display").text(childSnapshot.val().age);
        // $("#comment-display").text(childSnapshot.val().comment);
  
        // Handle the errors

        let startDate = changeDateToSec(childSnapshot.val().date);
        let currDate = new Date(childSnapshot.val().dateAdded);
        
        let monthDiff = monthDiff(startDate, currDate);
        console.log(monthDiff);


      }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      });




  });