function WeatherInformations({ weather }) {
  return (
    <div className=" bg-white bg-opacity-80 p-8 my-4 rounded-2xl">
      <h2 className="text-3xl text-center">{weather.name}</h2>

      <div className="flex items-center my-2 justify-center gap-3">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="Imagem ilustrando o clima"
        />
        <p className="font-bold text-2xl">{Math.round(weather.main.temp)}ºC</p>
      </div>

      <p className="text-center capitalize text-xl">
        {weather.weather[0].description}
      </p>

      <div className="flex items-center justify-around mt-6">
        <p> Sensação termica: {Math.round(weather.main.feels_like)}ºC</p>
        <p> Humidade: {weather.main.humidity}%</p>
        <p>Pressão: {weather.main.pressure}</p>
      </div>
    </div>
  );
}

export default WeatherInformations;
