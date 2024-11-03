import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({});
    const [values, setValues] = useState([]);
    const [place, setPlace] = useState('Vancouver');
    const [thisLocation, setLocation] = useState('');

    // Fetch current weather
    const fetchWeather = async () => {
        if (!place) return; 
        const options = {
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${import.meta.env.VITE_API_KEY}&units=metric`,
        };
    
        try {
            const response = await axios.request(options);
            console.log('Current weather data:', response.data); 
            const weatherData = response.data;

        
             

            setWeather({
                temp: weatherData.main.temp,
                humidity: weatherData.main.humidity,
                wspd: weatherData.wind.speed,
                heatIndex: weatherData.main.feels_like ?? 'N/A',
                conditions: weatherData.weather[0].description,
            });

            console.log('Updated conditions:', weatherData.weather[0].description);
    
            setLocation(weatherData.name); 
        } catch (error) {
            console.error('Error fetching current weather:', error.response ? error.response.data : error.message);
            alert('Error fetching weather. Please check the city name or try again later.');
        }
    };

    // Fetch forecast data
    const fetchForecast = async () => {
        if (!place) return; 
        const options = {
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${import.meta.env.VITE_API_KEY}&units=metric`,
        };
        
        try {
            const response = await axios.request(options);
            console.log('Forecast data:', response.data);
            const forecastData = response.data.list; // Access the list of forecasts


        
            // Filter to get approximately daily forecasts (selecting data close to noon each day)
            const dailyForecasts = forecastData.filter(item => item.dt_txt.includes("12:00:00"));
            
            // Map to the data structure you need for MiniCard
            const formattedForecast = dailyForecasts.map(item => ({
                datetime: item.dt_txt,
                temp: item.main.temp,
                conditions: item.weather[0].description.toLowerCase() // Normalize conditions
            }));
            
            setValues(formattedForecast); // Set the forecast values formattedForecast
        } catch (error) {
            console.error('Error fetching forecast data:', error.response ? error.response.data : error.message);
            alert('Error fetching forecast data. Please check the city name or try again later.');
        } 
    };

    // Fetch weather and forecast on place change
    useEffect(() => {
        fetchWeather();
        fetchForecast(); // Fetch forecast whenever place changes
    }, [place]);

    // Debug logs
    useEffect(() => {
        console.log('Forecast values:', values);
    }, [values]);

    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            thisLocation,
            place
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);

