import React from 'react'

function WeatherDetails({data, city}) {
  return (
    <div className='weather-details-container'>
      <p className='title'>{data?.day}</p>
      <p className='date'>{data?.date}</p>
      <p className='temperature'>{data?.highestTemperature}°C</p>
      <p className='city'>{city}</p>
    </div>
  )
}

export default WeatherDetails
