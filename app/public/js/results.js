function populateTable(data) {
  for (var i = 0; i < data.length; i++) {
    $("#student-details").append("<tr><td>" + data[i].student_id + "</td><td>" + data[i].first_name + "</td><td>" + data[i].last_name + "</td><td>" + data[i].DOB + "</td><td>" + data[i].address + "</td><td>" + data[i].city + "</td><td>" + data[i].county + "</td><td>" + data[i].state + "</td><td>" + data[i].zip + "</td></tr>");
  }
};

// Show all data from db on page load
$(document).ready(function () {
  $.get("/api", function (data) {
    populateTable(data);
  });
});


// When user searches (clicks Search button)
$("#search-submit").on("click", function (event) {
  event.preventDefault();

  var field = $("#db-fields").val();
  var operator = $("#operators").val();
  var searched = $("#search-text").val();


});


