import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Components/Weather";

const API_KEY = 'ce2c5a45a2bb4441912103052230507';

function App() {
  const [data, setData] = useState([]);

 
useEffect(()=>{
const lat = () => {
  navigator.geolocation.getCurrentPosition(position => position.coords.latitude);
};

const long = () => {
  navigator.geolocation.getCurrentPosition(position => position.coords.long);
};

console.log(lat);
console.log( long);


      const fetchData =async () => {
        const {data} = await axios.get(`http://api.weatherapi.com/v1/current.json?key=ce2c5a45a2bb4441912103052230507&q=${lat ,long}&aqi=no`);
        console.log(data);
        setData(data);
      }
      fetchData();
  },[]);


  
   

    return (
      <div>
          <Weather data={data} />
      </div>
    );
  
};

export default App;
