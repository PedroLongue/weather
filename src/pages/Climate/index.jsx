import React, { useEffect, useState } from 'react'
import './index.css';

const Climate = () => {
    const [weatherData, setWeatherData] = useState(null);

    async function fetchWeatherData() {
      const city = 'itaperuna'; 
      const apiKey = '3e43044975973fd54556815641ac836e';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados da API');
        }
        const data = await response.json();
        setWeatherData(data);
        console.log(data)
      } catch (error) {
        console.error('Erro:', error);
      }
    }

    useEffect(() => {
      fetchWeatherData();
    }, []);

    return (
        <div className='weather-wrapper'>
            {weatherData ? (
                <div className='weather-infos'>
                    <p style={{fontSize: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff'}}>
                    <img
                        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                        alt="Ícone do clima"
                        style={{height: '48px', width: '48px'}}
                        />{weatherData.weather[0].description}</p>
                    <p>Temperatura: {(weatherData.main.temp - 273.15).toFixed(1).replace('.', ',') }°C</p>
                    <p>Sensação térmica: {(weatherData.main.feels_like - 273.15).toFixed(1).replace('.', ',')}°C</p>
                    <p>Umidade: {weatherData.main.humidity}%</p>
                    <p>Temperatura mínima: {(weatherData.main.temp_min - 273.15).toFixed(1).replace('.', ',')}°C</p>
                    <p>Temperatura máxima: {(weatherData.main.temp_max - 273.15).toFixed(1).replace('.', ',')}°C</p>
                    
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    )
}

export default Climate