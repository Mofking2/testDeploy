// script.js
document.addEventListener('DOMContentLoaded', function () {
  // Get the form element
  var form = document.getElementById('myForm');

  // Get the submit button
  var submitBtn = document.getElementById('submitBtn');

  // Add event listener to the submit button
  submitBtn.addEventListener('click', function () {
    event.preventDefault();
    // Get the values of the input fields
    var firstName = document.getElementById('firstName').value;
    var email = document.getElementById('email').value;

    // Display the values on the console
    console.log('First Name:', firstName);
    console.log('Email:', email);
  });
});
