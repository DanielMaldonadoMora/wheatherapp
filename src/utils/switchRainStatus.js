const switchRainStatus=(description)=>{
    switch (description){
        case "09d":
            return("rain");
        case "09n":
            return("rain");
        case "10d":
            return("rain");
        case "10n":
            return("rain");
        case "11d":
            return("storm");
        case "11n":
            return("storm");
        case "13d":
            return("snow");
        case "13n":
            return("snow");
        case "50n":
            return("mist");
        case "50d":
            return("mist");
        default:
            break;
    }
}

export default switchRainStatus;