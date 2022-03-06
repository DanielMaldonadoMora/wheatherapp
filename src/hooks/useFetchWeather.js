import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
 
  const [isLoading, setIsLoading] = useState(true);

  const [weather, setWeather] = useState({})

  const success=position=>{
      const lat=position.coords.latitude;
      const lon=position.coords.longitude;
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0c041da8ae84714cffc54651cd2c68c4&units=metric`)
      .then(res=>{setWeather(res.data);
                 setIsLoading(false);})
      
      
  }
  const handleError=()=>{
      console.log("No se permitio acceder a la ubicacion")
  }
  useEffect(() => {
      navigator.geolocation.getCurrentPosition(success,handleError)
  }, [])

  return { weather, isLoading };
};

export default useFetch;