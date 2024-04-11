/*
    Purpose:    Retrieve stored data and repopulate the form with it. 

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

        } else {
            // if no user data found do nothing
            
        }
    } catch (error) {
        // if there is an error do nothing
    }
}

// Call the retrieveUserData function when the window is loaded
window.onload = retrieveUserData;