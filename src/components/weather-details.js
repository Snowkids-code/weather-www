import React from 'react'

function WeatherDetails({data}) {
  return (
    <div className='weather-details-container'>
      <p className='title'>{data?.day}</p>
      <p className='date'>{data?.date}</p>
      <p className='temperature'>{data?.highestTemperature}°C</p>
      <p className='city'>Paris, France</p>
    </div>
  )
}

export default WeatherDetails
