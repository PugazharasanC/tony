function Results() {
  var x = setInterval(() => {
      var years, months, days, hours, seconds, milliseconds;
      var DOB = new Date(document.getElementById('dob').value);
      var millisecondsBetweenDOBAnd1970 = Date.parse(DOB);
      var millisecondsBetweenNowAnd1970 = Date.now();
      var ageInMilliseconds = millisecondsBetweenNowAnd1970 - millisecondsBetweenDOBAnd1970;

      var milliseconds = ageInMilliseconds;
      var second = 1000;
      var minute = second * 60;
      var hour = minute * 60;
      var day = hour * 24;
      var month = day * 30;
      var year = new Date().getFullYear() - DOB.getFullYear();
      var month = new Date().getMonth() - DOB.getMonth();
      if(month < 0){
        year -= 1;
        month = 12 + month;
      }
      hours = Math.round(milliseconds / hour);
      seconds = Math.round(milliseconds / second);

      var message = "Age in Years : " + year +
          "</br>Age in Months : " + month +
          "</br>Age in Days : " + days +
          "</br>Age in Hours : " + hours +
          "</br>Age in Seconds : " + seconds +
          "</br>Age in Milliseconds : " + milliseconds;
      document.getElementById('placeholder').innerHTML = message;
  }, 1000);
}
