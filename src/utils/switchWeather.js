const weaterStatus=(description)=>{
    switch (description){
      
        case "10d":
            return("cleard");

        case "01d":
            return("cleard");
            
            
        case "02d":
            return("fewcloudsd");
            

        case "03d":
            return("fewcloudsd");
            

        case "13d":
            return("fewcloudsd");
            

        case "50d":
            return("fewcloudsd");
            

        case "04d":
            return("brokencloudsd");
            
        case "09d":
            return("brokencloudsd");
            
        case "11d":
            return("brokencloudsd");
            

        case "01n":
            return("clearn");
            

        case "10n":
            return("clearn");
            
            
        case "02n":
            return("fewcloudsn");
            

        case "03n":
            return("fewcloudsn");
            

        case "13n":
            return("fewcloudsn");
            

        case "50n":
            return("fewcloudsn");
            

        case "04n":
            return("brokencloudsn");
            
        case "09n":
            return("brokencloudsn");
            
        case "11n":
            return("brokencloudsn");
            
        default:
            console.log("no encontramos el clima adecuado")
            break;
            
    }
}
 
export default weaterStatus