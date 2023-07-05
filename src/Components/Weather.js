import React from "react";



const Weather = ({data}) => {
return (
<div>
       <h1> {data.location?.country}</h1>
       <p>{data.condition?.text}</p>
       <p className="text-black">{data.current?.temp_c}</p>
</div>
);
}


export default Weather;