import { useState, useRef } from "react";
import axios from "axios";
import WeatherInformations from "./components/WeatherInformations/WeatherInformations.jsx";
import WeatherInformationsFiveDays from "./components/WeatherInformationsFiveDays/WeatherInformationsFiveDays.jsx";

function App() {
  const [weather, setWeather] = useState();
  const [weatherFiveDays, setWeatherFiveDays] = useState();

  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "b75793fd4693a7f3d96a8047bff890e4";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const urlDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const response = await axios.get(url);
    const responseFiveDays = await axios.get(urlDays);
    setWeather(response.data);
    setWeatherFiveDays(responseFiveDays.data);
  }

  return (
    <div className="max-w-5xl p-8 mx-auto">
      <h1 className=" text-3xl text-center text-white font-bold">
        Previsão do tempo
      </h1>

      <div className="flex justify-center mt-4 ">
        <input
          className=" border-black p-3 rounded-l-lg w-7/12 max-w-72 outline-none"
          ref={inputRef}
          type="text"
          placeholder="Digite o nome da cidade"
        />
        <button
          className="bg-lime-600  border-black p-3 bg-orange-500 rounded-r-lg text-white font-bold  hover:bg-orange-600 transition ease-in-out"
          onClick={searchCity}
        >
          Buscar
        </button>
      </div>

      {weather && <WeatherInformations weather={weather} />}

      {weatherFiveDays && (
        <WeatherInformationsFiveDays weatherFiveDays={weatherFiveDays} />
      )}
    </div>
  );
}

export default App;
