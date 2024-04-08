/*
    Purpose:    Check user's input data format.

    Authors:    Alex 
              
*/
document.addEventListener("DOMContentLoaded", function () {
    // Get all input fields
    var userInputName = document.getElementById("userInputName");
    var userInputEmail = document.getElementById("userInputEmail");
    var userInputPhone = document.getElementById("userInputPhone");
    var userInputStreet = document.getElementById("userInputStreet");
    var userInputAddress2 = document.getElementById("userInputAddress2");
    var userInputCountry = document.getElementById("userInputCountry");
    var userInputCity = document.getElementById("userInputCity");
    var userInputProvince = document.getElementById("userInputProvince");
    var userInputPostalCode = document.getElementById("userInputPostalCode");

    // Get all error spans
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var streetError = document.getElementById("streetError");
    var address2Error = document.getElementById("address2Error");
    var countryError = document.getElementById("countryError");
    var cityError = document.getElementById("cityError");
    var provinceError = document.getElementById("provinceError");
    var postalCodeError = document.getElementById("postalCodeError");

    // Add event listeners for input events on all input fields
    userInputName.addEventListener("input", validateName);
    userInputEmail.addEventListener("input", validateEmail);
    userInputPhone.addEventListener("input", validatePhone);
    userInputStreet.addEventListener("input", validateStreet);
    userInputAddress2.addEventListener("input", validateAddress2);
    userInputCountry.addEventListener("input", validateCountry);
    userInputCity.addEventListener("input", validateCity);
    userInputProvince.addEventListener("input", validateProvince);
    userInputPostalCode.addEventListener("input", validatePostalCode);

    function validateName() {
        var nameValue = userInputName.value.trim();
        var nameRegex = /^[a-zA-Z\s\-]+$/;
        if (nameRegex.test(nameValue)) {
            nameError.textContent = "";
            userInputName.style.color = "blue"; // Set text color back to default or blue
        } else {
            nameError.textContent = "Please enter a valid name (letters, spaces, and hyphens only).";
            userInputName.style.color = "red";
        }
    }

    function validateEmail() {
        var emailValue = userInputEmail.value.trim();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(emailValue)) {
            emailError.textContent = "";
            userInputEmail.style.color = "blue"; // Set text color back to default or blue
        } else {
            emailError.textContent = "Please enter a valid email address.";
            userInputEmail.style.color = "red";
        }
    }

    function validatePhone() {
        var phoneValue = userInputPhone.value.trim();
        var phoneRegex = /^[0-9]{10}$/; // Assuming a 10-digit phone number
        if (phoneRegex.test(phoneValue)) {
            phoneError.textContent = "";
            userInputPhone.style.color = "blue"; // Set text color back to default or blue
        } else {
            phoneError.textContent = "Please enter a valid 10-digit phone number.";
            userInputPhone.style.color = "red";
        }
    }

    function validateStreet() {
        var streetValue = userInputStreet.value.trim();
        // Add your street validation logic here
        if (streetValue.length > 0) {
            streetError.textContent = "";
            userInputStreet.style.color = "blue"; // Set text color back to default or blue
        } else {
            streetError.textContent = "Please enter a street address.";
            userInputStreet.style.color = "red";
        }
    }

    function validateAddress2() {
        var address2Value = userInputAddress2.value.trim();
        // Add your address line 2 validation logic here
        if (address2Value.length > 0) {
            address2Error.textContent = "";
            userInputAddress2.style.color = "blue"; // Set text color back to default or blue
        } else {
            address2Error.textContent = "Please enter address line 2 if applicable.";
            userInputAddress2.style.color = "red";
        }
    }

    function validateCountry() {
        var countryValue = userInputCountry.value.trim();
        // Add your country validation logic here
        if (countryValue.length > 0) {
            countryError.textContent = "";
            userInputCountry.style.color = "blue"; // Set text color back to default or blue
        } else {
            countryError.textContent = "Please enter your country.";
            userInputCountry.style.color = "red";
        }
    }

    function validateCity() {
        var cityValue = userInputCity.value.trim();
        // Add your city validation logic here
        if (cityValue.length > 0) {
            cityError.textContent = "";
            userInputCity.style.color = "blue"; // Set text color back to default or blue
        } else {
            cityError.textContent = "Please enter your city.";
            userInputCity.style.color = "red";
        }
    }

    function validateProvince() {
        var provinceValue = userInputProvince.value.trim().toUpperCase(); // Convert input to uppercase for case-insensitive comparison
        var canadianProvinceInitials = ["AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT"];
    
        // Check if the input matches any of the Canadian province initials
        if (canadianProvinceInitials.includes(provinceValue)) {
            provinceError.textContent = "";
            userInputProvince.style.color = "blue"; // Set text color back to default or blue
        } else {
            provinceError.textContent = "Please enter a valid Canadian province abbreviation.";
            userInputProvince.style.color = "red";
        }
    }

    function validatePostalCode() {
        var postalCodeValue = userInputPostalCode.value.trim();
        // Add your postal code validation logic here
        var postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/; // Assuming a Canadian postal code format
        if (postalCodeRegex.test(postalCodeValue)) {
            postalCodeError.textContent = "";
            userInputPostalCode.style.color = "blue"; // Set text color back to default or blue
        } else {
            postalCodeError.textContent = "Please enter a valid postal code.";
            userInputPostalCode.style.color = "red";
        }
    }
});
