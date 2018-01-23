var random_number;
var number_of_guesses = 10;

function main() {

    document.getElementById("randomise").addEventListener("click", generateRandomNumber);
    var buttonGuess = document.getElementById("buttonGuess");
    buttonGuess.addEventListener("click", makeAGuess);
    buttonGuess.innerHTML = number_of_guesses + " Guesses left"
}

function generateRandomNumber() {
    console.log("Get Number");
    var min = parseInt(document.getElementById("min_number").value);
    var max = parseInt(document.getElementById("max_number").value);
    if (min > 0 && max > min){
        //generate a random number
        random_number = Math.round(Math.random() * (max - min) + min);

        //enable the button and inpout so the user can make a gueess
        document.getElementById("numberGuess").removeAttribute("disabled");
        document.getElementById("buttonGuess").removeAttribute("disabled");

        //disable the input so thee user cannot change the min and
        // max number also disable the button so a new random number cannot be generated
        document.getElementById("min_number").setAttribute("disabled", true);
        document.getElementById("max_number").setAttribute("disabled", true);
        document.getElementById("randomise").setAttribute("disabled", true);
        console.log(random_number);
        document.getElementById("result").innerHTML = "";
    }else{
        alert("Please enter two valid numbers!")
    }
}


function makeAGuess() {
    var guess = parseInt(document.getElementById("numberGuess").value);

    var result = (guess === random_number) ? "correct" : (guess > random_number) ? "to high" : "to low";

    if(result === "correct"){
        document.getElementById("result").innerHTML += "You won with " + number_of_guesses + " moves left!";
        resetGame()
    }else{
        number_of_guesses -= 1;
        document.getElementById("result").innerHTML += " " + guess + " - guess is " + result + "<br />";
        document.getElementById("buttonGuess").innerHTML = "Guess " + number_of_guesses ;
        if (number_of_guesses < 1){
            document.getElementById("result").innerHTML += "You lose as you have " + number_of_guesses + " guesses left";
            resetGame();
        }
    }
}

function resetGame() {
    //disable the guess butts as the game is over
    document.getElementById("numberGuess").setAttribute("disabled", true);
    document.getElementById("buttonGuess").setAttribute("disabled", true);

    //enable the input so thee user can change the min and
    // max number also enable the button so a new random number can be generated
    document.getElementById("min_number").removeAttribute("disabled");
    document.getElementById("max_number").removeAttribute("disabled");
    document.getElementById("randomise").removeAttribute("disabled");

    //reset the counter for number of guesses
    number_of_guesses = 10;
}