const arrMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const arrDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



function refreshTime(){
    var d = new Date();
    var month = arrMonths[d.getMonth()];
    var day = arrDays[d.getDay()];
    var date = d.getDate();
    if(date<10) date = "0"+ date;
    var year = d.getFullYear();
    
    var hours = d.getHours();
    if(hours<10) hours = "0"+ hours;
    var minutes = d.getMinutes();
    if(minutes<10) minutes = "0"+ minutes;
    var seconds = d.getSeconds();
    if(seconds<10) seconds = "0"+ seconds;

    $("#dayYear").html(`${day} ${date} ${month} ${year}`);
    
    $("#hoursMin").html(`${hours}:${minutes}:${seconds}`);
}


setInterval(refreshTime, 1000);