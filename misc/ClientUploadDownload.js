/**
 * Purpose: Provide functions to upload and download the user data to and from
 *          the server at the client's command.
 * 
 * Author:     Terry Goldsmith
 * Adapted by:  Alison & Natalie
 * 
 * This code was taken from the course lectures and adapted.
 */

// Define the base URL for the server
const port = 4200;
const SERVER_URL = "http://ugdev.cs.smu.ca:" + port;

// Import the defaultData object from store.js
const { defaultData } = require('./store.js');

// Initialize downloadedData to null
let downloadedData = null;

/*
  The purpose of this function is to POST a JSON object to the
  server at the relative endpoint /postUserData.

  Author: Terry Goldsmith
  Adapted by: Alison & Natalie
*/
function post() {
  // Define the object to be posted (this is the JSON object with the collected user data)
  let dataToPost = JSON.parse(localStorage.getItem("userData"));

  // Attempt to POST obj to endpoint http://ugdev.cs.smu.ca:port/postUserData
  $.post(SERVER_URL + "/postUserData", dataToPost, successFn).fail(errorFn);
}

/*
  The purpose of this function is to GET a JSON object from the
  server at the relative endpoint /getUserData.

  Author: Terry Goldsmith
  Adapted by: Alison & Natalie
*/
function get() {
  // Attempt to GET a JSON object from endpoint http://ugdev.cs.smu.ca:port/getUserData
  $.get(SERVER_URL + "/getUserData", successFn).fail(errorFn);
}

/*
  The purpose of this function is to log the JSON object received
  from the server and update the downloadedData variable.

  returnedData - contains the JSON object returned by the server

  Author: Terry Goldsmith
  Adapted by: Alison & Natalie
*/
function successFn(returnedData) {
  // Assign the returned data to the downloadedData variable
  downloadedData = returnedData;

  // Populate the form fields with the returned data
  Object.keys(returnedData).forEach(key => {
    let element = document.getElementById(key);
    if (element) {
      element.value = returnedData[key];
    }
  });

  // Log the returned data
  console.log(returnedData);
}

/*
  The purpose of this function is to log the error.

  err - the error object returned by the server

  Author: Terry Goldsmith
*/
function errorFn(err) {
  // Log the error message
  console.log(err.responseText);
}
