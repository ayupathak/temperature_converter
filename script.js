// Function to convert the input temperature between Celsius and Fahrenheit
function convertTemperature() {
    // Get input temperature and unit selection from the HTML elements
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const unitSelect = document.getElementById("unitSelect").value;
    const resultTemperatureElement = document.getElementById("resultTemperature");

    if (unitSelect === "celsius") {
      // Convert Celsius to Fahrenheit
      const fahrenheit = (inputTemperature * 9) / 5 + 32;
      resultTemperatureElement.textContent = `${fahrenheit.toFixed(2)} °F`;
      // Set background color based on the converted Fahrenheit temperature
      document.body.style.backgroundColor = getBackgroundColor(fahrenheit);
    } else if (unitSelect === "fahrenheit") {
      // Convert Fahrenheit to Celsius
      const celsius = ((inputTemperature - 32) * 5) / 9;
      resultTemperatureElement.textContent = `${celsius.toFixed(2)} °C`;
      // Set background color based on the converted Celsius temperature
      document.body.style.backgroundColor = getBackgroundColor(celsius);
    }
  }

  // Function to determine the background color based on the temperature
  function getBackgroundColor(temperature) {
    if (temperature <= 0) {
      return "#0099ff"; // Blue for cold temperatures
    } else if (temperature <= 20) {
      return "#66ccff"; // Light blue for cool temperatures
    } else if (temperature <= 30) {
      return "#ff9933"; // Orange for warm temperatures
    } else {
      return "#ff3300"; // Red for hot temperatures
    }
  }