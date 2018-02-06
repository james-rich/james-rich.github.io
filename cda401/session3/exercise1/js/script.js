function main() {

    var today = new Date();

    var current_hour = today.getHours();
    var current_minute = today.getMinutes();
    var current_second = today.getSeconds();

    var isAmPm = isMorningAfternoon(current_hour);

    if ( current_minute < 10){
        current_minute = "0" + current_minute
    }

    if ( current_second < 10){
        current_second = "0" + current_second
    }

    current_hour = current_hour % 12;

    var current_time = current_hour + ":" + current_minute + ":" + current_second + " " + isAmPm;

    console.log(current_time);

    document.getElementById("time").innerHTML = current_time;
}

document.getElementById("start_timer").addEventListener("click", startTimer);

function isMorningAfternoon(hour) {
    return (hour >= 12) ? "PM" : "AM";
}

function startTimer() {
    setInterval(main, 500)
}
