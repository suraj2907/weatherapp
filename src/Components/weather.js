import React from "react";
import "../App.css";
import { Container } from "reactstrap";
import moment from "moment/moment";

const Weather = ({ data }) => {
  const makeurl = () => {
    if (data.weather && data.weather.length > 0) {
      const iconcode = data.weather?.[0]?.icon;
      return "http://openweathermap.org/img/w/" + iconcode + ".png";
    }
    return null; // Return a default value or handle the absence of weather data
  };

  return (
    <Container fluid className="container">
      <div className="weather-container">
        <div className="weather-header">
          <h2>{data.name}</h2>
          <p>{moment().format("LL")}</p>
        </div>
        <p className="temperature">{data.main?.temp} &deg;C</p>
        <img className="weather-icon" src={makeurl()} alt="weather-icon" />
        <h5 className="weather-description">{data.weather?.[0]?.main}</h5>
        <div className="temperature-details">
          <p>
            Temp-max: <span>{data.main?.temp_max} &deg;C</span>
          </p>
          <p>
            Temp-min: <span>{data.main?.temp_min} &deg;C</span>
          </p>
        </div>
        <div className="weather-info">
          <div className="weather-info-item">
            <p>Humidity:</p>
            <p>{data.main?.humidity} %</p>
          </div>
          <div className="weather-info-item">
            <p>Wind speed:</p>
            <p>{data.wind?.speed} m/s</p>
          </div>
          <div className="weather-info-item">
            <p>Sunrise:</p>
            <p>{new Date(data.sys?.sunrise * 1000).toLocaleTimeString("en-IN")}</p>
          </div>
          <div className="weather-info-item">
            <p>Sunset:</p>
            <p>{new Date(data.sys?.sunset * 1000).toLocaleTimeString("en-IN")}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Weather;
