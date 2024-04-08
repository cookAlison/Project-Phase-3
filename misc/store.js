/*
    Purpose:    Save user input to JSON object, store data in 
                browser storage, and download user's data. 

    Authors:    Charis 
    Editor:     Alex (added: local browser storage & error handling,
        paired coding with author to add radio button values to JSON object)
              
*/

document.addEventListener("DOMContentLoaded", function () {
  // Save user input to local storage and generate downloadable JSON file
  var jsonBtn = document.getElementById("jsonbtn");

  // Add click event listener to the button
  jsonBtn.addEventListener("click", function () {
    try {
      // Get references for input fields (Personal Information)
      var fullName = document.getElementById("userInputName");
      var email = document.getElementById("userInputEmail");
      var phoneNumber = document.getElementById("userInputPhone");
      var address = document.getElementById("userInputStreet");
      var secAddress = document.getElementById("userInputAddress2");
      var city = document.getElementById("userInputCity");
      var province = document.getElementById("userInputProvince");
      var country = document.getElementById("userInputCountry");
      var postalCode = document.getElementById("userInputPostalCode");

      // Error handling for required fields
      if (!fullName.value || !email.value || !phoneNumber.value || !address.value || !city.value || !province.value || !country.value || !postalCode.value) {
        throw new Error("Please fill in all required fields.");
      }

      // Get references for input fields
      var firstName = document.getElementById("firstName").value;
      var middleName = document.getElementById("middleName").value;
      var lastName = document.getElementById("lastName").value;
      var birthMonth = document.getElementById("birthMonth").value;
      var birthDay = document.getElementById("birthDay").value;
      var birthYear = document.getElementById("birthYear").value;
      var deathMonth = document.getElementById("deathMonth").value;
      var deathDay = document.getElementById("deathDay").value;
      var deathYear = document.getElementById("deathYear").value;
      var epitaph = document.getElementById("epitaph").value;

      // Get the selected values of radio buttons with error handling
      var containerTypeRadio = document.querySelector('input[name="container"]:checked');
      var locationChoiceRadio = document.querySelector('input[name="location"]:checked');
      var engravedImageRadio = document.querySelector('input[name="engravedImage"]:checked'); // Corrected ID
      var stoneOptionRadio = document.querySelector('input[name="stoneOption"]:checked');
      var woodOptionRadio = document.querySelector('input[name="woodOption"]:checked');
      var woodShapeRadio = document.querySelector('input[name="logOrPlank"]:checked');
      var plantOptionRadio = document.querySelector('input[name="plantOption"]:checked');
      var treeOptionRadio = document.querySelector('input[name="treeOption"]:checked');
      var bushOptionRadio = document.querySelector('input[name="bushOption"]:checked');
      var wildflowerOptionRadio = document.querySelector('input[name="wildflowerOption"]:checked');

      // Check if radio buttons are null before accessing properties
      var containerType = containerTypeRadio ? containerTypeRadio.value : "";
      var locationChoice = locationChoiceRadio ? locationChoiceRadio.value : "";
      var engravedImage = engravedImageRadio ? engravedImageRadio.value : "";
      var stoneOption = stoneOptionRadio ? stoneOptionRadio.value : "";
      var woodOption = woodOptionRadio ? woodOptionRadio.value : "";
      var woodShape = woodShapeRadio ? woodShapeRadio.value : "";
      var plantOption = plantOptionRadio ? plantOptionRadio.value : "";
      var treeOption = treeOptionRadio ? treeOptionRadio.value : "";
      var bushOption = bushOptionRadio ? bushOptionRadio.value : "";
      var wildflowerOption = wildflowerOptionRadio ? wildflowerOptionRadio.value : "";

      // Store data in JavaScript object
      var data = {
        "userInputName": fullName.value,
        "userInputEmail": email.value,
        "userInputPhone": phoneNumber.value,
        "userInputStreet": address.value,
        "userInputAddress2": secAddress.value,
        "userInputCity": city.value,
        "userInputCountry": country.value,
        "userInputProvince": province.value,
        "userInputPostalCode": postalCode.value,
        "location": locationChoice,
        "container": containerType,
        "firstName": firstName,
        "middleName": middleName,
        "lastName": lastName,
        "birthMonth": birthMonth,
        "birthDay": birthDay,
        "birthYear": birthYear,
        "deathMonth": deathMonth,
        "deathDay": deathDay,
        "deathYear": deathYear,
        "epitaph": epitaph,
        "engravedImage": engravedImage,
        "stoneOption": stoneOption,
        "woodOption": woodOption,
        "woodShape": woodShape,
        "plantOption": plantOption,
        "treeOption": treeOption,
        "bushOption": bushOption,
        "wildflowerOption": wildflowerOption,
      };

      // Convert JavaScript object to JSON string
      var jsonString = JSON.stringify(data, null, 2); // Adding null and 2 to format JSON nicely

      // Save JSON string to local storage
      localStorage.setItem("userData", jsonString);

      // log JSON string to console
      console.log(jsonString);

      // Notify user
      alert("Submitted successfully");
    } catch (error) {
      // Display error message to the user
      alert("An error occurred: " + error.message);
    }
  });
});

