/*
    Purpose:    Hide/show a marker's form according to toggling. Selecting a 
                form highlights the card border and button in green.

    Authors:  Alex
              Alison (Group Leader)
              Charis
              Natalie
*/

/**
 * Show/hide the form associated with the button being clicked
 * 
 * @author Alison
 * @param {*} markerForm is the id of the marker form being toggled 
 */
function toggleForm(markerForm) {
    var form = document.getElementById(markerForm);
    var button = document.getElementById(markerForm + 'Button');
    var card = document.getElementById(markerForm + 'Card');
    var otherForms = ['stoneMarkerForm', 'woodenMarkerForm', 'plantMarkerForm'];
    var otherButtons = {
        'stoneMarkerFormButton': 'Select Stone Marker',
        'woodenMarkerFormButton': 'Select Wooden Marker',
        'plantMarkerFormButton': 'Select Plant Marker'
    };

    // Toggle the visibility of the form
    form.classList.toggle("hidden");

    // Update the button appearance based on form visibility
    if (!form.classList.contains("hidden")) {
        button.classList.remove("bg-blue-500", "hover:bg-blue-700");
        button.classList.add("bg-green-500", "hover:bg-green-700");
        button.textContent = button.dataset.selectedText;

        // Highlight the card
        card.classList.remove("border-black");
        card.classList.add("border-green-500");

        // Hide other forms and revert their buttons and cards
        otherForms.forEach(function (otherForm) {
            if (otherForm !== markerForm) {
                var otherButton = document.getElementById(otherForm + 'Button');
                var otherCard = document.getElementById(otherForm + 'Card');

                document.getElementById(otherForm).classList.add("hidden");
                
                // revert the other buttons
                otherButton.classList.remove("bg-green-500", "hover:bg-green-700");
                otherButton.classList.add("bg-blue-500", "hover:bg-blue-700");
                otherButton.textContent = otherButtons[otherForm];
                otherButton.textContent = otherButton.dataset.defaultText;

                // Revert the other cards
                otherCard.classList.remove("border-green-500");
                otherCard.classList.add("border-black");
            }
        });
    } else { // Button already selected and clicked again; hide its form
        // Revert button
        button.classList.remove("bg-green-500", "hover:bg-green-700");
        button.classList.add("bg-blue-500", "hover:bg-blue-700");
        button.textContent = button.dataset.defaultText;

        // Revert card
        card.classList.remove("border-green-500");
        card.classList.add("border-black");
    }
}

/**
 * Show/hide the tree, bush, or flower options based on which of the three
 * the user selects.
 * 
 * @author Alison
 */
function showPlantOptions(plantOptionSelected) {
    var associatedOptions;

    if (plantOptionSelected.value == "Tree") { // show tree options
        associatedOptions = document.getElementById("treeOptions");
        associatedOptions.classList.toggle("hidden");

        // hide the other set of options
        document.getElementById("bushOptions").classList.add("hidden");
        document.getElementById("flowerOptions").classList.add("hidden");
    } else if (plantOptionSelected.value == "Bush") { // show bush options
        associatedOptions = document.getElementById("bushOptions");
        associatedOptions.classList.toggle("hidden");

        // hide the other set of options
        document.getElementById("treeOptions").classList.add("hidden");
        document.getElementById("flowerOptions").classList.add("hidden");
    } else { // show flower options
        associatedOptions = document.getElementById("flowerOptions");
        associatedOptions.classList.toggle("hidden");

        // hide the other set of options
        document.getElementById("treeOptions").classList.add("hidden");
        document.getElementById("bushOptions").classList.add("hidden");
    }
}