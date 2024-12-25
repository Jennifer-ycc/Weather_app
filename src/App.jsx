import { useState } from 'react';
import './App.css';
import search from './assets/icons/search.svg';
import { useStateContext } from './Context';
import { BackgroundLayout, WeatherCard, MiniCard } from './components';

function App() {
  const [input, setInput] = useState('');
  const { weather, thisLocation, values, place, setPlace } = useStateContext();
  
  // Debugging logs
  console.log('Weather data:', weather);
  console.log('Forecast values:', values);

  const submitCity = () => {
    if (!input.trim()) return; 
    setPlace(input);
    setInput('');
  };

  return (
    <div className='w-full h-screen text-white px-8'>
      <nav className='w-full p-3 flex justify-between items-center'>
        <h1 className='font-bold tracking-wide text-3xl'>Weather Forcast</h1>
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
          <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' />
          <input
            type="text"
            placeholder='Search city'
            className='focus:outline-none w-full text-[#212121] text-lg'
            aria-label='Search city'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === 'Enter') submitCity();
            }}
          />
        </div>
      </nav>
      
      <BackgroundLayout />

      <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
        {weather && (
          <WeatherCard
            place={thisLocation}
            windspeed={weather.wspd}
            humidity={weather.humidity}
            temperature={weather.temp}
            heatIndex={weather.heatindex}
            iconString={weather.conditions}
            conditions={weather.conditions}
          />
        )}

        <div className='mini-card grid grid-cols-3 gap-4 w-[60%]'>
          {values?.length > 0 ? (
            values.slice(0, 6).map((curr) => (
              <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={curr.temp.day} //
                iconString={(curr.weather?.[0]?.description || 'clear').toLowerCase()} // Normalize the string curr.weather[0].description
              />
            ))
          ) : (
            <p>No forecast data available</p>
          )}
        </div> 
      </main>
    </div>
  );
}

export default App; 

