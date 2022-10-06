// defining arrays for maonths and days
const arrMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const arrDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// calling this function to update the time in realtime and setting the current date
function refreshTime() {
    //defining the Date object
  var d = new Date();
  var month = arrMonths[d.getMonth()];
  var day = arrDays[d.getDay()];
  var date = d.getDate();
  if (date < 10) date = "0" + date;
  var year = d.getFullYear();

  var hours = d.getHours();
  if (hours < 10) hours = "0" + hours;
  var minutes = d.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;
  var seconds = d.getSeconds();
  if (seconds < 10) seconds = "0" + seconds;

  $("#dayYear").html(`${day} ${date} ${month} ${year}`);

  $("#hoursMin").html(`${hours}:${minutes}:${seconds}`);
}

var time = setInterval(refreshTime, 1000);


//stop watch
var [seconds, minutes, hours] = [0, 0, 0];
var inte = null;
$(document).on("click", "#startTime", function () {
  if (inte != null) clearInterval(inte);
    //calling this function every second will initiate the time for stop watch
  inte = setInterval(displayTimer, 1000);
});
//this function will execute when stop timer is clicked
$(document).on("click", "#stopTimer", function () {
  clearInterval(inte);
});
//this function will reset the time to 00
$(document).on("click", "#resetTime", function () {
  clearInterval(inte);
  [seconds, minutes, hours] = [0, 0, 0];
  $("#stopWatchTime").html("00 : 00 : 00");
});
//this is the display function for stop watch
function displayTimer() {
  seconds += 1;

  if (seconds == 60) {
    seconds = 0;
    minutes++;

    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  $("#stopWatchTime").html(`${h} : ${m} : ${s}`);
}

//this function is called to change the date and time
var inter = null;
var [Cseconds, Cminutes, Chours] = [0, 0, 0];
$(document).on('click','#updateDateTime', function(){
    //changing the time
    var updateTime = $('#changeTime').val();
    // console.log(updateTime);
    if(updateTime!= ""){
        clearInterval(time);
    var changeHours = Number(updateTime.slice(0,2));
    var changeMinutes = Number(updateTime.slice(3));
    if (inter != null) clearInterval(inter);
    [Cseconds, Cminutes, Chours] = [0, changeMinutes, changeHours];
    inter = setInterval(displayChangeTime, 1000);
    }
    //changing the date
    var updateDate = $('#changeDate').val();
    if(updateDate!= ""){
    var changeYear = Number(updateDate.slice(0,4));
    var changeMonth = Number(updateDate.slice(5,7));
    var changeDate = (updateDate.slice(8));
    var dd = new Date(`${arrMonths[changeMonth-1]} ${changeDate}, ${changeYear}`);
    var changeDay = arrDays[dd.getDay()];
    // console.log(`${arrMonths[changeMonth-1]} ${changeDate}, ${changeYear}`);
    // console.log(changeDay);
    $("#dayYear").html(`${changeDay} ${changeDate} ${arrMonths[changeMonth-1]} ${changeYear}`);
    }
})
//displaying the updated time 
function displayChangeTime() {
    Cseconds += 1;
  
    if (Cseconds == 60) {
      Cseconds = 0;
      Cminutes++;
  
      if (Cminutes == 60) {
        Cminutes = 0;
        Chours++;
      }
    }
    let h = Chours < 10 ? "0" + Chours : Chours;
    let m = Cminutes < 10 ? "0" + Cminutes : Cminutes;
    let s = Cseconds < 10 ? "0" + Cseconds : Cseconds;
    $("#hoursMin").html(`${h} : ${m} : ${s}`);

  }