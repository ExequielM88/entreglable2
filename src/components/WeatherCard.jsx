import React , {useState} from 'react'

const WeatherCard = ({weather , temperature}) => {
  
  const [isCelsius , setIsCelsius] = useState(true)

  const handleChangeTemperature = () => setIsCelsius(!isCelsius)

  return (
    <article className='container'>
      <div  className='container-info'>
        <h1>Weather app</h1>
        <h2>{weather?.name}, {weather?.sys.country}</h2>
        <section  className='infotime'>
          <header>
            <img className='icon' src= {`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
          </header>
          <article className='info-time2'>
            <h3>{weather?.weather[0].description}</h3>
            <ul>
              <li><span className='span1'>Winspeed</span><span className='span2'>{weather?.wind.speed} m/s</span></li>
              <li><span className='span1'>Clouds  </span><span className='span2'> {weather?.clouds.all} %</span></li>
              <li><span className='span1'>Pressure</span><span className='span2'>{weather?.main.pressure} hPa</span></li>
            </ul>
          </article>
        </section>
      </div>
      <footer className='footer'>
        <h4>
          { isCelsius
            ? `${temperature?.celsius }°C`
            : `${temperature?.farenheil }°F`
          }
        </h4>
        <button onClick = {handleChangeTemperature}>Change to {isCelsius ? "°F" : "°C" }</button>
      </footer>
    </article>
  )
}

export default WeatherCard