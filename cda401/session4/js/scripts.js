var pick;
var gameArray;
var revealedDoor;
var runs = 1;
var u0 = {switchWins: 0, stickWins: 0};
var u1 = {switchWins: 0, stickWins: 0};
var u2 = {switchWins: 0, stickWins: 0};
var users = [u0, u1, u2];



function main() {
    function resetVars() {
        pick = null;
        gameArray = null;
        revealedDoor = null;
    }

    function getRandomArbitary(max){
        return Math.floor(Math.random() * Math.floor(max))
    }


    function openDoor() {
        for(var i = 0; i < gameArray.length; i++){
            if(i !== pick && gameArray[i] !== 'car'){
                return i;
            }
        }
    }

    function switchDoor() {
        for(var i = 0; i < gameArray.length; i++){
            if(i !== pick && i !== revealedDoor){
                return i;
            }
        }
    }

    function game(user) {
        resetVars();
        gameArray = ['goat','goat','goat'];

        gameArray[getRandomArbitary(3)] = 'car';

        pick = getRandomArbitary(3);

        revealedDoor = openDoor();

        if(gameArray[pick] === 'car'){
            users[user].stickWins += 1;
            window.setTimeout(update(user), 1);
        }

        pick = switchDoor();

        if(gameArray[pick] === 'car'){
            users[user].switchWins += 1;
            window.setTimeout(update(user), 1);
        }

    }

    for(var i = 0; i < runs; i++){
        for(var j = 0;j < 3; j++) {
            game(j);

        }
        //console.log("Stick: " + stickWins + "\nSwitch: " + switchWins);
    }


}

function update(user) {
    document.getElementById('stick_user_'+user).innerHTML = users[user].stickWins + " Wins<br>" + Math.round((users[user].stickWins / runs) * 100) + "%";
    document.getElementById('switch_user_'+user).innerHTML = users[user].switchWins + " Wins<br>" + Math.round((users[user].switchWins / runs) * 100) + "%";
}

function run() {
    var newRun  =document.getElementById('runs').value;
    runs = newRun < 1? 1: newRun;
    users[0].switchWins = 0;
    users[0].stickWins = 0;
    users[1].switchWins = 0;
    users[1].stickWins = 0;
    users[2].switchWins = 0;
    users[2].stickWins = 0;
    main();
}