import React from "react";
import "../App.css";
import { Container } from "reactstrap";
import moment from "moment/moment";

const Weather = ({ data }) => {
  // const temp = (Math.round(data.main?.temp) - 32) * 5/9;
  // const temp_max = (Math.round(data.main?.temp_max) - 32) * 5/9;
  // const temp_min = (Math.round(data.main?.temp_min) - 32) * 5/9;

  const makeurl = () => {
    if (data.weather && data.weather.length > 0) {
      const iconcode = data.weather?.[0]?.icon;
      return "http://openweathermap.org/img/w/" + iconcode + ".png";
    }
    return null; // Return a default value or handle the absence of weather data
  };

  return (
    <Container
      fluid
      style={{
        border: "2px solid black",
        display: "flex",
        alignItems: "center",
        width: "max-content",
        height: "max-content",
        margin: "auto",
        marginTop: "10rem",
      }}
      className="col box-con back"
    >
      <div className="flex justify col">
        <div className="flex row justify">
          <h2>{data.name} </h2>
          <p style={{ flexDirection: "row", display: "flex" }}>
            {moment().format("LL")}
          </p>
        </div>
        <p
          style={{
            fontSize: "30px",
          }}
        >
          {data.main?.temp} &deg;C
        </p>
        <img
          style={{
            width: "80px",
            height: "80px",
          }}
          src={makeurl()}
          alt="weather-icon"
        />{" "}
        <h5 style={{ fontSize: "20px" }}> {data.weather?.[0]?.main} </h5>
        <div className="flex row " style={{ gap: "30px" }}>
          <p
            style={{
              fontWeight: "600",
              justifyContent: "flex-start",
              display: "flex",
            }}
          >
            Temp-max :-{" "}
            <span style={{ fontWeight: "500" }}>
              {data.main?.temp_max} &deg;C{" "}
            </span>
          </p>
          <p style={{ fontWeight: "600" }}>
            Temp-min :-{" "}
            <span style={{ fontWeight: "500" }}>
              {" "}
              {data.main?.temp_min} &deg;C{" "}
            </span>
          </p>
        </div>
      </div>

      <div
        className="flex justify box-bottom gap row box-bottom"
        style={{
          borderTop: "2px solid black",
          width: "max-content",
          // marginTop: "7rem",
          justifyContent: "space-evenly",
        }}
      >
        <div className="flex col">
          <p>Humidity: </p>
          <p>{data.main?.humidity} % </p>
        </div>
        <div className="flex  col">
          <p>Wind speed: </p>
          <p>{data.wind?.speed} m/s</p>
        </div>
        <div className="flex col">
          <p>Sunrise: </p>
          <p>
            {new Date(data.sys?.sunrise * 1000).toLocaleTimeString("en-IN")}{" "}
          </p>
        </div>
        <div className="flex  col">
          <p>Sunset: </p>
          <p>
            {new Date(data.sys?.sunset * 1000).toLocaleTimeString("en-IN")}{" "}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Weather;
