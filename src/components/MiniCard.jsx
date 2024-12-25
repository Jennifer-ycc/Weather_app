import React from 'react';
import { useStateContext } from '../Context';
// Images
import Clear from '../assets/icons/sunny.png';
import Fog from '../assets/icons/fog.png';
import Cloudy from '../assets/icons/cloudy.png';
import Rainy from '../assets/icons/rain.png';
import Snow from '../assets/icons/snow.png';
import Stormy from '../assets/icons/stormy.png';
import Sunny from '../assets/icons/sunny.png';

const conditionImages = {
  clear: Sunny,
  cloud: Cloudy,
  rain: Rainy,
  shower: Rainy,
  snow: Snow,
  fog: Fog,
  thunder: Stormy,
  storm: Stormy,
  sunny: Sunny,
};

const MiniCard = ({ time, temp, iconString }) => { 
  /*console.log("Original time value:", time);
  // Inner function to format the date
  const getFormattedTime = (timestamp) => {
    if (!timestamp || isNaN(timestamp)) return 'Invalid Date'; // Check for invalid timestamps
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    console.log("Converted Date:", date);*/

    const getFormattedTime = (datetimeString) => {
      const date = new Date(datetimeString);

    return date.toLocaleDateString(undefined, {
      weekday: 'short', 
      month: 'short', 
      day: 'numeric'
    });
  };

  console.log('Selected icon:', conditionImages[iconString] || conditionImages.clear);

  // Main return statement for MiniCard component
  return (
    <div className="mini-card p-4 bg-white glassCard rounded shadow-md text-center">
      <p className="font-bold text-lg">{getFormattedTime(time)}</p>
      <p className="font-semibold text-xl">{temp} °C</p>
      <img
        src={conditionImages[iconString] || conditionImages.clear} // Use conditionImages for icon
        alt={iconString}
        className="w-12 h-12 mx-auto"
      />
    </div>
  );
};

export default MiniCard;

