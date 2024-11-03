# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Weather Forecasting App

A responsive and dynamic weather forecasting application built with React and the OpenWeatherMap API. 
This app provides real-time weather information based on user input and includes a 5-day forecast.

Features

    1.Real-time Weather Data: Get the current weather, temperature, humidity, and wind speed for any city.
    2.Responsive Design: Works well on desktop and mobile screens.
    3.Celsius/Fahrenheit Toggle: Users can choose their preferred temperature unit.
    4.Dynamic Backgrounds : Weather-based backgrounds update based on current conditions.
//icons doesn't work 

1.Enviroment set up
    - This app uses Vite for bundling and Tailwind CSS for styling.
    - Install dependencies
    - Start the development server

2. API Fetching Weather Data 
    -sign up at OpenWeatherMap API and get API key.
    -Create a .env file in the root 

3. Components structure
    -SearchBar: For user input to search city or use location coordinates.
    -WeatherDisplay: To show the current weather data like temperature, humidity, etc.
    -Forecast: A five-day forecast display.
    -App: Main component to manage state and API calls.

4. Fetching Data
Use axios or fetch to call the OpenWeatherMap API

5. State Management
Use React’s useState and useEffect for state and API responses

6.Styling
This app uses Tailwind CSS for styling, along with custom utility classes. Additionally, weather-specific icons and backgrounds change dynamically based on weather conditions.

7.Error Handling
Proper error handling is implemented for scenarios like:

    -Invalid city input
    -Failed API requests
    -Displaying user-friendly error messages# Weather_app
