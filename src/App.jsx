import { useState } from "react";
import './App.css'

const App = () => {
  const key = "3141e8f4340008db49034c3e2ba954ee";
  let [data, setData] = useState(null);
  let [city, setCity] = useState("");

  let fetchData = async () => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    let json = await response.json();
    setData(json);
  };

  return (
    <div className="box">
      <h1>Weather app</h1>
      <input
        type="text"
        value={city}
        placeholder="type your city"
        onChange={(e) => setCity(e.target.value)} 
      />
      <button onClick={fetchData}>Get Weather</button>
      
      {!data ? (
        <h1></h1>
      ) : (
        <div className="container">
          <h2>{data.name}, {data.sys.country}🌨️</h2>
          <p>Temperature: {data.main.temp}°C</p>
          <p>Weather: {data.weather[0].description}</p>
          <p>Humidity: {data.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default App;
