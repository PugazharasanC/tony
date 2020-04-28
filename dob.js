var DOB = "December 26, 1996";
var millisecondsBetweenDOBAnd1970 = Date.parse(DOB);
var millisecondsBetweenNowAnd1970 = Date.now();
var ageInMilliseconds = millisecondsBetweenNowAnd1970-millisecondsBetweenDOBAnd1970;

  var milliseconds = ageInMilliseconds;
  var second = 1000;
  var minute = second*60;
  var hour = minute*60;
  var day = hour*24;
  var month = day*30; 

  var year = day*365;

var years = Math.round(milliseconds/year);
var months = years*12;
var days = years*365;
var hours = Math.round(milliseconds/hour);
var seconds = Math.round(milliseconds/second);

function Results(){
  var message = "Age in Years : "+years+
     "</br>Age in Months : "+months+
       "</br>Age in Days : "+days+
      "</br>Age in Hours : "+hours+
      "</br>Age in Seconds : "+seconds+
      "</br>Age in Milliseconds : "+milliseconds;
  document.getElementById('placeholder').innerHTML = message;
}


window.onload = Results;