//----------------------------------Client Upload Download-------------------------------------------
/**
* Purpose: Provide functions to upload and download the user data to and from
*          the server at the client's command.
* 
* Author:     Terry Goldsmith
* Adapted by:  Alison & Natalie
* 
* This code was taken from the course lectures and adapted.
*/

// define the base URL for the server
const SERVER_URL = "http://ugdev.cs.smu.ca:4200";

// TODO: assign this an object with the default values for all the fields
const defaultData = {
  "userInputName": "Jane Doe",
  "userInputEmail": "Jane.doe@gmail.com",
  "userInputPhone": "(123)-456-7890",
  "userInputStreet": "123 Street",
  "userInputAddress2": "",
  "userInputCity": "Halifax",
  "userInputCountry": "Canada",
  "userInputProvince": "Nova Scotia",
  "userInputPostalCode": "A1B 2C3",
  "location": "Woods",
  "container": "Biodegradable-box",
  "firstName": "John",
  "middleName": "M",
  "lastName": "Doe",
  "birthMonth": "January",
  "birthDay": "1",
  "birthYear": "2000",
  "deathMonth": "January",
  "deathDay": "1",
  "deathYear": "2024",
  "epitaph": "N/A",
  "engravedImage": "No",
  "stoneOption": "N/A",
  "woodOption": "N/A",
  "woodShape": "N/A",
  "plantOption": "N/A",
  "treeOption": "N/A",
  "bushOption": "N/A",
  "wildflowerOption": "N/A",
};

module.exports.defaultData = defaultData;

/*
The purpose of this function is to POST a JSON object to the
server at the relative endpoint /postUserData.

Author: Terry Goldsmith
Adapted by: Alison & Natalie
*/
function post() {
  let dataToPost = data;
  $.post(SERVER_URL + "/postUserData", dataToPost, successFn).fail(errorFn);
}

/*
The purpose of this function is to GET a JSON object from the
server at the relative endpoint /getUserData.

Author: Terry Goldsmith
Adapted by: Alison & Natalie
*/
function get() {
  $.get(SERVER_URL + "/getUserData", successFn).fail(errorFn);
}

/*
The purpose of this function is to log the JSON object received
from the server.

returnedData - contains the JSON object returned by the server

Author: Terry Goldsmith
Adapted by: Alison & Natalie
*/

// returnedData could be called anything at all
function successFn(returnedData) {
  downloadedData = returnedData;
  console.log(returnedData);
}

/*
The purpose of this function is to log the error.

err - the error object returned by the server

Author: Terry Goldsmith
*/
function errorFn(err) {
  console.log(err.responseText);
}
