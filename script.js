const formatHour = (dte) => {
    let formattedHour = dte.getHours();
    if(formattedHour == 0) {
        formattedHour = 12;
    }
    if(formattedHour > 12) {
        formattedHour -= 12;
    }
    return formattedHour;
}

const formatDay = (dte) => {
    let dayName;
    switch (dte.getDay()) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            break;
    }
    return dayName;
}

const formatMonth = (dte) => {
    let monthName;
    switch (dte.getMonth()) {
        case 0:
            monthName = "January";
            break;
        case 1:
            monthName = "February";
            break;
        case 2:
            monthName = "March";
            break;
        case 3:
            monthName = "April";
            break;
        case 4:
            monthName = "May";
            break;
        case 5:
            monthName = "June";
            break;
        case 6:
            monthName = "July";
            break;
        case 7:
            monthName = "August";
            break;
        case 8:
            monthName = "September";
            break;
        case 9:
            monthName = "October";
            break;
        case 10:
            monthName = "November";
            break;
        case 11:
            monthName = "December";
            break;
        default:
            break;
    }
    return monthName;
}

const setAmPm = (dte) => {
    let str;
    if (dte.getHours() < 12) {
        str = "AM";
    }
    else {
        str = "PM";
    }
    return str;
}

const formatTime = (hr, min, sec, ampm) => {
    let time;
    if(hr < 10) {
        time = "0" + hr + ":";
    }
    else {
        time = hr + ":";
    }
    if(min < 10) {
        time = time + "0" + min + ":";
    }
    else {
        time = time + min + ":";
    }
    if(sec < 10) {
        time = time + "0" + sec;
    }
    else {
        time = time + sec;
    }
    time = time + " " + ampm;
    return time;
}

setInterval(content = () => {
    let current = new Date();
    let hour = formatHour(current);
    let min = current.getMinutes();
    let sec = current.getSeconds();
    let date = current.getDate();
    let day = formatDay(current);
    let month = formatMonth(current);
    let year = current.getFullYear();
    let ampm = setAmPm(current);
    let tme = formatTime(hour, min, sec, ampm);
    let t = document.getElementById("content");
    t.innerHTML = '<div id="hhmmss" class="time">' + tme + ' </div>';

    let datee = (day + ' ' + date + ' ' + month + ' ' + year);
    t.insertAdjacentHTML('beforeend', '<div id="ddmy" class="datee">' + datee + ' </div>')
}, 1000);