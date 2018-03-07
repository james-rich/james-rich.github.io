

var database = firebase.database();
database.ref("contacts/").on('value', recordsUpdated);

// Initialize Firebase
function main(){
    console.log("Page has loaded");
}

function validate_form(event){

    var name        = document.getElementById("name");
    var age         = document.getElementById("age");
    var location    = document.getElementById("location");
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
        var name_value = name.value;

    }

    if(!age.value){
        age_label.classList.add("show");
        age_label.classList.remove("hidden");
        form_valid = false;
    }else{
        age_label.classList.add("hidden");
        age_label.classList.remove("show");
        form_valid = true;
        var age_value = age.value;

    }

    if(!location.value){
        location_label.classList.add("show");
        location_label.classList.remove("hidden");
        form_valid = false;
    }else{
        location_label.classList.add("hidden");
        location_label.classList.remove("show");
        form_valid = true;
        var location_value = location.value;

    }

    if(!email.value){
        email_label.classList.add("show");
        email_label.classList.remove("hidden");
        form_valid = false;
    }else{
        email_label.classList.add("hidden");
        email_label.classList.remove("show");
        form_valid = true;
        var email_value = email.value;
    }

    if(!phone.value){
        phone_label.classList.add("show");
        phone_label.classList.remove("hidden");
        form_valid = false;
    }else{
        phone_label.classList.add("hidden");
        phone_label.classList.remove("show");
        form_valid = true;
        var phone_value = phone.value;

    }

    if(!address.value){
        address_label.classList.add("show");
        address_label.classList.remove("hidden");
        form_valid = false;
    }else{
        address_label.classList.add("hidden");
        address_label.classList.remove("show");
        form_valid = true;
        var address_value = address.value;
    }

    if(!post.value){
        post_code_label.classList.add("show");
        post_code_label.classList.remove("hidden");
        form_valid = false;
    }else{
        post_code_label.classList.add("hidden");
        post_code_label.classList.remove("show");
        form_valid = true;
        var post_value = post.value;
    }

    if(form_valid === true){
        var key = database.ref().child("contacts").push().key;
        console.log(key);
        database.ref("contacts/" + key).set({
            name:       name_value,
            age:        age.value,
            location:   location.value,
            email:      email.value,
            phone:      phone.value,
            address:    address.value,
            post_code:  post.value
        })
    }
}

function recordsUpdated(snap) {
    document.getElementById("contact_list").innerHTML = "";
    snap.forEach(function(record){
        var span = document.createElement("span");
        span.innerHTML = "X";
        span.setAttribute("onclick", "recordDelete('"+record.key+"')");
        var p = document.createElement("p");
        p.setAttribute("id", record.key);
        p.innerHTML = "Name: " + record.val().name + "<br>Email: " + record.val().email;
        p.appendChild(span);
        document.getElementById("contact_list").appendChild(p);
    });
}

function recordDelete(input) {
    database.ref("contacts/").child(input).remove();
    console.log(input);
}

function updateUpdate(){

}