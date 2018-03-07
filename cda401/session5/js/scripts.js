var config = {
    apiKey: "AIzaSyD30MU9-0hYceCIGYxH6ojzG3c20hTIABI",
    authDomain: "cda400-83067.firebaseapp.com",
    databaseURL: "https://cda400-83067.firebaseio.com",
    projectId: "cda400-83067",
    storageBucket: "cda400-83067.appspot.com",
    messagingSenderId: "191913862279"
};
firebase.initializeApp(config);

var database = firebase.database();
database.ref("contacts/").on('value', recordsUpdated);
// Initialize Firebase
function main() {
    console.log("Page loaded");
}

function validate_form(event){
    var name        = document.getElementById("name");
    var age         = document.getElementById("age");
    var loca        = document.getElementById("loca");
    var email       = document.getElementById("email");
    var phone       = document.getElementById("phone_number");
    var address     = document.getElementById("address_line_1");
    var post        = document.getElementById("post_code");

    var name_label      = document.getElementById("name_label");
    var age_label       = document.getElementById("age_label");
    var location_label  = document.getElementById("location_label");
    var email_label     = document.getElementById("email_label");
    var phone_label     = document.getElementById("phone_label");
    var address_label   = document.getElementById("address_label");
    var post_code_label = document.getElementById("post_code_label");

    var form_valid = true;

    if(!name.value){
        name_label.classList.add("show");
        name_label.classList.remove("hidden");
        form_valid = false;
    }else{
        name_label.classList.add("hidden");
        name_label.classList.remove("show");
        form_valid = true;
    }

    if(!age.value){
        age_label.classList.add("show");
        age_label.classList.remove("hidden");
        form_valid = false;
    }else{
        age_label.classList.add("hidden");
        age_label.classList.remove("show");
        form_valid = true;
    }

    if(!loca.value){
        location_label.classList.add("show");
        location_label.classList.remove("hidden");
        form_valid = false;
    }else{
        location_label.classList.add("hidden");
        location_label.classList.remove("show");
        form_valid = true;
    }

    if(!email.value){
        email_label.classList.add("show");
        email_label.classList.remove("hidden");
        form_valid = false;
    }else {
        email_label.classList.add("hidden");
        email_label.classList.remove("show");
        form_valid = true;
    }

    if(!phone.value){
        phone_label.classList.add("show");
        phone_label.classList.remove("hidden");
        form_valid = false;
    }else{
        phone_label.classList.add("hidden");
        phone_label.classList.remove("show");
        form_valid = true;
    }

    if(!address.value){
        address_label.classList.add("show");
        address_label.classList.remove("hidden");
        form_valid = false;
    }else {
        address_label.classList.add("hidden");
        address_label.classList.remove("show");
        form_valid = true;
    }

    if(!post.value){
        post_code_label.classList.add("show");
        post_code_label.classList.remove("hidden");
        form_valid = false;
    }else {
        post_code_label.classList.add("hidden");
        post_code_label.classList.remove("show");
        form_valid = true;
    }

    if(form_valid === true){
        var key = database.ref().child("contacts").push().key;
        console.log(key);
        database.ref("contacts/" + key).set({
            name:       name.value,
            age:        age.value,
            location:   loca.value,
            email:      email.value,
            phone:      phone.value,
            address:    address.value,
            post_code:  post.value
        });
        name.value      = "";
        age.value       = "";
        loca.value      = "";
        email.value     = "";
        phone.value     = "";
        address.value   = "";
        post.value      = "";
    }
}

function recordsUpdated(snap) {

    document.getElementById("contact_list").innerHTML = "";
    snap.forEach(function(record){
        var remove = document.createElement("span");
        remove.innerHTML = "<i class=\"fas fa-trash-alt\"></i>";
        remove.setAttribute("onclick", "recordDelete('" + record.key + "')");

        var edit = document.createElement("span");
        edit.innerHTML = "<i class=\"fas fa-edit\"></i>";
        edit.setAttribute("onclick", "prepUpdate('" + record.key + "')");



        var p = document.createElement("p");
        p.setAttribute("id", record.key);
        p.innerHTML = "Name: " + record.val().name + " - Email: " + record.val().email;
        p.appendChild(remove);
        p.appendChild(edit);
        document.getElementById("contact_list").appendChild(p);
    });
}

function recordDelete(input) {
    database.ref("contacts/").child(input).remove();
}

function prepUpdate(input) {
    database.ref("contacts/" + input).once('value').then(function(snapshot) {
        document.getElementById("name").value = snapshot.val().name;
        document.getElementById("age").value = snapshot.val().age;
        document.getElementById("loca").value = snapshot.val().location;
        document.getElementById("email").value = snapshot.val().email;
        document.getElementById("phone_number").value = snapshot.val().phone;
        document.getElementById("address_line_1").value = snapshot.val().address;
        document.getElementById("post_code").value = snapshot.val().post_code;
    });

    var update = document.getElementById("updateButton");
    update.setAttribute("onclick", "updateRecord('" + input + "')");
    update.removeAttribute("disabled");
    document.getElementById("submitButton").setAttribute("disabled", "true");

}

function updateRecord(input) {
    /*

    We could delete the current record and then create a new record!

    recordDelete(input);
    validate_form();

    */


    var name        = document.getElementById("name");
    var age         = document.getElementById("age");
    var loca        = document.getElementById("loca");
    var email       = document.getElementById("email");
    var phone       = document.getElementById("phone_number");
    var address     = document.getElementById("address_line_1");
    var post        = document.getElementById("post_code");

    database.ref("contacts/" + input).update({
        name:       name.value,
        age:        age.value,
        location:   loca.value,
        email:      email.value,
        phone:      phone.value,
        address:    address.value,
        post_code:  post.value
    });

    var update = document.getElementById("updateButton");
    update.removeAttribute("onclick");
    update.setAttribute("disabled", "true");
    document.getElementById("submitButton").removeAttribute("disabled");

    name.value      = "";
    age.value       = "";
    loca.value      = "";
    email.value     = "";
    phone.value     = "";
    address.value   = "";
    post.value      = "";
}
