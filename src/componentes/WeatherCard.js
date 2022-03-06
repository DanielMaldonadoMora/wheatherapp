
import React, {useState } from 'react';
import useFetch from '../hooks/useFetchWeather';
import weaterStatus from '../utils/switchWeather';
import switchRainStatus from '../utils/switchRainStatus';



const WeatherCard = () => {
  
    const {weather,isLoading}=useFetch()
   console.log(weather)
   const [isCelsius, setIsCelsius] = useState(true)
   const farentheit=(weather?.main?.temp *(9/5)+32)
   
   return (
       
       <div className=''>
           
            
            {isLoading ? (
                <div className="loader"></div>
                ) : (
                    <div className={`card ${switchRainStatus(weather.weather[0].icon)}`}>
                    <h1>El tiempo para hoy</h1>
                    <h3>{`${weather.name} ${weather.sys.country}`}</h3>
                    <div className='temp'>{isCelsius? `${weather.main.temp.toFixed(1)} C°`:`${farentheit.toFixed(1)} F°`}</div>
                           
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" /><br />
                           <div className='utilidad'> {document.body.className= weaterStatus(weather.weather[0].icon)}</div>
                    <button onClick={()=>setIsCelsius(!isCelsius)} className="button-30">{isCelsius? "Ver en F°":"Ver en C°"}</button>
                    
                </div>
                )}
        </div>
    );
};

export default WeatherCard;