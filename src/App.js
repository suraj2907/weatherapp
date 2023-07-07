import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from './Components/weather';

// const API_KEY = 'ce2c5a45a2bb4441912103052230507';

function App() {
  const [data, setData] = useState([]);
  const[lat,setLat]= useState(null);
  const [lon,setLon] = useState(null);

useEffect(()=>{
  try{   
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });

    console.log("Latitude is:", lat)
    console.log("Longitude is:", lon)

      const fetchData =async (lat , lon) => {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&units=metric&appid=a9959ac92af0f0dad188e5f2f2b431a4`);
        console.log(data);
        setData(data);
       
      }
      fetchData(lat,lon);
    }
    catch(err) {
    console.log("Error" , err);
    }
    
  },[lat,lon]);

    return (
      <div>
          <Weather data={data} />
      </div>
    );
  
};

export default App;
