/*
    Purpose:    Saves user input to JSON object

    Authors:  Alex
              Alison (Group Leader)
              Charis
              Natalie
*/

/**
 * 
 * Saves client information as JSON object by id
 * 
 * Author: Charis
 * 
 * @returns 
 */

// Save user input to JSON object 

//get references for text input and button fields
var fullName = document.getElementById("fullName")
var email = document.getElementById("email")
var phoneNumber = document.getElementById("phoneNumber")
var address = document.getElementById("address")
var secAddress = document.getElementById("secAddress")
var country = document.getElementById("country")
var city = document.getElementById("city")
var province = document.getElementById("province")
var postalCode = document.getElementById("postalCode")

var firstName = document.getElementById("firstName")
var middleName = document.getElementById("middleName")
var lastName = document.getElementById("lastName")
var birthMonth = document.getElementById("birthMonth")
var birthDay = document.getElementById("birthDay")
var birthYear = document.getElementById("birthYear")
var deathMonth = document.getElementById("deathMonth")
var deathDay = document.getElementById("deathDay")
var deathYear = document.getElementById("deathYear")
var epitaph = document.getElementById("epitaph")


var jsonBtn = document.getElementById("jsonbtn")
var jsonText = document.getElementById("jsontext")


//add click event listener, to get data when data is entered
jsonBtn.addEventListener("click", jsToJson);
    //store data in JavaScript object
    function jsToJson() {
    var data = {
        "fullName":fullName.value,
        "email":email.value,
        "phoneNumber":phoneNumber.value,
        "address":address.value,
        "secAddress":secAddress.value,
        "country":country.value,
        "city":city.value,
        "province":province.value,
        "postalCode":postalCode.value,
        "firstName":firstName.value,
        "middleName":middleName.value,
        "lastName":lastName.value,
        "birthMonth":birthMonth.value,
        "birthDay":birthDay.value,
        "birthYear":birthYear.value,
        "deathMonth":deathMonth,
        "deathDay":deathDay.value,
        "deathYear":deathYear.value,
        "epitaph":epitaph.value
    }

    //convert JavaScript object to JSON
    jsonText.innerHTML = JSON.stringify(data)
}
//})