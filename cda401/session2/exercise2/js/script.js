function calculateNumber() {
    var number1 = parseInt(document.getElementById("number1").value)

    var number2 = parseInt(document.getElementById("number2").value)

    var number3 = parseInt(document.getElementById("number3").value)

    document.getElementById("result").innerHTML = (number1 + number2 + number3);
}

//simple codee to demonstrate output
document.write("Hello World!");
document.write("<h1>This is a heading</h1>");
document.write("<p>This is a paragraph</p>");


var name;
var age;
var yourLocation;

name = "James";

age = "33";

yourLocation = "Southampton";

document.write("<p>Your name: " + name + "</p>");
document.write("<p>Your age: " + age + "</p>");
document.write("<p>Your location: " + yourLocation + "</p>");
