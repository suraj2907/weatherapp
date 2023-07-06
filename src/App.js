import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from './Components/weather';

// const API_KEY = 'ce2c5a45a2bb4441912103052230507';

function App() {
  const [data, setData] = useState([]);

 
useEffect(()=>{
  try{
    // var geolocation = require('geolocation')
    // geolocation.getCurrentPosition(function (err, position) {
    //   if (err) throw err
    //   console.log(position)
    // })
const lat = () => {
  
  navigator.geolocation.getCurrentPosition(position => position.coords.latitude);
};

const long = () => {
 
  navigator.geolocation.getCurrentPosition(position => position.coords.long);
};

console.log(lat);
console.log( long);


      const fetchData =async () => {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=52&lon=50&appid=a9959ac92af0f0dad188e5f2f2b431a4`);
        console.log(data);
        setData(data);
      }
      fetchData();
    }
    catch(err) {
           console.log("Error" , err);
    }
  },[]);


  
   

    return (
      <div>
          <Weather data={data} />
      </div>
    );
  
};

export default App;
