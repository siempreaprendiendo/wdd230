// Wind Chill javascript

function doInputOutput() {
    let tempF = parseFloat(document.getElementById("tempF").value);
    let speed = parseFloat(document.getElementById("speed").value);
    let templimit = 50;
    let wspeedlimit = 3;

    if (tempF <= templimit && speed > wspeedlimit) {
      let windchill = windChill(tempF, speed).toFixed(1);
      document.getElementById("display1").innerHTML = `The windchill today <strong>${windchill}</strong>°F. 🥶Brrrr!`;
        } else {
          document.getElementById("display1").textContent =
            "Temperature must be less than 50°F and windspeed must be more than 3MPH to calculate the Wind Chill. Please try again.";
        }
      }
      function windChill(tempF, speed) {
        return (
          35.74 +
          0.6215 * tempF -
          35.75 * Math.pow(speed, 0.16) +
          0.4275 * tempF * Math.pow(speed, 0.16)
        );
      }