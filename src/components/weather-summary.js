import React, { useState } from "react";
import data from '../data/weather-data.json';

const timeArray = ["Week", "Month", "3 Month", "6 Month"];

function WeatherSummary({pickDay}) {
  const [active, setActive] = useState("Week");
  return (
    <div className="weather-summary-container">
      <div className="summary-heading">
        {timeArray?.map((time) => (
          <p
            className={active === time ? "active-nav" : "nav"}
            key={time}
            onClick={() => setActive(time)}
          >
            {time}
          </p>
        ))}
      </div>
      <div className="weather-data-container">
          {data?.map((data) => (
              <div className="weather-data-wrapper" key={data.id} onClick={()=>pickDay(data)}>
                  <p>{data.day}</p>
                  <div className="humidity-container">
                      <img alt="humidity" src="https://i0.wp.com/authorsunilsir.com/wp-content/uploads/2021/05/water-drop.jpg?fit=626%2C626&ssl=1" height={18} width={18}/>
                      <p>{data.humidity}%</p>
                  </div>
                  <div className="humidity-container">
                      <img alt="humidity" src="https://i0.wp.com/authorsunilsir.com/wp-content/uploads/2021/05/water-drop.jpg?fit=626%2C626&ssl=1" height={18} width={18}/>
                      <p>{data.rainLevel}mm</p>
                  </div>
                  <div className="humidity-container">
                      <img alt="humidity" src="https://cdn-icons-png.flaticon.com/512/661/661346.png" height={18} width={18}/>
                      <p>{data.lowestTemperature}°C</p>
                  </div>
                  <div className="humidity-container">
                      <img alt="humidity" src="https://as2.ftcdn.net/v2/jpg/00/79/69/17/1000_F_79691702_BR303iUR5ouWPixxvyngMlyqKDVThWpi.jpg" height={18} width={18}/>
                      <p>{data.highestTemperature}°C</p>
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
}

export default WeatherSummary;
