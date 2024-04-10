/*
    Purpose:    Retrieve stored data.  

    Authors:    Alex 
              
*/

// Retrieve user data from local storage
function retrieveUserData() {
  try {
    var userData = localStorage.getItem("userData");

    if (userData) {
      // Parse JSON string to JavaScript object
      var data = JSON.parse(userData);

      // Populate input fields with retrieved data
      document.getElementById("userInputName").value = data.userInputName || "";
      document.getElementById("userInputEmail").value = data.userInputEmail || "";
      document.getElementById("userInputPhone").value = data.userInputPhone || "";
      document.getElementById("userInputStreet").value = data.userInputStreet || "";
      document.getElementById("userInputAddress2").value = data.userInputAddress2 || "";
      document.getElementById("userInputCity").value = data.userInputCity || "";
      document.getElementById("userInputCountry").value = data.userInputCountry || "";
      document.getElementById("userInputProvince").value = data.userInputProvince || "";
      document.getElementById("userInputPostalCode").value = data.userInputPostalCode || "";

      // Populate other input fields if they exist in the stored data
      document.getElementById("firstName").value = data.firstName || "";
      document.getElementById("middleName").value = data.middleName || "";
      document.getElementById("lastName").value = data.lastName || "";
      document.getElementById("birthMonth").value = data.birthMonth || "";
      document.getElementById("birthDay").value = data.birthDay || "";
      document.getElementById("birthYear").value = data.birthYear || "";
      document.getElementById("deathMonth").value = data.deathMonth || "";
      document.getElementById("deathDay").value = data.deathDay || "";
      document.getElementById("deathYear").value = data.deathYear || "";
      document.getElementById("epitaph").value = data.epitaph || "";

      // Populate radio button options
      if (data.container) document.getElementById(data.container).checked = true;
      if (data.location) document.getElementById(data.location).checked = true;
      if (data.engravedImage) document.getElementById(data.engravedImage).checked = true;
      if (data.stoneOption) document.getElementById(data.stoneOption).checked = true;
      if (data.woodOption) document.getElementById(data.woodOption).checked = true;
      if (data.woodShape) document.getElementById(data.woodShape).checked = true;
      if (data.plantOption) document.getElementById(data.plantOption).checked = true;
      if (data.treeOption) document.getElementById(data.treeOption).checked = true;
      if (data.bushOption) document.getElementById(data.bushOption).checked = true;
      if (data.wildflowerOption) document.getElementById(data.wildflowerOption).checked = true;

      // Notify user
      alert("User data retrieved successfully");
    } else {
      // Display message if no user data found
      alert("No user data found.");
    }
  } catch (error) {
    // Display error message to the user
    alert("An error occurred: " + error.message);
  }
}

// Call the retrieveUserData function when the DOM content is loaded
/** 
document.addEventListener("DOMContentLoaded", function () {
  retrieveUserData();
});
*/

// Function to download user data as JSON file
function downloadUserData() {
  try {
    // Get default data if no user data found
    var userData = localStorage.getItem("userData");
    if (!userData) {
      userData = JSON.stringify(defaultData);
    }

    var blob = new Blob([userData], { type: "application/json" });
    var url = URL.createObjectURL(blob);

    // Create a temporary anchor element
    var a = document.createElement("a");
    a.href = url;
    a.download = "userData.json";

    // Programmatically click the anchor element to trigger the download
    document.body.appendChild(a);
    a.click();

    // Cleanup
    setTimeout(function () {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  } catch (error) {
    // Display error message to the user
    alert("An error occurred while downloading user data: " + error.message);
  }
}

// Call the downloadUserData function when the download button is clicked
/**
document.getElementById("downloadBtn").addEventListener("click", function () {
  downloadUserData();
});
*/

//--------------------------------------Server Upload Download------------------------------------------
/*
The purpose of this file is to create a very basic Express framework
server that has 2 endpoints:
          one for a GET request and one for a POST request

Author: Terry Goldsmith
Adapted by: Alison & Natalie
*/

// set the port where the server listens for clients
const port = 4200;

// start the Express framework and make it accessible via the reference
const express = require("express");

// define the top level Express function
const server = express();

// enable the server to recognize JSON format
server.use(express.json());

// enable incoming "name":"value" pairs to be any type including arrays
server.use(express.urlencoded({ extended: true }));

/*
The purpose of this function is to execute the instructions
necessary: to allow a request from any origin to access this site's content;
allow only GET and POST requests; and to only accept requests that include
"Content-Type".

this sets up restrictions / reduces restrictions

req - request object generated by the HTTP event
res - response object generated by the HTTP event
next - predefined function used when request/response cycle is not terminated
*/
const allowCrossDomain = function (req, res, next) {
  // allow any origin
  res.header("Access-Control-Allow-Origin", "*");
  // allow any method
  res.header("Access-Control-Allow-Methods", "GET,POST");
  // accept only headers with Content-Type included
  res.header("Access-Control-Allow-Headers", "Content-Type");
  // since this middleware function does not terminate the request/response cycle
  // the next() function must be called to continue to the succeeding middleware function
  next();
};

// set domain characteristics defined above
server.use(allowCrossDomain); // executes the function allowCrossDomain that is defined above

// Store user data received from client
let storedUserData = {};

/*
The purpose of this ANONYMOUS function is to respond to a POST request with relative
endpoint: /postUserData

it only executes if the endpoint is accessed

req - request object generated by the HTTP event
res - response object generated by the HTTP event

Author: Terry Goldsmith
*/
server.post("/postUserData", function (req, res) {
  try {
    // Log the received data
    console.log("Received user data:", req.body);

    // Store the received user data
    storedUserData = req.body;

    // Send a success response
    return res.status(200).send({ message: "User data received successfully" });
  } catch (error) {
    // Send an error response
    return res.status(500).send({ error: "An error occurred while processing the request" });
  }
});

/*
The purpose of this function is to respond to a GET request with relative
endpoint: /getUserData

req - request object generated by the HTTP event
res - response object generated by the HTTP event

Author: Terry Goldsmith
Adapted for use in this project
*/
server.get("/getUserData", function (req, res) {
  try {
    // Send the stored user data as response
    return res.status(200).send(storedUserData);
  } catch (error) {
    // Send an error response
    return res.status(500).send({ error: "An error occurred while processing the request" });
  }
});

/*
The purpose of this function is to produce a message on the Node.js console,
indicating the server has begun to listen for clients on a port.

Author: Terry Goldsmith
*/
server.listen(port, function () {
  console.log("Listening on port " + port);
});

// Add default data to be included in the downloaded file if no user data found
const defaultData = {
  userInputName: "Elon Mushy",
  userInputEmail: "elon.mushy@gmail.com",
  userInputPhone: "(123)-456-7890",
  userInputStreet: "456 Street",
  userInputAddress2: "",
  userInputCity: "San Francisco",
  userInputCountry: "USA",
  userInputProvince: "California",
  userInputPostalCode: "12345",
  firstName: "Elon",
  middleName: "",
  lastName: "Mushy",
  birthMonth: "June",
  birthDay: "28",
  birthYear: "1971",
  deathMonth: "April",
  deathDay: "1",
  deathYear: "2040",
  epitaph: "N/A",
  container: "Ceramic-urn",
  location: "Mountains",
  engravedImage: "Yes",
  stoneOption: "N/A",
  woodOption: "N/A",
  woodShape: "N/A",
  plantOption: "N/A",
  treeOption: "N/A",
  bushOption: "N/A",
  wildflowerOption: "N/A",
};

module.exports.defaultData = defaultData;
