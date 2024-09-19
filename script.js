document.addEventListener('DOMContentLoaded', () => {
  const adviceElement = document.getElementById('advice');

  // Function to get the current temperature (mocked for this example)
  function getCurrentTemperature() {
      // In a real application, you would fetch this data from a weather API
      return 30; // Example temperature
  }

  // Function to get the current season (mocked for this example)
  function getCurrentSeason() {
      // In a real application, you would determine this based on the date
      return 'summer'; // Example season
  }

  // Function to provide advice based on temperature and season
  function provideAdvice() {
      const temperature = getCurrentTemperature();
      const season = getCurrentSeason();

      if (temperature > 25) {
          adviceElement.textContent = 'It\'s hot outside! Drink cold water and stay hydrated.';
      } else if (season === 'winter') {
          adviceElement.textContent = 'It\'s winter! Wear a sweater and stay warm.';
      } else {
          adviceElement.textContent = 'Enjoy the weather!';
      }
  }

  // Provide advice when the page loads
  provideAdvice();
});
