/*
  The purpose of this file is to provide a means for the client to
  interact with the server via endpoints for POST and GET requests.

  Author: Terry Goldsmith
*/

// Define the base URL for the server
const SERVER_URL = "http://ugdev.cs.smu.ca:4200"; // Adjusted port number



/*
  The purpose of this function is to POST a JSON object to the
  server at the relative endpoint /myPost.

  Author: Terry Goldsmith
*/
function post() {
  // Retrieve user data
  let userData = localStorage.getItem("userData");

  // attempt to POST userData to endpoint http://ugdev.cs.smu.ca:4200/myPost
  // if (the middleware for this endpoint ran without error)
  //   call successFn
  // else
  //   call errorFn
  $.post(SERVER_URL + "/myPost", userData, successPost).fail(errorFn);
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
  $.get(SERVER_URL + "/myGet", successGet).fail(errorFn);
}

/*
  The purpose of this function is to log the JSON object received
  from the server to show that posting worked.

  userData - contains the JSON object returned by the server

  Author: Terry Goldsmith
*/
function successPost(userData) {
  console.log(userData);
}

/*
  The purpose of this function is to log the JSON object received
  from the server and put it in local storage.

  userData - contains the JSON object returned by the server

  Author: Terry Goldsmith
*/
function successGet(userData) {

  localStorage.setItem("userData", userData);

  // must call this function that is in retrieve.js: retrieveUserData();

  console.log(userData);
}

/*
  The purpose of this function is to log the error.

  err - the error object returned by the server

  Author: Terry Goldsmith
*/
function errorFn(err) {
  console.log(err.responseText);
}

