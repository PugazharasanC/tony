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

      var year = day * 365;

      years = Math.round(milliseconds / year);
      months = years * 12;
      days = years * 365;
      hours = Math.round(milliseconds / hour);
      seconds = Math.round(milliseconds / second);

      var message = "Age in Years : " + years +
          "</br>Age in Months : " + months +
          "</br>Age in Days : " + days +
          "</br>Age in Hours : " + hours +
          "</br>Age in Seconds : " + seconds +
          "</br>Age in Milliseconds : " + milliseconds;
      document.getElementById('placeholder').innerHTML = message;
  }, 1000);
}
