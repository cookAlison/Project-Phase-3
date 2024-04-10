/*
  The purpose of this file is to provide a means for the client to
  interact with the server via endpoints for POST and GET requests.

  Author: Terry Goldsmith
*/

// Define the base URL for the server
const SERVER_URL = "http://ugdev.cs.smu.ca:4200"; // Adjusted port number

/*
  The purpose of this function is to retrieve user data.

  Author: Terry Goldsmith
*/
function retrieveUserData() {
  // Retrieve user data from local storage or any other source
  // For demonstration, I'll return a sample JSON object similar to storage.js

  return {
    "userInputName": "Alex",
    "userInputEmail": "abc@gmail.com",
    "userInputPhone": "8888888888",
    "userInputStreet": "15 Queen St.",
    "userInputAddress2": "",
    "userInputCity": "Halifax",
    "userInputCountry": "Canada",
    "userInputProvince": "NS",
    "userInputPostalCode": "B3N3M9",
    "location": "field",
    "container": "biodegradable-box",
    "firstName": "",
    "middleName": "",
    "lastName": "",
    "birthMonth": "",
    "birthDay": "",
    "birthYear": "",
    "deathMonth": "",
    "deathDay": "",
    "deathYear": "",
    "epitaph": "",
    "engravedImage": "",
    "stoneOption": "",
    "woodOption": "",
    "woodShape": "",
    "plantOption": "",
    "treeOption": "",
    "bushOption": "",
    "wildflowerOption": ""
  };
}

/*
  The purpose of this function is to POST a JSON object to the
  server at the relative endpoint /myPost.

  Author: Terry Goldsmith
*/
function post() {
  // Retrieve user data
  let userData = retrieveUserData();

  // attempt to POST userData to endpoint http://ugdev.cs.smu.ca:4200/myPost
  // if (the middleware for this endpoint ran without error)
  //   call successFn
  // else
  //   call errorFn
  $.post(SERVER_URL + "/myPost", userData, successFn).fail(errorFn);
}

/*
  The purpose of this function is to GET a JSON object from the
  server at the relative endpoint /myGet.

  Author: Terry Goldsmith
*/
function get() {
  // attempt to GET a JSON object from endpoint http://ugdev.cs.smu.ca:4200/myGet
  // if (the middleware for this endpoint ran without error)
  //   call successFn
  // else
  //   call errorFn
  $.get(SERVER_URL + "/myGet", successFn).fail(errorFn);
}

/*
  The purpose of this function is to log the JSON object received
  from the server.

  returnedData - contains the JSON object returned by the server

  Author: Terry Goldsmith
*/
function successFn(returnedData) {
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

