var command;
var pick = null;
var gameArray;
var revealedDoor;
var switchWins = 0;
var stickWins = 0;
var box_0;
var box_1;
var box_2;
var goat;
var car;

function main(){
    pick = null;
    box_0 = document.getElementById('option-0');
    box_1 = document.getElementById('option-1');
    box_2 = document.getElementById('option-2');

    gameArray = ['goat', 'goat', 'goat'];
    car = getRandomArbitary(3);
    gameArray[car] = 'car';
    setupOptions(car);
    console.log(gameArray);


    command = document.getElementById('commands');
    command.innerHTML = "Please click one of the boxes.";
    box_0.onclick = function () {
        userChoice(0);
    };
    box_1.onclick = function () {
        userChoice(1);
    };
    box_2.onclick = function () {
        userChoice(2);
    };

}

function getRandomArbitary(max){
    return Math.floor(Math.random() * Math.floor(max))
}

function setupOptions(carBox) {
    box_0.classList.remove("car_image", "goat_1", "goat_2");
    box_1.classList.remove("car_image", "goat_1", "goat_2");
    box_2.classList.remove("car_image", "goat_1", "goat_2");
    if(carBox === 0){
        box_0.classList.add("car_image", "hide");
    }else{
        goat = Math.floor(Math.random() * Math.floor(2))+1;
        box_0.classList.add('goat_'+goat, "hide");
    }
    if(carBox === 1){
        box_1.classList.add("car_image", "hide");
    }else{
        goat = Math.floor(Math.random() * Math.floor(2))+1;
        box_1.classList.add('goat_'+goat, "hide");
    }
    if(carBox === 2){
        box_2.classList.add("car_image", "hide");
    }else{
        goat = Math.floor(Math.random() * Math.floor(2))+1;
        box_2.classList.add('goat_'+goat, "hide");
    }
}

function showBackground(option){
    if(option === 0){
        box_0.classList.remove("hide")
    }else if(option === 1){
        box_1.classList.remove("hide")
    }else if(option === 2){
        box_2.classList.remove("hide");
    }else{

    }
}

function userChoice(choice) {
    if(pick === null) {
        pick = choice;
        changeFunctions();
        command.innerHTML = "You chose box " + (pick + 1);
        revealedDoor = openDoor();
        showBackground(revealedDoor);
        command.innerHTML += "<br>Would you like to change your mind?";
    }
}

function openDoor() {
    for(var i = 0; i < gameArray.length; i++){
        if(i !== pick && gameArray[i] !== 'car'){
            return i;
        }
    }
}

function changeFunctions() {
    if(pick === 0){
        box_0.onclick = function () {
            stick();
        };
        box_1.onclick = function () {
            if(1 != revealedDoor){
                change(1);
            }else{
                showAlert("This option is not available!")
            }
        };
        box_2.onclick = function () {
            if(2 != revealedDoor){
                change(2);
            }else{
                showAlert("This option is not available!")
            }
        };
    }
    if(pick === 1){
        box_1.onclick = function () {
            stick();
        };
        box_0.onclick = function () {
            if(0 != revealedDoor){
                change(0);
            }else{
                showAlert("This option is not available!")
            }
        };
        box_2.onclick = function () {
            if(2 != revealedDoor){
                change(2);
            }else{
                showAlert("This option is not available!")
            }
        };
    }
    if(pick === 2){
        box_2.onclick = function () {
            stick();
        };
        box_0.onclick = function () {
            if(0 != revealedDoor){
                change(0);
            }else {
                showAlert("This option is not available!")
            }
        };
        box_1.onclick = function () {
            if(1 != revealedDoor){
                change(1);
            }else{
                showAlert("This option is not available!")
            }
        };
    }
}

function stick() {
    if(pick === car){
        stickWins += 1;
        document.getElementById('stick').innerHTML = "Stick Wins:" + stickWins;
    }else{
        switchWins += 1;
        document.getElementById('switch').innerHTML = "Switch Wins:" + switchWins;
    }
    showBackground(0);
    showBackground(1);
    showBackground(2);
}

function change(change){
    if(change === car){
        switchWins += 1;
        document.getElementById('switch').innerHTML = "Switch Wins:" + switchWins;
    }else{
        stickWins += 1;
        document.getElementById('stick').innerHTML = "Stick Wins:" + stickWins;
    }
    showBackground(change);
    showBackground(pick);
}

function showAlert(){
    alert("This option is not available!");
}