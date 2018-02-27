var pick;
var gameArray;
var revealedDoor;
var stickWins = 0;
var switchWins = 0;
var runs = 100000;
function main() {

    function getRandomArbitary(max){
        return Math.floor(Math.random() * Math.floor(max))
    }


    function openDoor() {
        for(var i = 0; i < gameArray.length; i++){
            if(i != pick && gameArray[i] !== 'car'){
                return i;
            }
        }
    }

    function switchDoor() {
        for(var i = 0; i < gameArray.length; i++){
            if(i != pick && i != revealedDoor){
                return i;
            }
        }
    }

    function game() {
        gameArray = ['goat','goat','goat'];

        gameArray[getRandomArbitary(3)] = 'car';

        pick = getRandomArbitary(3);

        revealedDoor = openDoor();

        if(gameArray[pick] === 'car'){
            stickWins += 1;
            document.getElementById('stick').innerHTML = stickWins + " - " + Math.round((stickWins / runs) * 100) + "%";
        }

        pick = switchDoor();

        if(gameArray[pick] === 'car'){
            switchWins += 1;
            document.getElementById('switch').innerHTML = switchWins + " - " + Math.round((switchWins / runs) * 100) + "%";
        }

    }

    for(var i = 0; i < runs; i++){
        game();
        //console.log("Stick: " + stickWins + "\nSwitch: " + switchWins);
    }
}
