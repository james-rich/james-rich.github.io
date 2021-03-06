

window.addEventListener("keydown", keydown, false);
function keydown(event) {
    if (event.keyCode === 13) {
        writeMessage();
    }
}
var config = {
    apiKey: "AIzaSyCgexEBR9M-UqlTiWHJHUh_Mc-uOLlF5w0",
    authDomain: "chatalot-2ad3c.firebaseapp.com",
    databaseURL: "https://chatalot-2ad3c.firebaseio.com",
    projectId: "chatalot-2ad3c",
    storageBucket: "chatalot-2ad3c.appspot.com",
    messagingSenderId: "972993895502"
};
firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();
//var provider = new firebase.auth.FacebookAuthProvider();

var user = firebase.auth().currentUser;
var userRes;
if(!user) {
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        userRes = result.user;
        // ...
        console.log(result.user.email);
        document.getElementById("userName").innerText = userRes.displayName;
        firebase.database().ref('users/'+userRes.displayName).set({
            userName: result.userRes.email,
            name: userRes.displayName
        })
    }).catch(function (error) {
        console.log(error);
        // ...
    });
}


function writeMessage() {
    var userMessage = document.getElementById("userMessage").value;
    var currentTime = new Date;
    firebase.database().ref('messages/' + currentTime).set({
        userName: userRes.displayName,
        userMessage: userMessage
    });
    document.getElementById("userMessage").value = "";
}

var ref = firebase.database().ref('messages/');

ref.on('value', function(snapshot) {
        var i =0;
        globalMessages = '';
        snapshot.forEach(function(msg) {
            var key = msg.key;
            var userNameSnapshot = msg.child("userName");
            var userMessageSnapshot = msg.child("userMessage");
            var userName = userNameSnapshot.val();
            var messageTime = new Date(key);
            var userMessage = userMessageSnapshot.val();
            var hours = messageTime.getHours();
            var mins = messageTime.getMinutes();
            var seconds = messageTime.getSeconds();
            if(hours< 10){
                var hours =  "0" + messageTime.getHours();
            }
            if(mins< 10){
                var mins=  "0" + messageTime.getHours();
            }
            if(seconds< 10){
                var seconds =  "0" + messageTime.getHours();
            }

            var mtime = hours + ":" + mins + ":" + seconds;
            console.log(userName + " - " + userMessage);
            if(i % 2) {
                globalMessages = globalMessages + '<li class="list-group-item list-group-item-primary text-dark"> <p>' + userName + " @ " + mtime + "</p>" + userMessage + '</li>';
            }else{
                globalMessages = globalMessages + '<li class="list-group-item list-group-item-info text-dark text-right"> <p>' + userName + " @ " + mtime + "</p> " + userMessage + '</li>';
            }
            i++;
        });

        document.getElementById('globalMessages').innerHTML = globalMessages;

    });

