function main() {
    console.log("in main function");
    hideErrors();
}

function validateForm() {
    console.log("validating from");
    //event.preventDefault(event);
    var formValid = true;

    var name = document.getElementById("name").value;
    if (!name){
        formValid = false;
        document.getElementById("errorName").hidden = false;
    }
    var age = parseInt(document.getElementById("name").value);
    if (!age){
        formValid = false;
        document.getElementById("errorAge").hidden = false;
    }
    var location = document.getElementById("name").value;
    if (!location){
        formValid = false;
        document.getElementById("errorLocation").hidden = false;
    }
    if (formValid === false){

    }
}

function hideErrors() {
    document.getElementById("errorName").hidden = true;
    document.getElementById("errorAge").hidden = true;
    document.getElementById("errorLocation").hidden = true;
}