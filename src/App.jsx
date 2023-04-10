import { useEffect,useState } from 'react'
import axios from 'axios'
import './App.css'
import WeatherCard from './components/WeatherCard'
import Loading from './components/Loading'





function App() {
  
  const [latlon, setLatlon] = useState ();
  const [weather, setweather] = useState ();
  const [temperature, setTemperature] = useState();
 

 
  
  
  useEffect(() => {
    const success = pos => {
      
      const obj = {
        lat: pos.coords.latitude ,
        lon: pos.coords.longitude
      }

    setLatlon (obj)      
    }
    const error = (err) => {

      console.log(err)
    }

    navigator.geolocation.getCurrentPosition(success, error) 

  } , []);

  useEffect (() =>{
    
    if (latlon) {
      const Apikey = `8ecd1fa2582fe9cc760abd87707fee86`
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&lon=${latlon.lon}&appid=${Apikey}`
      axios.get(url)
      .then (res => { 
        setweather(res.data)
        const celsius = (res.data.main.temp - 273.15).toFixed(1) 
        const farenheil = (celsius * 9/5 + 32).toFixed(1) 
        setTemperature({celsius , farenheil}) 
      })
      .catch (err => console.log(err))

    }
  } , [latlon])

  console.log(weather)

  
  return (
    <div className="App">
      
      {
        weather ?
          <WeatherCard 
            weather = {weather}  
            temperature= {temperature}
          />
        :
          <Loading/>
      }  
    </div>
  )
}

export default App
