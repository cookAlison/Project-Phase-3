/*
  The purpose of this file is to provide a means for the client to
  interact with the server via endpoints for POST and GET requests.

  post() and get() are called by the "upload" and "download" buttons respectively

  Author: Terry Goldsmith
  Completed & integrated by: Alex, Alison (Group Leader), Natalie, and Charis
*/

// Define the base URL for the server
const SERVER_URL = "http://ugdev.cs.smu.ca:4200"; // Adjusted port number

/*
  The purpose of this function is to POST a JSON object to the
  server at the relative endpoint /myPost.

  Author: Terry Goldsmith
  Completed by: Alison & Alex
*/
function post() {
  // Retrieve user data
  let userData = localStorage.getItem("userData");

  // Check if userData is not empty
  if (userData) {
    // Attempt to POST userData to endpoint http://ugdev.cs.smu.ca:4200/myPost
    $.ajax({
      url: SERVER_URL + "/myPost",
      type: "POST",
      contentType: "application/json", // Specify JSON content type
      data: userData,
      success: successPost,
      error: errorFn
    });
  } else {
    console.log("No user data found in localStorage.");
  }

  // Repopulate form fields after successful post
  function successPost(response) {
    try {
      console.log("User Data Posted Successfully:", response);
      // Call repopulateFields() to update form fields
      repopulateFields(response);
    } catch (error) {
      console.log("Error parsing user data:", error);
    }
  }
}

/*
  The purpose of this function is to GET a JSON object from the
  server at the relative endpoint /myGet.

  Author: Terry Goldsmith
  Completed by: Alison & Alex 
*/
function get() {
  // Attempt to GET a JSON object from endpoint http://ugdev.cs.smu.ca:4200/myGet
  // If the middleware for this endpoint ran without error, call successFn
  // Otherwise, call errorFn
  $.get(SERVER_URL + "/myGet", successGet).fail(errorFn); // Update endpoint to /myGet

  // Log a message when attempting to download user data
  console.log("Attempting to download user data...");
}

/*
  The purpose of this function is to log the JSON object received
  from the server and put it in local storage.

  userData - contains the JSON object returned by the server

  Author: Terry Goldsmith
  Completed by: Alison & Alex 
*/
function successGet(userData) {
  try {
    // Check if userData is not empty
    if (userData && typeof userData === 'object' && Object.keys(userData).length > 0) {
      // Save userData to local storage
      localStorage.setItem("userData", JSON.stringify(userData));
      
      // Print the user's data to the console
      console.log("User Data:", userData);
      
      // Repopulate the form fields with the retrieved data
      repopulateFields(userData);
    } else {
      console.log("Received empty or invalid user data.");
    }
  } catch (error) {
    console.log("Error parsing or handling user data:", error);
  }
}

/*
  The purpose of this function is to repopulate input fields and radio buttons
  with data from the userData object.

  userData - contains the JSON object returned by the server

  Author: Alex
*/
function repopulateFields(userData) {
  // Log the received user data
  console.log("Repopulating fields with userData:", userData);

  // Repopulate input fields with userData
  $('#userInputName').val(userData.userInputName || "");
  $('#userInputEmail').val(userData.userInputEmail || "");
  $('#userInputPhone').val(userData.userInputPhone || "");
  $('#userInputStreet').val(userData.userInputStreet || "");
  $('#userInputAddress2').val(userData.userInputAddress2 || "");
  $('#userInputCountry').val(userData.userInputCountry || "");
  $('#userInputCity').val(userData.userInputCity || "");
  $('#userInputProvince').val(userData.userInputProvince || "");
  $('#userInputPostalCode').val(userData.userInputPostalCode || "");

  // Repopulate other input fields
  $('#firstName').val(userData.firstName || "");
  $('#middleName').val(userData.middleName || "");
  $('#lastName').val(userData.lastName || "");
  $('#birthMonth').val(userData.birthMonth || "");
  $('#birthDay').val(userData.birthDay || "");
  $('#birthYear').val(userData.birthYear || "");
  $('#deathMonth').val(userData.deathMonth || "");
  $('#deathDay').val(userData.deathDay || "");
  $('#deathYear').val(userData.deathYear || "");
  $('#epitaph').val(userData.epitaph || "");

  // Repopulate radio buttons
  $('input[name="location"][value="' + userData.location + '"]').prop('checked', true);
  $('input[name="container"][value="' + userData.container + '"]').prop('checked', true);
  $('input[name="engravedImage"][value="' + userData.engravedImage + '"]').prop('checked', true);
  $('input[name="stoneOption"][value="' + userData.stoneOption + '"]').prop('checked', true);
  $('input[name="woodOption"][value="' + userData.woodOption + '"]').prop('checked', true);
  $('input[name="woodShape"][value="' + userData.woodShape + '"]').prop('checked', true);
  $('input[name="plantOption"][value="' + userData.plantOption + '"]').prop('checked', true);
  $('input[name="treeOption"][value="' + userData.treeOption + '"]').prop('checked', true);
  $('input[name="bushOption"][value="' + userData.bushOption + '"]').prop('checked', true);
  $('input[name="wildflowerOption"][value="' + userData.wildflowerOption + '"]').prop('checked', true);
}

/*
  The purpose of this function is to log the error.s

  err - the error object returned by the server

  Author: Terry Goldsmith
*/
function errorFn(err) {
  console.log(err.responseText);
}
