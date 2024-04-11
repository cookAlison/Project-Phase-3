/*
  The purpose of this file is to create a very basic Express framework
  server that has 2 endpoints:
            one for a GET request and one for a POST request

  Author: Terry Goldsmith
  Completed & integrated by: Alex, Alison (Group Leader), Charis, and Natalie
*/

// start the Express framework and make it accessible via the reference
const express = require("express");

// define the top level Express function
const server = express();

// set the port where the server listens for clients (we use 4200)
const port = 4200;

// where the server will store the JSON object with the user data when it "gets" it
let userData = {};

// enable the server to recognize JSON format
server.use(express.json());

// enable incoming "name":"value" pairs to be any type including arrays
server.use(express.urlencoded({ extended: true }));

/*
  The purpose of this function is to execute the instructions
  necessary: to allow a request from any origin to access this site's content;
  allow only GET and POST requests; and to only accept requests that include
  "Content-Type".

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
server.use(allowCrossDomain);

/*
  The purpose of this function is to respond to a POST request with relative
  endpoint: /myPost

  req - request object generated by the HTTP event
  res - response object generated by the HTTP event

  Author: Terry Goldsmith
  Completed by: Alison
*/
server.post("/myPost", function (req, res) {
  // log the received user data
  console.log("Received user data:", req.body);

  // JSON object to be returned
  userData = req.body;

  return res.status(200).send({});
});

/*
  The purpose of this function is to respond to a GET request with relative
  endpoint: /myGet

  req - request object generated by the HTTP event
  res - response object generated by the HTTP event

  Author: Terry Goldsmith
  Completed by: Alex and Alison
*/
server.get("/myGet", function (req, res) {
  try {
    // Extract user data from the request body
    let userDataFromServer = userData;

    // Return the extracted user data as the response
    return res.status(200).send(userDataFromServer);
  } catch (error) {
    // Handle any errors and return an error response
    return res.status(500).send({ error: "Failed to retrieve user data", details: error.message });
  }
});

/*
  The purpose of this function is to produce a message on the Node.js console,
  indicating the server has begun to listen for clients on a port.

  Author: Terry Goldsmith
*/
server.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
