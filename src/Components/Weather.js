import React from "react";
import "../App.css";
import { Container, Card, CardBody } from "reactstrap";
import moment from "moment/moment";

const Weather = ({ data }) => {

      const temp = ((Math.round(data.main?.temp))- 32) * 5/9;
      const temp_max = ((Math.round(data.main?.temp_max))- 32) * 5/9;
      const temp_min = ((Math.round(data.main?.temp_min))- 32) * 5/9;

      var iconcode = data.weather[0]?.icon;
      var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  return (
    <Container
      fluid
      style={{
        border: "2px solid black",
        display: "flex",
        alignItems: "center",
        width: "50vw",
        height: "60vh",
        margin: "auto",
        marginTop: "10rem",
        
      }}
      className="col box-con back"
    >
      <div className="flex justify col">
        <h2>{data.name}  </h2>
        <p style={{
          fontSize:"30px"
        }}>{temp} &deg;C</p>
        <p> {data.weather[0]?.main} <span style={{
          width:"50px",
          height:"50px"
        }}>{iconurl} </span> </p>
        <div className="flex row justify">
          <p>{temp_max} &deg;C
          </p>
          <p>{temp_min} &deg;C</p>
        </div>
      </div>

<div className="flex justify box-bottom gap row"
style={{
borderTop:"2px solid black",
width:"50vw",
marginTop:"7rem",
justifyContent:"space-evenly"

}}

>
      <div className="flex col">
        <p>Humidity:  </p>
        <p>{data.main?.humidity} % </p>
        </div>
        <div className="flex  col">
        <p>Pressure:  </p>
        <p>{data.main?.pressure} </p>
        </div>
        <div className="flex col">
        <p>Sunrise:  </p>
        <p>{new Date(data.sys?.sunrise * 1000).toLocaleTimeString('en-IN') } </p>
        </div>
        <div className="flex  col">
        <p>Sunset:   </p>
        <p>{new Date(data.sys?.sunset * 1000).toLocaleTimeString('en-IN')} </p>
        </div>
        </div>
     
    </Container>
  );
};

export default Weather;
{/* <p> Sunrise:  {new Date(data.sys?.sunrise * 1000).toLocaleTimeString('en-IN')}</p> */}
      //  <p> Sunset:  {new Date(data.sys?.sunset * 1000).toLocaleTimeString('en-IN')}</p>