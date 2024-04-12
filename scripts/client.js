/*
  The purpose of this file is to provide a means for the client to
  interact with the server via endpoints for POST and GET requests.

  post() and get() are called by the "upload" and "download" buttons respectively

  Author: Terry Goldsmith
  Completed & integrated by: Alex, Alison (Group Leader), Natalie, and Charis
*/

// Define the base URL for the server
const SERVER_URL = "http://ugdev.cs.smu.ca:4200"; // Adjusted port number

// include the function that repopulates the page

/*
  The purpose of this function is to POST a JSON object to the
  server at the relative endpoint /myPost.

  Author: Terry Goldsmith
  Completed by: Alison
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
  Completed by: Alison
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
  Completed by: Alison
*/
function successPost(userData) {
  console.log(userData);
}

/*
  The purpose of this function is to log the JSON object received
  from the server and put it in local storage.

  userData - contains the JSON object returned by the server

  Author: Terry Goldsmith
  Completed by: Alison
*/
function successGet(userData) {

  localStorage.setItem("userData", userData);

  // TODO: make this function work here to repopulate the page retrieveUserData();
  // TODO: if worst comes to worst, just copy the code here

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

